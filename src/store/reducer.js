import * as actionTypes from "./actions";

const initialState = {
  products: [],
  selectedProduct: {}
};

const reducer = (state = initialState, action) => {
  const productsArray = [...state.products];
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      let productsGetFromHttp = [];
      for (const key in action.payload) {
        productsGetFromHttp.push({
          productname: action.payload[key].productname,
          description: action.payload[key].description,
          price: action.payload[key].price,
          discount: action.payload[key].discount,
          category: action.payload[key].category,
          isonsale: action.payload[key].isonsale,
          userid: action.payload[key].userid,
          id: action.payload[key]._id
        });
      }
      console.log(productsGetFromHttp);
      return {
        ...state,
        products: productsGetFromHttp
      };

    case actionTypes.ADD_PRODUCT:
      productsArray = [...state.products];
      productsArray.push(action.payload);
      return {
        ...state,
        products: productsArray
      };

    case actionTypes.REMOVE_PRODUCT:
      const productIndex = productsArray.findIndex(
        product => product.id === action.payload
      );
      console.log("reducer delete ",action.payload);
      productsArray.splice(productIndex, 1);
      return {
        ...state,
        products: productsArray
      };

    case actionTypes.SHOW_PRODUCT_DETAILS:
     
      console.log("reducer view ",action.payload);
      return {
        ...state,
        selectedProduct: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
