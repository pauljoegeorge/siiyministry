import { useState } from 'react';

function useJson() {
  const [about, setAbout] = useState();
  const [leaders, setLeaders] = useState();
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [vision, setVision] = useState();

  const getAboutUs = async () => {
    fetch('./data/About.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setAbout(data);
      });
  };

  const getLeaders = async () => {
    fetch('./data/Leaders.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setLeaders(data);
      });
  };

  const getUpcomingEvents = async () => {
    const url = `${window.location.origin}/data/UpcomingEvents.json`;
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setUpcomingEvents(data);
      });
  };

  const getVision = async () => {
    fetch('./data/Vision.json')
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

export { useJson };
