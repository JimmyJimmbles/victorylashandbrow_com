import React from 'react';
import Section from '../Sections/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const HeroSection = ({
  section_data: {
    hero: {
      id,
      image: { url: imgUrl },
    },
  },
  theme_settings: { primary_heading, secondary_heading, social_media },
  primary_menu,
}) => {
  console.log(social_media);
  const socialIcons = {
    facebook_f: faFacebookF,
    instagram: faInstagram,
    linkedin_in: faLinkedin,
    twitter: faTwitter,
    youtube: faYoutube,
  };

  return (
    <Section id={id} classNames="hero">
      <div className="hero__content">
        <div className="hero__content__first">
          <h1 className="hero__content__heading">{primary_heading}</h1>
          <h2 className="hero__content__sub-heading">{secondary_heading}</h2>
          <ul className="hero__content__actions">
            {primary_menu.map((menu_item, index) => (
              <li key={index}>
                <a
                  className="btn"
                  href={menu_item.nav_url}
                  title={`Scroll to: ${menu_item.nav_title}`}
                >
                  {menu_item.nav_title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="hero__content__actions--social">
            {social_media.map((social, index) => (
              <li key={index}>
                <a
                  className="btn"
                  href={social.url}
                  title={`Follow us ${social.site.label}`}
                >
                  <FontAwesomeIcon icon={socialIcons[social.site.value]} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__content__second">
          <div className="hero__image">
            <img src={imgUrl} alt={`${primary_heading} ${secondary_heading}`} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
