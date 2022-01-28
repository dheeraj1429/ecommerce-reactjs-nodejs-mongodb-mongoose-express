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

// single product selected
export const singleProductSelected = function (data) {
  return {
    type: ACTION_TYPE.SINGLE_PRODUCT_SELECT,
    payload: data,
  };
};

// Add To Card
export const addtoCard = function (data) {
  return {
    type: ACTION_TYPE.ADD_TO_CART,
    payload: data,
  };
};

// search product from the databse -----------------

// Show Add To Cart Popup
export const showAddToCartPopup = function (data) {
  return {
    type: ACTION_TYPE.SHOW_ADD_TO_CART_POPUP,
    payload: data,
  };
};

// add to cart selected product
export const addToSelected = function (data) {
  return {
    type: ACTION_TYPE.ADD_TO_SELECTED,
    payload: data,
  };
};

// add to wishlist products
export const addWishList = function (data) {
  return {
    type: ACTION_TYPE.ADD_TO_WISHLIST,
    payload: data,
  };
};

// Close sidebar component
export const closeSiderBar = function (data) {
  return {
    type: ACTION_TYPE.CLOSE_SIDE_BAR,
    payload: data,
  };
};

// sign in and login user
export const signIn = function (data) {
  return async function (dispatch) {
    try {
      const userRef = await fetch('/user/new', {
        headers: {
          'content-type': 'application/json',
        },

        method: 'POST',

        body: JSON.stringify({
          data,
        }),
      });

      const userDataRef = await userRef.json();

      dispatch({
        type: ACTION_TYPE.USER_LOGIN_STATUS,
        payload: userDataRef,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPE.USER_LOGIN_STATUS,
        payload: err,
      });
    }
  };
};

// Find User
export const FindUser = function (data) {
  console.log(data);

  return async function (dispatch) {
    try {
      const FindUserRef = await fetch('/user/find', {
        headers: {
          'content-type': 'application/json',
        },

        method: 'POST',

        body: JSON.stringify({
          data,
        }),
      });

      const userRef = await FindUserRef.json();

      console.log(userRef);

      dispatch({
        type: ACTION_TYPE.USER_LOGIN_STATUS,
        payload: userRef,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPE.USER_LOGIN_STATUS,
        payload: err,
      });
    }
  };
};
