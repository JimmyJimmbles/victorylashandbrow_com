import React, { useState } from 'react';
import Section from './Section';
import Decoration from '../Decoration/Decoration';
import axios from 'axios';

const ContactSection = ({ sectionData: { id, heading, tagline } }) => {
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    message: '',
  };
  const [state, setState] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const convertJSONToUrlEncoded = obj => {
    let str = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return str.join('&');
  };

  const handleChange = event => {
    event.persist();

    setState(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios({
      url: '/wp-json/contact-form-7/v1/contact-forms/116/feedback',
      method: 'POST',
      data: convertJSONToUrlEncoded(state),
    })
      .then(res => {
        if (res.data.status && 'mail_sent' === res.data.status) {
          setFormSubmitted(true);
          setFormMessage(res.data.message);

          return true;
        } else if (res.data.status && 'validation_failed' === res.data.status) {
          setFormSubmitted(true);
          setFormMessage(res.data.message);

          return true;
        }

        return false;
      })
      .catch(err => {
        setFormSubmitted(true);
        setFormMessage(err.message);
      });
  };

  return (
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
                  <form className="form">
                    <div className="row row--bottom">
                      <div className="column-xs-12 column-md-6">
                        <div className="form__field form__field--required">
                          <label htmlFor="fname" className="form__label">
                            Personal Information
                          </label>
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            className="form__input"
                            placeholder="First Name"
                            value={state.fname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="column-xs-12 column-md-6">
                        <div className="form__field">
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            className="form__input"
                            placeholder="Last Name"
                            value={state.lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="column-xs-12">
                        <div className="form__field">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form__input"
                            placeholder="Email"
                            value={state.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column-xs-12">
                        <div className="form__field form__field--required">
                          <label htmlFor="message" className="form__label">
                            Message
                          </label>
                          <textarea
                            rows="7"
                            className="form__input"
                            placeholder="Let us know"
                            id="message"
                            name="message"
                            value={state.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row row--center">
                      <div className="column-xs-12 column-sm-10 column-md-4">
                        <button
                          type="submit"
                          className="btn btn--secondary u--width-100"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    {formSubmitted && formMessage && (
                      <div className="row row--center u--margin-top-30">
                        <div className="column-xs-12 column-sm-10">
                          <span className="u--padding-10 u--border u--border-color-secondary u--display-block u--text-align-center">
                            {formMessage}
                          </span>
                        </div>
                      </div>
                    )}
                  </form>
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
};

export default ContactSection;
