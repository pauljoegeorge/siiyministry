import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Heading } from './components/Components';
import { useData } from '../../hooks/useData';

const EventWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const UpcomingEvents = () => {
  const { upcomingEvents, actions } = useData();

  useEffect(() => {
    actions.getUpcomingEvents();
  }, []);

  return (
    <div id="events" className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Heading className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl pb-10">
          {upcomingEvents?.head}
        </Heading>
        <EventWrapper>
          {upcomingEvents?.events?.map((event) => (
            <a key={event?.id} href={`/event/${event?.uid}`} className="group">
              <div className="mt-10 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/upcoming_events/${event?.icon}`}
                  alt={event?.alt}
                  className="w-full h-80 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 items-center">
                <div>
                  <h3 className="text-1xl text-gray-700">
                    <p>{event?.title}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{event?.datetime} </p>
                  <button className="mt-1 gap-2 w-full btn-success border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <p className="text-white text-lg">Join event</p>
                  </button>
                </div>
              </div>
            </a>
          ))}
        </EventWrapper>
      </div>
      <div className="hero-content text-center" width="80%">
        <div>
          <img
            src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/calendars/siiym_calendar.jpeg`}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
