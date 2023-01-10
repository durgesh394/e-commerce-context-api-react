import React, { useContext} from "react";
import { DEC, INC , REMOVE_TO_CART} from "../../Context/Action";
import { cartContextProvider } from "../../Context/CartContext";

const Cart = () => {
  const { cart, dispatch,} = useContext(cartContextProvider);
      console.log(cart)
  //add  of total price
  let subtotal = cart.reduce((i, crr) => {
    const { qty, price } = crr;

    i = parseInt(i + price * qty);

    return i;
  }, 0);
  //end  of total price

  return (
    <div className="cart_Container">
        {

          cart.length >0 ? <> <table border="1px">
          <thead>
            {/* <th style={{padding:"12px"}}>S.No</th> */}
            <th>Item</th>
            <th>price</th>
            <th>Quentity</th>
            <th>Action</th>
          </thead>
          <tbody>
            {cart.map((elm, ind) => {
              return (
                <>
                  <tr>
                    <td>
                      <div className="cartImg">
                        <img src={elm.images[0]} alt="" className="cartItemImg" />
                      </div>
                    </td>
                    <td>Rs.{elm.price}/-</td>
  
                    <td>
                      <div className="cartQty">
  
                        <span onClick={() => {
                                dispatch({ type: DEC, ProductID: elm.id });
                              }}>-</span>
  
                              <span>{elm.qty}</span>
  
                              <span onClick={() => {
                                dispatch({ type: INC, productID: elm.id });
                              }}>+</span>
                       
                      </div>
                    </td>
                    <td>
                      <span onClick={()=>{dispatch({type :REMOVE_TO_CART , ProductID :elm.id})}}><i class="fa-sharp fa-solid fa-trash"></i></span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
            
              {/* total Payment */}
            <div className="cartTotal_price">
              <h3>Payment</h3>
  
              <div className="totalDetails-1 totalDetails">
                <span>Total Item</span>
                <span>{cart.length}</span>
              </div>
  
              <div className="totalDetails-2 totalDetails">
              <span>Shiping charge</span>
                <span>Rs.0/-</span>
              </div>
              
              <div className="totalDetails-3 totalDetails">
                <span>Dilivery Charge</span>
                <span>Rs.0/-</span>
              </div>
              
              <div className="totalDetails-4 totalDetails">
                <span><strong>Total</strong></span>
                <span>Rs.{subtotal}/-</span>
              </div>
  
              <br />
  
                <div className="checkout">
                  <h5>CHECKOUT</h5>
                </div>
            </div>
                <br /><br /><br /></>
 : <h5 style={{marginTop:"50px"}}>Cart is Empaty</h5>  

        }
    </div>
  );
};

export default Cart;
