import { useState } from 'react';

function useData() {
  const [about, setAbout] = useState();
  const [leaders, setLeaders] = useState();
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [vision, setVision] = useState();

  const base_url = `${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public`;

  const getAboutUs = async () => {
    fetch(`${base_url}/about/About.json`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setAbout(data);
      });
  };

  const getLeaders = async () => {
    fetch(`${base_url}/leaders/Leaders.json`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setLeaders(data);
      });
  };

  const getUpcomingEvents = async () => {
    fetch(`${base_url}/upcoming_events/UpcomingEvents.json`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setUpcomingEvents(data);
      });
  };

  const getVision = async () => {
    fetch(`${base_url}/vision/Vision.json`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setVision(data);
      });
  };

  return {
    about,
    leaders,
    upcomingEvents,
    vision,
    actions: {
      getAboutUs,
      getLeaders,
      getUpcomingEvents,
      getVision
    }
  };
}

export { useData };
