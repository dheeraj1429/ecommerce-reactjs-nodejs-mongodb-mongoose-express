import React from 'react';
import EditHeadingComponent from '../../DashboardComponents/EditHeadingComponent/EditHeadingComponent';

import './ReviewComponent.css';

function ReviewComponent({ userProfile, data }) {
  return (
    <div className="Review_div py-4">
      <div className="col-12 d-flex">
        <div className="user_review_profile">
          <img src={userProfile ? userProfile : null} alt="" />
        </div>
        {data ? (
          <div className="user_review_info ms-3 w-100">
            <EditHeadingComponent heading={data.name} style={'style2'} />
            <p>{data.comment}</p>
            <div className="d-flex  review_i align-items-center justify-content-between">
              <div className="d-flex  align-items-center">
                <i class="far fa-calendar-alt"></i>
                <p className="ms-2">{data.time}</p>
              </div>
              <i class="fas fa-trash"></i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ReviewComponent;
