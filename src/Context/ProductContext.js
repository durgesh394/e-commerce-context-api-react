import React, { createContext, useEffect, useState } from "react";

export const ProductProvider = createContext();
const ProductContext = (props) => {
  const [product, setProduct] = useState([]);
  


  useEffect(() => {
    async function getData() {
      let api = await fetch("https://dummyjson.com/products");
      let res = await api.json();
      setProduct(res.products);
     
    }
    getData();
  }, []);

  return (
    <div>
      <ProductProvider.Provider value={{ product , setProduct}}>
        {props.children}
      </ProductProvider.Provider>
    </div>
  );
};

export default ProductContext;
