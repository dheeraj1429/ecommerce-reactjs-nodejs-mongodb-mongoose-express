import React from 'react';

import './UserProfileInfoComponent.css';

function UserProfileInfoComponent({ user }) {
   return (
      <div className="user_profile_sm_div">
         <div className="user_profile_inner_div">
            <img src={user.userProfilePic} alt="" />
         </div>

         <div className="user_profile_info_div ms-3">
            <h5>{user.userProfileInfo.name}</h5>
            <p className="mb-0">{user.userProfileInfo.admin}</p>
         </div>
      </div>
   );
}

export default UserProfileInfoComponent;
