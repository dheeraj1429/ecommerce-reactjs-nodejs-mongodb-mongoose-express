import React, { useState } from 'react';

import './ClickTabsComponent.css';

function ClickTabsComponent({ data }) {
   const [IsActive, setIsActive] = useState(null);

   const UpdateValueFunction = function (e) {
      setIsActive(e.target.getAttribute('data-target'));
   };

   return (
      <div className="Tabs_Component_div">
         {data ? (
            <>
               {data.map((el) => (
                  <div
                     className={
                        el.el === IsActive
                           ? 'tabs_component_inner_div tabs_component_inner_div_active'
                           : 'tabs_component_inner_div'
                     }
                     data-target={el.el}
                     onClick={UpdateValueFunction}
                  >
                     <p className="mb-0" data-target={el.el}>
                        {el.el}
                     </p>
                  </div>
               ))}
            </>
         ) : null}
      </div>
   );
}

export default ClickTabsComponent;
