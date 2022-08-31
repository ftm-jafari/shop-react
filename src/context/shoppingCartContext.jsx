import { createContext, useState } from "react";
import productss from "../data";
import { toast } from 'react-toastify';

export const cartContext = createContext();

const ShoppingCartProvider = (props) =>{

    const [products , setProducts] = useState(productss);
    const [cartItems , setCartItems] = useState([]);
    const [favItems , setFavItems] = useState([]);
   


    const getItemQuntity=(product) =>{
      return cartItems.find((x) => x.id === product.id)?.qty || 0
    }
 
    const onAdd = (product) => {
       const exist = cartItems.find((x) => x.id === product.id);
       if (exist){
          setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty+1} : x));
       }else{
          setCartItems([...cartItems, {...product, qty:1}]);
          toast.success(product.title +" به سبد خرید اضافه شد  ");
       }
    };
 
    const onRemove = (product) => {
       const exist = cartItems.find((x) => x.id === product.id);
       if(exist.qty === 1){
         //setCartItems(cartItems.filter((x) => x.id !== product.id));
          setCartItems(cartItems.exist.qty);
       }else{
          setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty-1} : x));
       }
    }
      
    const onDelete = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist){
         setCartItems(cartItems.filter((x) => x.id !== product.id));
         toast.error(product.title +" از سبد خرید حذف شد ");
      }
   }
   
   //favorite
   const onFavorite = (product) =>{
      const exist = favItems.find((x) => x.id === product.id);
      if(exist){
         setFavItems(favItems.filter((x) => x.id !== product.id));
         toast.error(product.title +" از علاقه مندی حذف شد ");

         // document.getElementById('btnFav').style.color = '#5a5a5a';
      }else{
         setFavItems([...favItems, {...product}]);
         toast.success(product.title +" به علاقه مندی اضافه شد  ");
         // document.getElementById('btnFav').style.color = '#bd0606';
      }
      
    }
   
    const deleteFav = (product)=>{
      const exist = favItems.find((x) => x.id === product.id);
      if(exist){
         setFavItems(favItems.filter((x) => x.id !== product.id));
      }
    }

    //modal
    const [modalContent , setmodalContent] = useState([]);
    const [openModal , setOpenModal] = useState(false);
    const changeModal=(product)=>{
      console.log(product.id);
      setmodalContent([product]);
      setOpenModal(!openModal);
    }



    const value = {
         products:[products,setProducts] ,
         cartItems: [cartItems,setCartItems] ,
         favItems: [favItems, setFavItems],
         modalContent: [modalContent , setmodalContent],
         openModal:  [openModal , setOpenModal],
         changeModal:changeModal,
         getItemQuntity:getItemQuntity,
         onAdd:onAdd , 
         onRemove:onRemove ,
         onDelete:onDelete,
         onFavorite: onFavorite,
         deleteFav:deleteFav,
    }

    return(
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}

export default ShoppingCartProvider;


