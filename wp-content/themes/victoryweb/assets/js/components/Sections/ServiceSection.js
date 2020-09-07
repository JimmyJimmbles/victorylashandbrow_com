import React, { Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Section from '../Sections/Section';
import Decoration from '../Decoration/Decoration';
import classnames from 'classnames';

const ServiceSection = ({
  sectionData: { id, heading, tagline, services },
}) => {
  const [serviceActive, setServiceActive] = useState(false);
  const [serviceData, setServiceData] = useState({});
  const [lastItemInRow, setLastItemInRow] = useState(null);

  const handleToggle = (target, service) => {
    serviceActive === true && service.ID === serviceData.ID
      ? setServiceActive(false)
      : setServiceActive(true);

    let serviceColumns = document.querySelectorAll('.service-column');
    let parentColumnTop = target
      .closest('.service-column')
      .getBoundingClientRect().top;
    let row = [...serviceColumns].filter((elm, index) => {
      return elm.getBoundingClientRect().top === parentColumnTop;
    });

    setLastItemInRow(row[row.length - 1]);

    setServiceData(service);
  };

  return (
    <>
      <Section id={id} classNames="u--bg-color-secondary">
        <div className="container u--padding-bottom-30">
          <div className="row">
            <div className="column-xs-12">
              <div className="section__heading">
                <h1 className="section__heading__title">{heading}</h1>
                <h2 className="section__heading__tagline">{tagline}</h2>
              </div>
            </div>
          </div>
          <Decoration w={220} h={220} color="black" right={-20} top={75} />
          <div className="paper paper--sm">
            <div className="row row--center row--align-content-middle row--service">
              {services.map((service, key) => (
                <Fragment key={key}>
                  <div
                    id={service.ID}
                    className="column-xs-12 column-md-6 column-lg-4 service-column"
                    onClick={e => handleToggle(e.target, service)}
                  >
                    <div className="service-item">
                      <div
                        className="service-item__content"
                        style={{ backgroundImage: `url(${service.thumbnail})` }}
                      >
                        <img
                          src={service.thumbnail}
                          title={service.post_title}
                          className="u--screen-reader-only"
                        />
                        <h3 className="service-item__title h5">
                          {service.post_title}
                        </h3>
                        <div className="service-item__trigger"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classnames('service-details-container', {
                      'service-details-container--active':
                        serviceActive === true &&
                        service.ID === Number(lastItemInRow.id),
                    })}
                  >
                    <CSSTransition
                      in={
                        serviceActive && service.ID === Number(lastItemInRow.id)
                      }
                      timeout={300}
                      classNames="service-details"
                      unmountOnExit
                    >
                      <ServiceDetails
                        title={serviceData.post_title}
                        content={serviceData.post_content}
                      />
                    </CSSTransition>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <Decoration w={100} h={100} color="primary" bottom={0} left={40} />
        </div>
      </Section>
    </>
  );
};

const ServiceDetails = ({ title, content }) => {
  return (
    <div className="u--margin-left-15 u--margin-right-15">
      <h1 className="u--margin-top-0">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ServiceSection;
