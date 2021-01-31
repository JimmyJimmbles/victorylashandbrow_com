import React from 'react';
import Section from '../Sections/Section';
import Decoration from '../Decoration/Decoration';

const AboutSection = ({
  sectionData: { id, heading, tagline, image, description, call_to_action },
}) => (
  <>
    <Section id={id}>
      <div className="container">
        <div className="row">
          <div className="column-xs-12">
            <div className="section__heading section__heading--md">
              <h1 className="section__heading__title">{heading}</h1>
              <h2 className="section__heading__tagline">{tagline}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column-xs-12 column-md-10 column-md-offset-1 column-lg-offset-3 column-lg-7">
            <Decoration
              w={180}
              h={180}
              color="secondary"
              left={-90}
              top={-125}
              animationDuration={43}
            />
            <div className="paper">
              <div className="paper__header">
                <div className="paper__image paper__image--border">
                  <img src={image.url} alt={`${image.title}`} />
                </div>
              </div>
              <div className="paper__body">
                <div
                  className="wysiwyg"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div className="paper__footer u--text-align-center">
                <h2 className="u--margin-0 u--font-family-secondary u--color-secondary">
                  {call_to_action.title}
                </h2>
                <p
                  className="u--margin-top-0 u--margin-bottom-20 u--font-style-italic h4"
                  dangerouslySetInnerHTML={{
                    __html: call_to_action.secondary_title,
                  }}
                />
                <a
                  className="btn btn--secondary"
                  href={call_to_action.action.url}
                >
                  {call_to_action.action.title}
                </a>
              </div>
            </div>
            <Decoration
              w={180}
              h={180}
              color="black"
              right={-90}
              bottom={120}
              animationDuration={36}
            />
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default AboutSection;
