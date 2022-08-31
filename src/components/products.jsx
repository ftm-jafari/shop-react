import Product from './product';
import {Container,Row} from 'reactstrap';
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';
import '../css/pagination.css';
import { LoadingPosts } from './lazyLoad/loadingCard';
import { useRef } from 'react';
import clsx from 'clsx';
import useLazyLoad from './lazyLoad/useLazyLoad';

const NUM_PER_PAGE = 8;
const TOTAL_PAGES = 3;

const Products = () => {
   
   const Context = useContext(cartContext);
   const [products] = Context.products;
   const [favItems] = Context.favItems;
   const [cartItems , setCartItems] = Context.cartItems;
   const changeModal = Context.changeModal;
   const getItemQuntity = Context.getItemQuntity;
   const onAdd = Context.onAdd;
   const onRemove = Context.onRemove;
   const onDelete = Context.onDelete;
   const onFavorite = Context.onFavorite; 

   //lazy load
   const triggerRef = useRef(null);
   const onGrabData = (currentPage) => {
      return new Promise((resolve)=> {
       setTimeout(() => {
         const data = products.slice(
            ((currentPage-1)%TOTAL_PAGES)*NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
         );
         console.log(data);
         resolve(data);
       }, 3000);       
      });
   };

   const { data , loading} = useLazyLoad({triggerRef , onGrabData})

    return (
         <>
           <Container>
              <Row md={4} xs={1} sm={2} > 
              {data.map(product => {
                  return  <Product key={product.id} product={product} cartItems={cartItems} favItems={favItems} getItemQuntity={getItemQuntity} onAdd={onAdd} onDelete={onDelete} onRemove={onRemove} onFavorite={onFavorite} changeModal={changeModal}/>
                 })}
               <div ref={triggerRef} className={clsx('trigger' , {visible: loading})} >
                  <LoadingPosts/>
               </div>  
               </Row>         
            </Container> 
         </>
     );
}
 
export default Products;


// import Product from './product';
// import ReactPaginate from 'react-paginate';
// import {Container,Row} from 'reactstrap';
// import { useContext } from 'react';
// import { cartContext } from '../context/shoppingCartContext';
// import { useState } from 'react';
// import {RealLazyLoad} from 'real-react-lazyload';
// import '../css/pagination.css';
// import ProductModal from './modal/modal';
// import { useRef } from 'react';
// import clsx from 'clsx';
// import useLazyLoad from './lazyLoad/useLazyLoad';
// import { LoadingPosts } from './lazyLoad/loadingCard';
// const NUM_PER_PAGE = 8;
// const TOTAL_PAGES = 3;

// const Products = () => {

//    const Context = useContext(cartContext);
//    const [products] = Context.products;
//    const [favItems] = Context.favItems;
//    const [cartItems , setCartItems] = Context.cartItems;
//    const [openModal , setOpenModal] = Context.openModal;
//    const changeModal = Context.changeModal;
//    const getItemQuntity = Context.getItemQuntity;
//    const onAdd = Context.onAdd;
//    const onRemove = Context.onRemove;
//    const onDelete = Context.onDelete;
//    const onFavorite = Context.onFavorite; 

//    //paginat
//    const[pageNumber , setPageNumber] = useState(0);
//    const usersPerPage =8;
//    const pagesVisited = pageNumber * usersPerPage;

//    const displayUsers = products.slice(pagesVisited , pagesVisited+usersPerPage).map(product => {
//        return  <Product key={product.id} product={product} cartItems={cartItems} favItems={favItems} getItemQuntity={getItemQuntity} onAdd={onAdd} onDelete={onDelete} onRemove={onRemove} onFavorite={onFavorite} changeModal={changeModal}/>
//    })
   
//    const pageCount = Math.ceil(products.length/usersPerPage);
//    const changePage = ({selected}) => {
//     setPageNumber(selected);
//    };

//     return (
//          <>
//            <Container>
//               <Row md={4} xs={1} sm={2} >
//                  {displayUsers}
//                </Row>
//                <ReactPaginate
//                   previousLabel="<< "  
//                   nextLabel=" >>"  
//                   pageCount={pageCount}
//                   onPageChange={changePage}
//                   containerClassName={"paginationBttns"}
//                   previousLinkClassName={"previousBttn"}
//                   nextLinkClassName={"nextBttn"}
//                   disabledClassName={"paginationDisabled"}
//                   activeClassName={"paginationActive"}
//                  />      
//             </Container>  
//          </>
//     );
// }
// export default Products;