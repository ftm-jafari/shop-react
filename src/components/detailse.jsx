import React from 'react'
import {Container,Row,Col,Card,CardImg,CardBody,CardTitle,Button,CardSubtitle,CardText} from 'reactstrap';
import '../css/products.css'
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';
import { useParams } from 'react-router-dom';

const Detailse =() =>{

    const { id } = useParams();
    const Context = useContext(cartContext);
    const [products] = Context.products;
    const getItemQuntity = Context.getItemQuntity;
    const onAdd = Context.onAdd;
    const onRemove = Context.onRemove;
    const onDelete = Context.onDelete;
    const onFavorite = Context.onFavorite; 

    const details = products.filter((product) => {
        return product.id.toString() === id
    })
    var CurrencyFormat = require('react-currency-format');
    
    return (
    <>
        <Container className=" h-100 py-5">
            <Row className="d-flex justify-content-center align-items-center h-100">
               {details.map(product => (
                       <Col className="col-10">         
                             <Card className="card rounded-3 mb-4">
                               <CardBody className="card-body p-4">
                                 <div className="row d-flex justify-content-between align-items-center">
                                   <div className="col-md-4 col-lg-4 col-xl-4">
                                     <CardImg  src={'/'+product.img}  className="img-fluid rounded-3" alt="img" />
                                   </div>
                                    <div className='col-md-8'>
                                     <div className="">
                                      <CardTitle className="lead fw-normal mb-2">
                                        {product.title}
                                      </CardTitle>
                                    </div>
                                   <div className="">
                                   <CardSubtitle>
                                       {product.description}
                                   </CardSubtitle>
                                   </div>
                                  
                                   <div className='' >
                                       <CardText>
                                       <div className='category'>
                                               <span className='float-end'>دسته</span>
                                               <span className='float-start'>
                                                  {product.category}
                                               </span>
                                             </div><br/>
                                         <div className='price'>
                                               <span className='float-end'>قیمت</span>
                                               <span className='float-start'>
                                                 <CurrencyFormat value={product.sales} displayType={'text'} thousandSeparator={true} prefix={' ریال ' } />
                                               </span>
                                             </div><br/>
                                             <div className='inventory'>
                                               <span className='float-end'>موجودی</span>
                                               <span className='float-start'>{product.stock}</span>
                                         </div><br/>
                                      </CardText>
                                      </div>
                                        
                                      {getItemQuntity(product) === 0 ? (
                                        <Button onClick={() => onAdd(product)} className='btn mt-auto  align-items-end'>
                                             <img src="/images/icons/add to shopping cart.svg" alt="" className='img-cart' />
                                         </Button>
                                       ):
                                         <div className='d-flex justify-content-between align-items-center'> 
                                           <div className="d-flex  justify-content-center">
                                               <button onClick={() => onRemove(product)} className="btn btn-hover  px-2">
                                                 <i className="fas fa-minus"></i>
                                               </button>
                                               <label id="form1" min="0" name="quantity" type="number"
                                                 className="form-control form-control-sm  text-center" >{getItemQuntity(product)}</label>
                                               <button onClick={()=>onAdd(product)} className="btn btn-hover px-2">
                                                <i className="fas fa-plus"></i>
                                              </button>
                                             </div>
                                             <div className="d-flex p-2  justify-content-center trash">
                                                <a onClick={()=>onDelete(product)} href="#!" className="text-danger "><i className="fas fa-trash fa-lg"></i></a>
                                            </div>
                                          </div>
                                         }

                                   </div>                              
                                 </div>
                               </CardBody>
                             </Card> 
                           </Col>  
               ))}
                     </Row>     
            </Container>       

    </>
  );
     
}

export default Detailse;
