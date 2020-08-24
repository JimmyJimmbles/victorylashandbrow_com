import React from 'react';
import Section from './Section';
import Decoration from '../Decoration/Decoration';

const ContactSection = ({ sectionData: { id, heading, tagline } }) => (
  <>
    <Section id={id} classNames="u--bg-color-secondary">
      <div className="container">
        <div className="row">
          <div className="column-xs-12">
            <div className="section__heading u--margin-bottom-30 u--padding-bottom-30">
              <h1 className="section__heading__title">{heading}</h1>
              <h2 className="section__heading__tagline">{tagline}</h2>
            </div>
          </div>
        </div>

        <div className="row row--center">
          <div className="column-xs-12 column-md-10 column-lg-8">
            <Decoration
              w={115}
              h={115}
              color="black"
              left={75}
              top={-55}
              zIndex={0}
              animationDuration={33}
            />
            <div className="paper u--margin-bottom-30">
              <div className="u--border u--border-color-secondary u--padding-30">
                <h3 className="u--text-align-center u--color-primary u--font-weight-black u--margin-top-10">
                  Get In Touch
                </h3>
                <div className="form">
                  <div className="row">
                    <div className="column-xs-12">
                      <label htmlFor="fname" className="form__label">
                        Personal Information
                      </label>
                    </div>
                    <div className="column-xs-12 column-md-6">
                      <div className="form__field">
                        <input
                          type="text"
                          id="fname"
                          className="form__input"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="column-xs-12 column-md-6">
                      <div className="form__field">
                        <input
                          type="text"
                          id="lname"
                          className="form__input"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="column-xs-12">
                      <div className="form__field">
                        <input
                          type="email"
                          id="email"
                          className="form__input"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column-xs-12">
                      <label htmlFor="fname" className="form__label">
                        Message
                      </label>
                    </div>
                    <div className="column-xs-12">
                      <div className="form__field">
                        <textarea
                          rows="7"
                          className="form__input"
                          placeholder="Let us know"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row row--center">
                    <div className="column-xs-12 column-sm-10 column-md-4">
                      <button
                        type="submit"
                        className="btn btn--secondary u--width-100"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Decoration
              w={100}
              h={100}
              color="primary"
              right={100}
              bottom={-17}
              zIndex={0}
              animationDuration={50}
            />
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default ContactSection;
