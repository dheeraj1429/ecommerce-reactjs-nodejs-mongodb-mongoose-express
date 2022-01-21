import React from 'react';

import './DashboardHeadingComponent.css';

function DashboardHeadingComponent({ heading }) {
  return (
    <div className="dashboardHeading_div pt-3">
      <p>{heading}</p>
    </div>
  );
}

export default DashboardHeadingComponent;
