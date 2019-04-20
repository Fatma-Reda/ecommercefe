import Axios from "axios";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SHOW_PRODUCT_DETAILS = "SHOW_PRODUCT_DETAILS";
const baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

//Get Products
export const initproducts = () => {
  return dispatch => {
    Axios.get(`${baseURL}/products/`).then(response => {
      console.log("hiii");
      return dispatch(setProducts(response.data));
    });
  };
};

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

//Add Product

export const addProduct = () => {
  return dispatch => {
    Axios.post(`${baseURL}/products/addProduct`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => {
      dispatch(addNewProduct(response));
    });
  };
};

export const addNewProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

//Remove Product
export const removeProduct = id => {
  return dispatch => {
    Axios.delete(`${baseURL}/products/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(response => {
        dispatch(removeProductFromState(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const removeProductFromState = id => {
  return {
    type: REMOVE_PRODUCT,
    payload: id
  };
};

//Get Product By ID

export const getProductByID = id => {
  return dispatch =>
    Axios.get(`${baseURL}/products/${id}`).then(response => {
      dispatch(getProduct(response.data));
    });
};

export const getProduct = id => {
  return {
    type: SHOW_PRODUCT_DETAILS,
    payload: id
  };
};
