import React from 'react';

import './DashboardSmHeadingComponent.css';

function DashboardSmHeadingComponent({ heading, subTitel, ExtraCl }) {
  return (
    <div className="uploadProduct_info_div">
      <h3 className={ExtraCl ? ExtraCl : null}>{heading}</h3>
      {subTitel ? <p>{subTitel}</p> : null}
    </div>
  );
}

export default DashboardSmHeadingComponent;
