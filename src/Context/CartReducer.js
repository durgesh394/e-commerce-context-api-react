import { ADD_TO_CART, INC, DEC, REMOVE_TO_CART } from "./Action";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let checkout = state.cart.find((elm) => elm.id === action.data.id);
      if (checkout) {
        // alert("product already is in  cart");
        toast.warn("Item already is in cart", {
          position: "bottom-center",
        });

        return { ...state };
      } else {
        let price = parseInt(state.totalprice) + parseInt(action.item_price);
        action.data.qty = 1;
        action.data.pri = 0;
        //parseInt(state.Qty) + parseInt(action.item_Qty);
        toast.success("item added to cart...", {
          position: "bottom-center",
          autoClose: 100,
        });
        return {
          ...state,
          cart: [...state.cart, action.data],
          totalprice: price,
        };
      }
    }

    //increament item quentity
    case INC:
      const data = state.cart.find((elm) => elm.id === action.productID);

      if (data.qty < data.stock) {
        const update_Qty = (data.qty += 1);
        data.updatedPrice = data.price * update_Qty;
        return {
          ...state,
          cart: [...state.cart],
          Qty: update_Qty,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart],
        };
      }
    //End increament item quentity

    //decrement product quintity
    case DEC:
      const pro = state.cart.find((item) => item.id === action.ProductID);
      if (pro.qty > 1) {
        const update_Qty = (pro.qty -= 1);

        return {
          ...state,
          Qty: update_Qty,
          cart: [...state.cart],
        };
      } else {
        return { ...state };
      }

    case REMOVE_TO_CART:

      let filterd = state.cart.filter((elm) => elm.id !== action.ProductID);
          toast.error("Item Removed from cart",{
            position : "bottom-center",
            autoClose :100
          })
      return {
        ...state,
        cart: filterd,
      };
    default:
      return { ...state };
  }
};

export default CartReducer;
