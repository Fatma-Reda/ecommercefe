import * as actionTypes from "./actions";

const initialState = {
  products: [],
  categories: [
    { name: "Arts & Crafts" },
    { name: "Automotive" },
    { name: "Baby" },
    { name: "Books" },
    { name: "Eletronics" },
    { name: "Health & Household" },
    { name: "Military Accessories" },
    { name: "Movies & Television" },
    { name: "Toys & Games" }
  ],
  selectedProduct: {}
};

const reducer = (state = initialState, action) => {
  let productsArray = [...state.products];
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
      return {
        ...state,
        products: productsGetFromHttp
      };

    case actionTypes.ADD_PRODUCT:
      productsArray = [...state.products];
      console.log(action.payload);
      productsArray.push(action.payload);
      return {
        ...state,
        products: productsArray
      };

    case actionTypes.REMOVE_PRODUCT:
      const productIndex = productsArray.findIndex(
        product => product.id === action.payload
      );
      console.log("reducer delete ", action.payload);
      productsArray.splice(productIndex, 1);
      return {
        ...state,
        products: productsArray
      };

    case actionTypes.SHOW_PRODUCT_DETAILS:
      console.log("reducer view ", action.payload);
      return {
        ...state,
        selectedProduct: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
