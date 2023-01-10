import React, { useContext, useEffect } from "react";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { ADD_TO_CART } from "../../Context/Action";
import { cartContextProvider } from "../../Context/CartContext";
import { ProductProvider } from "../../Context/ProductContext";

const Home = () => {
  const { dispatch } = useContext(cartContextProvider);
  const { product, setProduct } = useContext(ProductProvider);
  const [optionvalue, setoptionvalue] = useState("");
  const [option, setoption] = useState([]);

  // list of Category
  useEffect(() => {
    async function options() {
      let res = await fetch("https://dummyjson.com/products/categories");
      let resdata = await res.json();
      setoption(resdata);
    }
    options();
  }, []);

  //set category product
  async function CategoryProduct() {
    const cat_product = await fetch(
      `https://dummyjson.com/products/category/${optionvalue}`
    );
    const cat_res = await cat_product.json();
    setProduct(cat_res.products);
    console.log(cat_res);
  }

  return (
    <>
      <div className="Home">
        <div className="categoryContainer">
          <select
            name=""
            id=""
            value={optionvalue}
            onChange={(e) => {
              setoptionvalue(e.target.value);
            }}
          >
            {option.map((data) => {
              return (
                <>
                  <option key={data.id}>{data}</option>
                </>
              );
            })}
          </select>
          <button
            onClick={() => {
              CategoryProduct();
            }}
          >
            Filter
          </button>
        </div>

        <div className="homeContainer">
          {product.map((item, ind) => {
            return (
              <>
                <div className="homeWrapper" key={item.id}>
                  <div className="cards">
                    <img src={item.images[0]} alt="" className="productImg" />
                  </div>

                  <div className="cardsDescription">
                    <h6>{item.title}</h6>
                   
                  </div>
                  <div className="itemDetails">
                  <h6>₹{item.price}</h6>
                  <h6> {Math.floor(item.discountPercentage)} % off</h6>
                  </div>

                  <div className="dec">
                    <button
                      className="addtocart"
                      onClick={() => {
                        dispatch({
                          type: ADD_TO_CART,
                          data: item,
                          item_price: item.price,
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
