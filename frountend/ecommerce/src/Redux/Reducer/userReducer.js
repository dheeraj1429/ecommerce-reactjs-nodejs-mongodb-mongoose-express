import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  ProductRefStatus: null,
  allProducts: null,
  ProductSelected: null,
  SingleProductSelected: null,
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

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
