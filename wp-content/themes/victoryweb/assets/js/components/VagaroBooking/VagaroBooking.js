import React, { useRef } from 'react';
import useScript from '../hooks/useScript';

const VagaroBooking = () => {
  const vagaroRef = useRef(null);

  useScript(
    'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCpavDZ8cT3qmV35y79oz34mC2PeFJ4mC30m9dSycPCu7gCmjZcoapOUc8?v=2gutV0c0xxCcMuTayloepZeypgsPichkLakHZgovK97#',
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
