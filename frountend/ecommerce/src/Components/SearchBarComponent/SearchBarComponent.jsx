import React from 'react';

import './SearchBarComponent.css';

function SearchBarComponent({ onChange, Value }) {
  return (
    <div className="d-flex">
      <div className="Search_bar_div">
        <div className="searchIconsDiv">
          <i class="fas fa-search"></i>
        </div>
        <input type="search" placeholder="Search" value={Value ? Value : null} onChange={onChange ? onChange : null} />
      </div>
      <div className="box_div ms-2">
        <i class="fas fa-th-large"></i>
      </div>
    </div>
  );
}

export default SearchBarComponent;
