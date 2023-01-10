import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import { ToastContainer, toast } from "react-toastify";
import CartContext from './Context/CartContext';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  

}   from "react-router-dom"
import ProductContext from './Context/ProductContext';
import Footer from './Components/Footer';

function App() {
  return (
    <>


     <ProductContext>
      <CartContext>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
     
      </CartContext>
     </ProductContext>
    </>
  );
}

export default App;
