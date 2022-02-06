import { ACTION_TYPE } from '../ActionType/actionType';
import axios from 'axios';

const headers = {
   'Content-type': 'application/json',
};

// Insert New Products
export const addProduct = function (data) {
   return async function (dispatch) {
      try {
         const ref = await axios.post('/products/new', { data }, { headers });

         dispatch({
            type: ACTION_TYPE.ADD_PRODUCTS,
            payload: ref.data,
         });
      } catch (err) {
         console.log(err);
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
      const ref = await axios.post('/products/get/all', { headers });

      dispatch({
         type: ACTION_TYPE.FETCH_ALL_PRODUCTS,
         payload: ref.data,
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
         const userInserData = await axios.post('/user/new', { data }, { headers });

         if (userInserData.data) {
            localStorage.setItem('userinfo', JSON.stringify(userInserData.data));
         }

         if (userInserData) {
            dispatch({
               type: ACTION_TYPE.USER_LOGIN_STAUS,
               payload: userInserData.data,
            });
         }
      } catch (err) {
         console.log(err);
      }
   };
};

// Find User
export const FindUser = function (data) {
   return async function (dispatch) {
      try {
         const userFindFromDb = await axios.post('/user/find', { data }, { headers });

         if (userFindFromDb.data) {
            localStorage.setItem('userinfo', JSON.stringify(userFindFromDb.data));
         }

         dispatch({
            type: ACTION_TYPE.USER_LOGIN_STAUS,
            payload: userFindFromDb.data,
         });
      } catch (err) {
         console.log(err);
      }
   };
};

// stay login
export const stayLoginUser = function (data) {
   return {
      type: ACTION_TYPE.USER_LOGIN_STAUS,
      payload: data,
   };
};

// Show prev product Image
export const showPrevimage = function (data) {
   return {
      type: ACTION_TYPE.SHOW_PRE_IMAGE,
      payload: data,
   };
};

// show selected product image
export const showSelectedPrevImage = function (data) {
   return {
      type: ACTION_TYPE.SHOW_PREV_SELECTED_IMAGE,
      payload: data,
   };
};

// Get all users from the databse
export const getAllInfoAboutUser = function () {
   return async function (dispatch) {
      try {
         const getUserInfoData = await axios.post('/user/get-users', { headers });

         if (getUserInfoData) {
            dispatch({
               type: ACTION_TYPE.GET_ALL_USER_INFO,
               payload: getUserInfoData.data,
            });
         }
      } catch (err) {
         console.log(err);
      }
   };
};

// Change the use info from the database
export const changeUserInfo = function (data) {
   return async function (dispatch) {
      const userInfoRef = await axios.post('/user/changeUserInfo', { data }, { headers });

      dispatch({
         type: ACTION_TYPE.CHANGE_USER_INFO,
         payload: userInfoRef.data,
      });
   };
};

// wish list alert
export const wishListAlert = function (data) {
   return {
      type: ACTION_TYPE.WISHLIST_ALERT,
      payload: data,
   };
};

// remove withlist product
export const removeWishlistProduct = function (data) {
   return {
      type: ACTION_TYPE.REMOVE_WISHLIST_PRODUCT,
      payload: data,
   };
};

// Remove addto card products
export const removeAddToCardProduct = function (data) {
   return {
      type: ACTION_TYPE.REMOVE_ADD_TO_CART_PRODUCT,
      payload: data,
   };
};
