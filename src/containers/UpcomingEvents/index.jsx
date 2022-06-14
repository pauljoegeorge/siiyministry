import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { pushEvent, events } from '../../utils/gtm';
import GCalendar from '!file-loader!../../assets/images/common/gcalendar.svg';
import upcomingEvents from '../../assets/data/LandingPage/UpcomingEvents/UpcomingEvents.json';

const UpcomingEventContainer = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const { uid } = useParams();
  const GCalendarBaseUrl = 'https://calendar.google.com/calendar/r/eventedit?';

  useEffect(() => {
    if (upcomingEvents) {
      const events = upcomingEvents.events;
      const event = events.filter((event) => event.uid === uid);
      if (Object.keys(event).length === 0) {
        return (location.href = '/error');
      }
      setUpcomingEvent(event[0]);
    }
  }, [upcomingEvents]);

  const saveToCalendar = (calendar) => {
    // NEED FIX;
    const eventDateArray = upcomingEvent?.datetime?.split(' ')?.[0]?.split('/');
    const from = upcomingEvent?.datetime?.split(' ')?.[1]?.split(':');
    const to = upcomingEvent?.datetime?.split(' ')?.[3]?.split(':');
    const eventFrom = new Date(
      eventDateArray[0],
      eventDateArray[1] - 1,
      eventDateArray[2],
      from[0],
      from[1]
    ).toISOString();
    const eventTo = new Date(
      eventDateArray[0],
      eventDateArray[1] - 1,
      eventDateArray[2],
      to[0],
      to[1]
    ).toISOString();
    const processedEventFrom = eventFrom?.replaceAll(/-|:|/gi, '')?.replace('.', '');
    const processEventTo = eventTo?.replaceAll(/-|:|/gi, '')?.replace('.', '');
    if (calendar === 'google') {
      pushEvent({ ...events.onClickSaveToSaveCalendar('google') });
      return window.open(
        `${GCalendarBaseUrl}text=${upcomingEvent.title}&dates=${processedEventFrom}/${processEventTo}`,
        '_blank'
      );
    }
  };

  const joinMeeting = (source = 'button') => {
    pushEvent({ ...events.onClickJoinEvent(source, upcomingEvent?.uid) });
    window.open(upcomingEvent?.register_link);
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <img
            src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/upcoming_events/${upcomingEvent?.icon}`}
            alt="about_us"
            className="w-full h-full object-contain object-cover"
          />
        </div>

        {/* Event title */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-2 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {upcomingEvent?.title}
            </h1>
          </div>

          {/* Event Info */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Date and Time</h2>
            <p className="text-3xl text-gray-900">{upcomingEvent?.date} </p>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={solid('clock')} size="2x" />
              <div className="flex items-center">
                <p className="ml-2 text-2xl text-gray-500">{upcomingEvent?.time}</p>
              </div>
            </div>

            <div className="mt-8 lg:row-span-3">
              <div className="flex items-center mt-3">
                <FontAwesomeIcon icon={solid('location-dot')} size="2x" />
                <div className="flex items-center">
                  <p className="ml-2 text-xl text-gray-700">{upcomingEvent?.location}</p>
                </div>
              </div>
            </div>
            {upcomingEvent?.register_link && (
              <button
                onClick={() => joinMeeting()}
                className="mt-10 gap-2 w-full btn-success border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <p className="text-white text-lg">Register Online</p>
              </button>
            )}
            <button
              onClick={() => saveToCalendar('google')}
              className="mt-10 gap-2 w-full btn-success border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img src={GCalendar} alt="A Rectangle Image with SVG" height="45px" width="45px" />
              <p className="text-white text-lg">Save to Calendar</p>
            </button>
            {/* <button
              onClick={() => saveToCalendar("outlook")}
              className="mt-10 gap-2 w-full btn-success border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img src={OutlookCalendar} alt="A Rectangle Image with SVG" height="45px" width="45px" />
              <p className="text-lg text-white">Save to Calendar</p>
            </button> */}
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html: upcomingEvent?.description?.replaceAll('\n', '<br />')
                  }}
                  className="text-gray-900  text-lg"
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                {upcomingEvent?.highlights?.head}
              </h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {upcomingEvent?.highlights?.bullets?.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900">
                {upcomingEvent?.moreDetails?.head}
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{upcomingEvent?.moreDetails?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventContainer;
