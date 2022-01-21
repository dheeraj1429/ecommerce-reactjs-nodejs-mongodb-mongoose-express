import React from 'react';

import './EditHeadingComponent.css';

function EditHeadingComponent({ heading, tab, style }) {
  return (
    <div className="row editHeading_div">
      <div className="col-12 col-sm-12 col-md-6">
        <h1 className={style ? style : null}>{heading}</h1>
      </div>
      <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-end">
        <p>{tab}</p>
      </div>
    </div>
  );
}

export default EditHeadingComponent;
