import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  ProductRefStatus: null,
  allProducts: null,
  ProductSelected: null,
  SingleProductSelected: null,
  AddToCart: [],
  showAddToCardPopUp: false,
  AddToSelectedProduct: null,
  WishListProducts: [],
  CloseSidebar: false,
  UserLoginStatus: null,
  ShowPrevImageDiv: false,
  ShowSelectedPrevImage: null,
  AllAppUsersInfo: null,
  ChangeUserInfoStatus: null,
};

// Group Add To card product
const groupProducts = function (card, addTocardItems) {
  const present = card.find((el) => el._id === addTocardItems._id);

  if (present) {
    return card.map((el) =>
      el._id === addTocardItems._id ? { ...el, quntity: el.quntity + addTocardItems.quntity, totalPrice: el.totalPrice + el.price } : el
    );
  }

  return [...card, { ...addTocardItems, quntity: addTocardItems.quntity ? addTocardItems.quntity : 1, totalPrice: addTocardItems.price }];
};

// Remove the password from the fetch users info => Security
const removePasswordFetch = function (data) {
  const userDataSc = data.userRefData.map((el) => {
    el.password = undefined;
    return el;
  });

  return userDataSc;
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCTS:
      return {
        ...state,
        ProductRefStatus: action.payload,
      };

    case ACTION_TYPE.PRODUCT_DATA_STATUS:
      return {
        ...state,
        ProductRefStatus: null,
      };

    case ACTION_TYPE.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case ACTION_TYPE.PRODUCTS_SELECTED:
      return {
        ...state,
        ProductSelected: action.payload,
      };

    case ACTION_TYPE.SINGLE_PRODUCT_SELECT:
      return {
        ...state,
        SingleProductSelected: action.payload,
      };

    case ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        AddToCart: groupProducts(state.AddToCart, action.payload),
      };

    case ACTION_TYPE.ADD_TO_WISHLIST:
      return {
        ...state,
        WishListProducts: groupProducts(state.WishListProducts, action.payload),
      };

    case ACTION_TYPE.SHOW_ADD_TO_CART_POPUP:
      return {
        ...state,
        showAddToCardPopUp: action.payload,
      };

    case ACTION_TYPE.ADD_TO_SELECTED:
      return {
        ...state,
        AddToSelectedProduct: action.payload,
      };

    case ACTION_TYPE.CLOSE_SIDE_BAR:
      return {
        ...state,
        CloseSidebar: action.payload,
      };

    case ACTION_TYPE.USER_LOGIN_STAUS:
      return {
        ...state,
        UserLoginStatus: action.payload,
      };

    case ACTION_TYPE.SHOW_PRE_IMAGE:
      return {
        ...state,
        ShowPrevImageDiv: action.payload,
      };

    case ACTION_TYPE.SHOW_PREV_SELECTED_IMAGE:
      return {
        ...state,
        ShowSelectedPrevImage: action.payload,
      };

    case ACTION_TYPE.GET_ALL_USER_INFO:
      return {
        ...state,
        AllAppUsersInfo: removePasswordFetch(action.payload),
      };

    case ACTION_TYPE.CHANGE_USER_INFO:
      return {
        ...state,
        ChangeUserInfoStatus: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
