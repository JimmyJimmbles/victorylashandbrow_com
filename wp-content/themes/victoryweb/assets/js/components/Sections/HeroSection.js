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
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroSection = ({
  hero: {
    id,
    image: { url: imgUrl },
  },
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
    <Section id={id} classNames="hero">
      <div className="hero__content">
        <div className="hero__content__first">
          <h1 className="hero__content__heading">
            <Decoration
              w={100}
              h={100}
              color="primary"
              top={-10}
              left={-50}
              zIndex={-1}
              animationDuration={46}
            />
            {primaryHeading}
          </h1>
          <h2 className="hero__content__sub-heading">{secondaryHeading}</h2>
          <ul className="hero__content__actions">
            {menu.map((menu_item, index) => (
              <li key={index}>
                <AnchorLink
                  href={menu_item.nav_url}
                  className="btn"
                  title={`Scroll to: ${menu_item.nav_title}`}
                >
                  {menu_item.nav_title}
                </AnchorLink>
              </li>
            ))}
          </ul>
          <ul className="hero__content__actions--social">
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
        <div className="hero__content__second">
          <div className="hero__image">
            <img src={imgUrl} alt={`${primaryHeading} ${secondaryHeading}`} />
          </div>
          <Decoration
            w={100}
            h={100}
            color="black"
            top={-25}
            right={-25}
            animationDuration={33}
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
