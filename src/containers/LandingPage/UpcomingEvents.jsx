import React from 'react';
import { Heading } from './components/Components';
import page from '../../assets/data/LandingPage/UpcomingEvents/UpcomingEvents.json';

const UpcomingEvents = () => (
  <div id="events" className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Heading className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl pb-10">
        {page.head}
      </Heading>

      {/* <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {page.events.map((event) => (
          <a key={event.id} href={`/event/${event.uid}`} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={require(`../../assets/data/LandingPage/UpcomingEvents/${event.icon}`)}
                alt={event.alt}
                className="w-full h-80 object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-1xl text-gray-700">
                  <p>{event.title}</p>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{event.datetime} </p>
              </div>
            </div>
          </a>
        ))}
      </div> */}

      <div className="hero-content text-center" width="80%">
        <div>
          <img
            src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/calendars/siiym_june_2022_calendar.jpeg`}
          />
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingEvents;
