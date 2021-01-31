import React, { useRef } from 'react';
import { useVagaro } from '../hooks';

const VagaroBooking = () => {
  const vagaroRef = useRef(null);

  useVagaro(
    'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCpavDZ8cT3qmV35y6JuSdBuOc1WJD1wOc1WO61CxdfeJE1wZCBOvifCs7fY?v=xh00FfsFRCnQZ4n92zocGj4OgoiwKVy9tSFyUlNelr30#',
    vagaroRef
  );

  return (
    <>
      <div className="paper">
        <div ref={vagaroRef} className="vagaro"></div>
      </div>
    </>
  );
};

export default VagaroBooking;
