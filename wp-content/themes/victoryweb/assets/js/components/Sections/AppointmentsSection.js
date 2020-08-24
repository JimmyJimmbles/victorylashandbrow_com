import React from 'react';
import Section from './Section';
import VagaroBooking from '../VagaroBooking/VagaroBooking';
import Decoration from '../Decoration/Decoration';

const AppointmentsSection = ({ sectionData: { id, heading, tagline } }) => (
  <>
    <Section id={id}>
      <div className="container container--sm u--margin-bottom-30">
        <div className="row">
          <div className="column-xs-12">
            <div className="section__heading">
              <h1 className="section__heading__title">{heading}</h1>
              <h2 className="section__heading__tagline">{tagline}</h2>
            </div>
          </div>
          <div className="column-xs-12">
            <Decoration
              w={220}
              h={220}
              color="primary"
              right={-90}
              top={60}
              zIndex={-2}
              animationDuration={45}
            />
            <VagaroBooking />
            <Decoration
              w={115}
              h={115}
              color="secondary"
              left={-30}
              bottom={-40}
              zIndex={-2}
              animationDuration={36}
            />
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default AppointmentsSection;
