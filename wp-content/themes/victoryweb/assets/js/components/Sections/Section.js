import React from 'react';
import classnames from 'classnames';

const Section = ({ id, classNames, children }) => (
  <section id={id} className={classnames('section', classNames)}>
    {children}
  </section>
);

export default Section;
