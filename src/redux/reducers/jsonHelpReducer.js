import { createAction, createReducer } from '@reduxjs/toolkit';
import produce from 'immer';

/* prettier-ignore */
const INITIAL_STATUS = {
  "head": "Upcoming Events",
  "events": [
    {
      "id": 1,
      "uid": "YotsuyaWalk",
      "title": "Yotsuya Walk January",
      "datetime": "2023/01/15 13:00 ~ 16:00",
      "date": "15th January 2023 (Sun)",
      "time": "13:00 ~ 16:00",
      "location": "St. Ignatius Church Room 103",
      "more": "Join",
      "icon": "yotsuya-walk.jpeg",
      "alt": "Yotsuya Walk 2023",
      "href": "#",
      "register_link": "https://forms.gle/Xn34NhpHgHreoD7k8",
      "description": "This activity is one of the Ignatius Church International Youth Association's project called 'Language Cafe'. \n Yotsuya is an area adjacent to history, culture, tourism, and attractions. Fun activity to get to know such a charming town and fishing areas within walking distance. \n Learn more about the four pillars and love the church more.\nThis time, we're going to the Tokyo Fire Museum in Yotsuya 3-chome with the theme 'Chasing BTS 400 years ago 🔥'. 'Fire and smoke are the pillars of the universe' The word is an act of quenching a fire. 400-year-old idol 'Fire Out' had a tough audition like BTS 😳\n\nTO KNOW SILENCE, KNOW THE FIRE! If you know fire extinguisher, you'll understand Okinawa = Tokyo = Japan!\n\n <a style='color: blue' href='https://forms.gle/Xn34NhpHgHreoD7k8' target='blank' rel='noreferrer'>Kindly fill out this form to pre-register</a> \n\n Hope to see you there!"
    }
  ]
}

export const addUpcomingEvent = createAction('add_upcoming_event');
export const updateUpcomingEvent = createAction('update_upcoming_event');
export const removeUpcomingEvent = createAction('remove_upcoming_event');
export const resetUpcomingEvents = createAction('reset_upcoming_events');

/* prettier-ignore */
const upcomingEventsReducer = createReducer(
  { ...INITIAL_STATUS },
  {
    // eslint-disable-next-line no-unused-vars
    'add_upcoming_event': (state, _) => {
      // eslint-disable-next-line no-unused-vars
      return produce(state, _ => {
        const defaultValue = {...INITIAL_STATUS['events'][0]};
        defaultValue['id'] = state['events'].length + 1;
        state['events'].push(defaultValue);
      });
    },
    'update_upcoming_event': (state, action) => {
      return produce(state, draft => {
        const { index, newValue, field } = action.payload;
        draft['events'][index][field] = newValue;
      })
    },
    'remove_upcoming_event': (state, action) => {
      const defaultValue = {...INITIAL_STATUS};
      const newEvents = state['events'].filter((event) => event.id !== action.payload);
      defaultValue['events'] = newEvents;
      return defaultValue;
    },
    'reset_upcoming_events': () => {
      return { ...INITIAL_STATUS };
    }
  }
);

export default upcomingEventsReducer;
