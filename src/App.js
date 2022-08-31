import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/home";
import Products from './components/products';
import Cart from "./components/cart";
import Favorite from './components/favorite';
import Navbars from './components/navbar';
import Footers from './components/footer';
import Detailse from './components/detailse';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import ShoppingCartProvider from './context/shoppingCartContext';
import Factor from './components/factor';
import Cakes from './components/slider/cakes';
import CupCake from './components/slider/cupCake';
import Dessert from './components/slider/dessert';
import SignIn from './components/signin';
import ProductModal from './components/modal/modal';

const App = () => {

    return (       
      <>
        <ShoppingCartProvider>
         <BrowserRouter>
         <ProductModal/>
         <Navbars/>
         <Routes>
            <Route path="/"            element={<Home/>} />
            <Route path="/products"    element={<Products/>} />
            <Route path="/cart"        element={<Cart/>} />
            <Route path="/favorite"    element={<Favorite/>} />
            <Route path="products/:id" element={<Detailse/> } />
            <Route path="/about"       element={<AboutUs/> } />
            <Route path="/contact"     element={<ContactUs/> } />
            <Route path="/factor"      element={<Factor/> } />
            <Route path="/cakes"       element={<Cakes/> } />
            <Route path="/cupcake"     element={<CupCake/> } />
            <Route path="/dessert"     element={<Dessert/> } />
            <Route path="/"            element={<SignIn/> } />
         </Routes>
         </BrowserRouter>
         <Footers/>
         <ToastContainer/>
        </ShoppingCartProvider>  
      </>
    );   
}
 
export default App;