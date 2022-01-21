import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MenuComponent.css';

function MenuComponent({ title, Icon, list, isActive, secondIcon }) {
  const [ListData, setListData] = useState(list);
  const [ShowList, setShowList] = useState(false);
  const [ListActive, setListActive] = useState(null);

  const ChangeShowListFunction = function () {
    setShowList(!ShowList);
  };

  return (
    <div className="Dashboard_menu_div my-4">
      <div className="d-flex dropdown_div align-items-center justify-content-between Dashboard_heading_div" onClick={ChangeShowListFunction}>
        <div className="d-flex align-items-center">
          <i class={Icon}></i>
          <h3>{title}</h3>
        </div>
        {!secondIcon ? <i class={`fas fa-sort-${!ShowList ? 'down' : 'up'}`}></i> : null}
      </div>

      <ul className={!ShowList ? 'dashboard_list' : 'dashboard_list dashboard_list_active'}>
        {ListData !== undefined && ListData.length > 0
          ? ListData.map((el) => (
              <Link to={el.link ? el.link : el.el.toLowerCase().replaceAll(' ', '-')}>
                <li
                  key={el.el}
                  style={
                    isActive === true
                      ? {
                          display: 'block',
                        }
                      : {
                          display: 'none',
                        }
                  }
                >
                  <p
                    onClick={(e) => {
                      if (e.target.textContent === el.el) {
                        setListActive(el.el);
                      }
                    }}
                    className={ListActive == el.el ? 'listActive' : null}
                  >
                    {el.el}
                  </p>
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  );
}

export default MenuComponent;
