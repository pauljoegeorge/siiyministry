import React from 'react';
import LandingArea from '../../containers/LandingPage/LandingArea';
import About from '../../containers/LandingPage/About';
import Vision from '../../containers/LandingPage/Vision';
import Leaders from '../../containers/LandingPage/Leaders';
import UpcomingEvents from '../../containers/LandingPage/UpcomingEvents';

const LandingPage = () => (
  <>
    <LandingArea />
    <About />
    <Vision />
    <UpcomingEvents />
    <Leaders />
  </>
);

export default LandingPage;
