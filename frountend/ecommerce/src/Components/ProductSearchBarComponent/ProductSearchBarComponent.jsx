import React, { useState } from 'react';
import { searchProducts } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';
import './ProductSearchBarComponent.css';

function ProductSearchBarComponent() {
  const [SearchProuct, setSearchProduct] = useState('');

  const ChangeSearchInput = function (e) {
    setSearchProduct(e.target.value);
  };

  return (
    <div className="SearchBar_div">
      <div className="AllCategory_div d-flex justify-content-around">
        <p>All Category</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <input type="search" placeholder="Search" value={SearchProuct} onChange={ChangeSearchInput} />
      <div className="Search_bar_icon_div">
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}

export default ProductSearchBarComponent;
