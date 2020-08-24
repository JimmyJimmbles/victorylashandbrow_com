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
import Decoration from '../Decoration/Decoration';

const FooterSection = ({
  headings: { primaryHeading, secondaryHeading, socialMedia },
  menu,
}) => {
  const socialIcons = {
    facebook_f: faFacebookF,
    instagram: faInstagram,
    linkedin_in: faLinkedin,
    twitter: faTwitter,
    youtube: faYoutube,
  };
  return (
    <>
      <Section
        id="footer"
        classNames="section--footer u--bg-color-black u--border-radius-4 u--margin-30"
      >
        <Decoration
          w={120}
          h={120}
          color="primary"
          left={-25}
          top={-45}
          animationDuration={44}
        />
        <div className="container">
          <div className="u--text-align-center">
            <h1 className="footer-heading">{primaryHeading}</h1>
            <h2 className="footer-sub-heading">{secondaryHeading}</h2>
            <ul className="footer-actions">
              {menu.map((menu_item, index) => (
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
            <ul className="footer-actions--social">
              {socialMedia.map((social, index) => (
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
        </div>
        <Decoration
          w={100}
          h={100}
          color="light"
          right={30}
          bottom={30}
          animationDuration={35}
        />
      </Section>
    </>
  );
};

export default FooterSection;
