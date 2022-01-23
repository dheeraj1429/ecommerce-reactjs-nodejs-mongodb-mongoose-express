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
};

// Group Add To card product
const groupProducts = function (card, addTocardItems) {
  const present = card.find((el) => el._id === addTocardItems._id);

  if (present) {
    return card.map((el) => (el._id === addTocardItems._id ? { ...el, quntity: el.quntity + 1, totalPrice: el.totalPrice + el.price } : el));
  }

  return [...card, { ...addTocardItems, quntity: 1, totalPrice: addTocardItems.price }];
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

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
