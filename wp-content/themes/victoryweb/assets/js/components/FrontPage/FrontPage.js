import React, { useState, useEffect } from 'react';
import HeroSection from '../Sections/HeroSection';

const FrontPage = () => {
  // base constants
  const { href } = window.location;
  const wpRestAPI = `${href}wp-json/pages/v2/frontpage`;

  // default states
  const [frontPageDataRoute, setFrontPageDataRoute] = useState(wpRestAPI);
  const [frontPageDataSections, setFrontPageDataSections] = useState({});
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const sections = await fetch(frontPageDataRoute)
        .then(res => res.json())
        .then(sections => sections);

      setFrontPageDataSections(sections);
      setAppIsReady(true); // set the app as ready since we have the data now
    };

    fetchData();
  }, []);

  return appIsReady ? <HeroSection {...frontPageDataSections} /> : '';
};

export default FrontPage;
