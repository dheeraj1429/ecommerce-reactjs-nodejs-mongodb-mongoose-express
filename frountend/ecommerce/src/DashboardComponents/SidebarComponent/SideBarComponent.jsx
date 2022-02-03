import React from 'react';
import DashboardHeadingComponent from '../DashboardHeadingComponent/DashboardHeadingComponent';
import MenuComponent from '../MenuComponent/MenuComponent';

import './SideBarComponent.css';

function SideBarComponent() {
  return (
    <div className="Sidebar_Div">
      <DashboardHeadingComponent heading={'Home'} />
      <MenuComponent secondIcon={false} isActive={true} title={'Dashboard'} Icon={'fas fa-house-user'} list={[{ el: 'Users' }]} />
      <DashboardHeadingComponent heading={'Apps'} />
      <MenuComponent secondIcon={true} isActive={false} title={'Chat'} Icon={'far fa-comment-alt'} />
      <MenuComponent
        secondIcon={false}
        isActive={true}
        title={'Ecommerce'}
        Icon={'fas fa-tshirt'}
        list={[
          { el: 'Products', link: 'products' },
          { el: 'Details', link: 'products/details' },
          { el: 'Add Products', link: 'add-products' },
        ]}
      />
      {/* <MenuComponent
        secondIcon={false}
        isActive={true}
        title={'Email'}
        Icon={'fas fa-envelope-open'}
        list={[{ el: 'Index' }, { el: 'Read Email' }]}
      /> */}
    </div>
  );
}

export default SideBarComponent;
