import { useContext } from "react";
import './modal.css';
import { cartContext } from "../../context/shoppingCartContext";
import { Button } from "reactstrap";

const ProductModal =() => {

    const Context = useContext(cartContext);
    const changeModal = Context.changeModal;
    const onAdd = Context.onAdd;
    const [modalContent , setmodalContent] = Context.modalContent;
    const [openModal , setOpenModal] = Context.openModal;
    const onFavorite = Context.onFavorite; 

  var CurrencyFormat = require('react-currency-format');

    return( 
      <>  
       {openModal && <div onClick={changeModal}  className="overlay">
       
        {modalContent.map((p)=>{ 
        return(
          <div key={p.id}  onClick={(e) => e.stopPropagation()} className="modalContainer">
               <a onClick={changeModal} className="closeBtn  text-decoration-none">
                   <i class="fa-solid fa-xmark"></i>
                </a>
          <img src={p.img} alt="" />
             <div className="modalRight">
                 <div  className="content">
                    <h4>{p.title}</h4>
                     <p>{p.description}</p>
                     <p>قیمت: 
                       <CurrencyFormat value={p.sales} displayType={'text'} thousandSeparator={true}  />ریال
                     </p>
                 </div>
              <div className="btnContainer">
                    <Button onClick={() => onAdd(p)} className='btn mt-auto align-items-end'>
                        <img src="images/icons/add to shopping cart.svg" alt="" className='img-cart' />
                    </Button>
                    <Button onClick={() => onFavorite(p)} className='btn mt-auto align-items-end'>
                       <img src="images/icons/favorite_border_black_24dp.svg" alt="" className='img-cart' />
                    </Button>
               </div>
            </div> 
        </div>
         )
       })} 
     </div>
    }      
   </>
  );
}

export default ProductModal;