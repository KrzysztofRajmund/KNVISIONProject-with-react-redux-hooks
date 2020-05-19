import { GET_ITEMS } from "./types";
import { GET_PRODUCTDETAILS } from "./types";

export const getItems = () => async (dispatch) => {
  try {
    var res = await fetch("http://localhost:3000/items/", {
      method: "GET",
    });

    if (res.ok) {
      var items = await res.json();

      dispatch({
        type: GET_ITEMS,
        payload: items,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    var res = await fetch("http://localhost:3000/items/" + id, {
      method: "GET",
    });

    if (res.ok) {
      var productDetails = await res.json();

      dispatch({
        type: GET_PRODUCTDETAILS,
        payload: productDetails,
      });
    }
  } catch (error) {
    console.log(error, "error to fetch specific product");
  }
};
