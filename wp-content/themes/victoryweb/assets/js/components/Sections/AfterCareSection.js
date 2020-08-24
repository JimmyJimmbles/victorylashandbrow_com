import React from 'react';
import Section from './Section';
import classnames from 'classnames';
import Decoration from '../Decoration/Decoration';

const AfterCareSection = ({
  sectionData: { id, heading, tagline, instructions },
}) => (
  <>
    <Section id={id}>
      <div className="container">
        <div className="row">
          <div className="column-xs-12">
            <div className="section__heading">
              <h1 className="section__heading__title">{heading}</h1>
              <h2 className="section__heading__tagline">{tagline}</h2>
            </div>
          </div>
        </div>

        <div className="row row--center">
          <div className="column-xs-12 column-lg-10">
            <div className="paper paper--md">
              <Decoration
                w={75}
                h={75}
                color="secondary"
                right={30}
                top={30}
                animationDelay={0.2}
                animationDuration={50}
              />
              <Decoration
                w={150}
                h={150}
                color="primary"
                left={-10}
                top="45%"
                zIndex={-2}
                animationDuration={48}
              />
              {instructions.length > 0 &&
                instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className={classnames('row row--bottom', {
                      'row--reverse': index % 2 !== 0,
                      'u--padding-top-30 u--padding-bottom-30 u--margin-top-15 u--margin-bottom-15':
                        index % 2 !== 0,
                    })}
                  >
                    <div className="column-xs-12 column-md-6">
                      <img
                        src={instruction.image.url}
                        alt={`${instruction.image.title}`}
                        className="u--border-radius-4 u--margin-bottom-15"
                      />
                    </div>
                    <div className="column-xs-12 column-md-5">
                      <h6 className="u--margin-top-0 u--color-primary u--font-weight-black">
                        <span className="paper__counter">{index + 1}</span>{' '}
                        {instruction.heading}
                      </h6>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: instruction.description,
                        }}
                      />
                    </div>
                  </div>
                ))}
              <Decoration
                w={80}
                h={80}
                color="black"
                right={10}
                bottom={-70}
                animationDuration={34}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default AfterCareSection;
