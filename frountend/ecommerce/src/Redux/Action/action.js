import { ACTION_TYPE } from '../ActionType/actionType';

// Insert New Products
export const addProduct = function (data) {
  return async function (dispatch) {
    try {
      const ref = await fetch('/products/new', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',

        body: JSON.stringify({
          data,
        }),
      });

      const ProductRef = await ref.json();

      dispatch({
        type: ACTION_TYPE.ADD_PRODUCTS,
        payload: ProductRef,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPE.ADD_PRODUCTS,
        payload: {
          success: false,
          message: 'Something worng!!',
        },
      });
    }
  };
};

export const productDataInfo = function () {
  return {
    type: ACTION_TYPE.PRODUCT_DATA_STATUS,
  };
};

// Fetch all products from the db
export const fetchAllProducts = function () {
  return async function (dispatch) {
    const ref = await fetch('/products/get/all', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    });

    const ProductRef = await ref.json();

    dispatch({
      type: ACTION_TYPE.FETCH_ALL_PRODUCTS,
      payload: ProductRef,
    });
  };
};

// Selected Product
export const selectedProduct = function (data) {
  return {
    type: ACTION_TYPE.PRODUCTS_SELECTED,
    payload: data,
  };
};
