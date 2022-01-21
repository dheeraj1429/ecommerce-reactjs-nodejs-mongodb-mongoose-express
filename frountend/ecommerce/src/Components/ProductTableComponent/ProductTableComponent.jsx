import React from 'react';

import './ProductTableComponent.css';

function ProductTableComponent({ data }) {
  return (
    <table class="table table-bordered mt-3 mb-5">
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{data.name}</td>
        </tr>
        <tr>
          <th scope="row">rating</th>
          <td>{data.rating}</td>
        </tr>
        <tr>
          <th scope="row">Category</th>
          <td>{data.category}</td>
        </tr>
        <tr>
          <th scope="row">Brand</th>
          <td>{data.brand}</td>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td>{data.price}</td>
        </tr>
        <tr>
          <th scope="row">Gender</th>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTableComponent;
