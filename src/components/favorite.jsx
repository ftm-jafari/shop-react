import {Container,Row,Col,Card,CardImg,CardBody,CardTitle,Button, CardHeader,CardSubtitle} from 'reactstrap';
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';

import React from 'react'

const Favorite =() => {

    const Context = useContext(cartContext);
    const [favItems , setFavItems] = Context.favItems;
    const onFavorite = Context.onFavorite; 
    const onAdd = Context.onAdd;
    // const onRemove = Context.onRemove;
    const deleteFav = Context.deleteFav;

   var CurrencyFormat = require('react-currency-format');

  return (
    <>
         <Container className=" h-100 py-5" >
                 <div className="d-flex align-items-center mb-4">
                     <img src='images/icons/heart2.svg'   style={{width: '35px' ,height: '35px'}}/>
                     <h3 className="fw-normal mb-0 text-black">علاقه مندی ها </h3>  
                  </div>
              <Row className=" justify-content-center h-100 ">
                 
                  {favItems.length === 0 && 
                                <div className="col-12 text-center h4">
                                  <img src="images/icons/favorite_border_black_24dp.svg" alt="" className='p-2' style={{width: "100px" , height: '100px'}}/>
                                  <br/>
                                   علاقه مندی شما خالی است!
                                </div>
                   } 

                      {favItems.map((item) => (
                              <Col className="col-md-6 col-lg-6 col-xl-6">  
                                  <Card className="card mb-2">
                                       <Row className="row">
                                            <div className='d-flex align-items-center'>
                                              <div className="col-md-4 col-lg-4 col-xl-4 p-2">
                                                 <CardImg src={item.img} className="img-fluid rounded-3" alt="img" />
                                              </div>
                                             <CardBody className="col-md-8 col-lg-8col-xl-8 card-body">
                                               <div className="row d-flex align-items-center">
                                                 <div className="col-md-12 col-lg-12 col-xl-12">
                                                   <span className="h6 ">{item.title}</span>
                                                 </div>
                                                 <CardSubtitle className="mb-2 mt-3 text-muted" tag="h6" style={{ textAlign: 'justify'}}>
                                                     {item.description}
                                                 </CardSubtitle>
                                                 <div className="col-md-12 col-lg-12 col-xl-12 p-2">
                                                    <span className='float-end'>قیمت</span>
                                                     <span className='float-start'>
                                                      <CurrencyFormat value={item.sales} displayType={'text'} thousandSeparator={true} prefix={' ریال ' } />
                                                     </span>
                                                </div>
                                                <Col className='row justify-content-between  col-md-12 col-lg-12 col-xl-12 mt-2'>
                                                  <div className="col-md-8 col-lg-8 col-xl-8 d-flex ">
                                                     <Button onClick={() => onAdd(item)} className='btn mt-auto  align-items-end'>
                                                        <img src="images/icons/add to shopping cart.svg" alt="" className='img-cart'/>
                                                     </Button>
                                                   </div>

                                                   <div className="col-md-1 col-lg-1 col-xl-1 ">
                                                     <a onClick={()=> deleteFav(item)} href="#!" className="text-danger trash p-2"><i className="fas fa-trash fa-lg"></i></a>
                                                   </div>
                                                 </Col>

                                               </div>
                                             </CardBody>
                                             </div>
                             
                                       </Row>       
                                 </Card> 
                              </Col>                            
                              ))} 


              <div className='push' style={{height: '140px'}}></div>
            </Row>
        </Container>      
    </>
  )
}

export default Favorite;
