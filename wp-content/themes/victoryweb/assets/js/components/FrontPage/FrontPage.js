import React, { useState, useEffect } from 'react';
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  AppointmentsSection,
  ContactSection,
  AfterCareSection,
  FooterSection,
} from '../Sections';

const FrontPage = () => {
  // base constants
  const { href } = window.location;
  const urlRegex = /([#].*[^\/])/g;
  const site = href.replace(urlRegex, '');
  const wpRestAPI = `${site}wp-json/pages/v2/frontpage`;

  // default states
  const defaultData = {
    primary_menu: null,
    secondary_menu: null,
    section_data: {
      hero: null,
      about: null,
      services: null,
      appointments: null,
      contact: null,
      after_care: null,
    },
    theme_settings: {
      primary_heading: null,
      secondary_heading: null,
      social_media: null,
    },
  };
  const [frontPageDataSections, setFrontPageDataSections] = useState(
    defaultData
  );
  const [appIsReady, setAppIsReady] = useState(false);

  const fetchData = async () =>
    await fetch(wpRestAPI)
      .then(res => res.json())
      .then(sections => sections);

  useEffect(() => {
    fetchData().then(res => {
      setFrontPageDataSections(res);
      setAppIsReady(true); // set the app as ready since we have the data now
    });
  }, []);

  const {
    primary_menu,
    secondary_menu,
    section_data: { hero, about, services, appointments, contact, after_care },
    theme_settings: { primary_heading, secondary_heading, social_media },
  } = frontPageDataSections;

  return appIsReady ? (
    <>
      <HeroSection
        hero={hero}
        headings={{
          primaryHeading: primary_heading,
          secondaryHeading: secondary_heading,
          socialMedia: social_media,
        }}
        menu={primary_menu}
      />
      <AboutSection sectionData={about} />
      <ServiceSection sectionData={services} />
      <AppointmentsSection sectionData={appointments} />
      <ContactSection sectionData={contact} />
      <AfterCareSection sectionData={after_care} />
      <FooterSection
        headings={{
          primaryHeading: primary_heading,
          secondaryHeading: secondary_heading,
          socialMedia: social_media,
        }}
        menu={secondary_menu}
      />
    </>
  ) : (
    ''
  );
};

export default FrontPage;
