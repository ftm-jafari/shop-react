import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/cart.css';
import {Container,Row,Col,Card,CardImg,CardBody,CardTitle,Button, CardHeader} from 'reactstrap';
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

  const Context = useContext(cartContext);
  const [cartItems , setCartItems] = Context.cartItems;
  const onAdd = Context.onAdd;
  const onRemove = Context.onRemove;
  const onDelete = Context.onDelete;
  
  const totalPrice = cartItems.reduce((a,c) => a + c.sales * c.qty, 0);
  var CurrencyFormat = require('react-currency-format');
  window.scrollTo(0, 0);
  
  return ( 
         <> 
          <div className="h-100 wrapper">
            <Container className="h-100 py-5">
              <Row className="d-flex justify-content-center h-100 ">
                  <div className="d-flex align-items-center mb-4">
                    <img src='images/icons/shopping bag.svg'   style={{width: '35px' ,height: '35px'}}/>
                    <h3 className="fw-normal mb-0 text-black">سبد خرید</h3>  
                  </div>

                  {cartItems.length === 0 && 
                        <div className="col-12 text-center h4">
                            <img src="images/icons/basket.svg" alt="" className='p-2' style={{width: "100px" , height: '100px'}}/>
                              <br/>
                              سبد خرید شما خالی است!
                        </div>
                   }

                <Col class="col-xs-12 col-sm-12 col-md-8 ">
                      {cartItems.length !== 0 && (
                            <Card className="card rounded-3 mb-1">
                                <Row className="card-body d-flex  align-items-center">
                                   <div className="col-xs-2 col-sm-2 col-md-5 col-lg-4 col-xl-4 ">
                                     <label className="lb-price" htmlFor="form1">محصول </label>
                                    </div>
                                    <div className="col-xs-2 col-sm-2  col-md-2 col-lg-2 col-xl-2 ">
                                      <label className="col-6 lb-price" htmlFor="form1"> قیمت </label>
                                     </div>
                                    <div className="col-xs-2 col-sm-2  col-md-3 col-lg-3 col-xl-2 d-flex ">
                                     <label className="lb-price" htmlFor="form1">تعداد </label>
                                    </div>
                                    <div className=" col-xs-2 col-sm-2  col-md-2 col-lg-2 col-xl-2 ">
                                      <label className="col-6 lb-price" htmlFor="form1">مجموع</label>
                                    </div>
                                </Row>
                             </Card>  
                            )}

                        <Card class="card ">
                            {cartItems.map((item) => ( 
                                   <CardBody class="card-body">
                                       <Row class="row">
                                         <Col class="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                                         <CardBody className="card-body p-0">
                                            <div className="row d-flex  align-items-center">
                                              <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2">
                                               <CardImg src={item.img} className="img-fluid rounded-3" alt="img" />
                                                </div>
                                                 <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                 <span className="h6 ">{item.title}</span>
                                                 </div>
                                                 <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3 col-xl-2 ">
                                                  <h7>
                                                     <CurrencyFormat value={item.sales} displayType={'text'} thousandSeparator={true}  className=" mb-0" />ریال     
                                                 </h7>
                                                </div>
                                                 <div className="col-xs-2 col-sm-2 col-md-2 col-lg-3 col-xl-2 d-flex ">
                                                  <Button onClick={()=> onRemove(item)} className="btn btn-hover px-2">
                                                   <i className="fas fa-minus"></i>
                                                   </Button>
                                                   <label id="form1" min="0" name="quantity" type="number" className="form-control form-control-sm text-center" >
                                                    {item.qty}
                                                   </label>
                                                   <Button onClick={()=> onAdd(item)}  className="btn btn-hover px-2">
                                                     <i className="fas fa-plus"></i>
                                                   </Button>
                                                 </div>
                                                 <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3 col-xl-3 ">
                                                  <h6>
                                                     <CurrencyFormat value={item.sales * item.qty} displayType={'text'} thousandSeparator={true} className="mb-0" />ریال
                                                 </h6>
                                                </div>
                                                 <div className="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 text-end">
                                                   <a onClick={()=> onDelete(item)} href="#!" className="text-danger trash p-2"><i className="fas fa-trash fa-lg"></i></a>
                                                 </div>
                                               </div>
                                             </CardBody>
                                          </Col> 
                                       </Row>
                                   <hr className="my-3"/> 
                                 </CardBody>                                 
                               ))} 
                        </Card> 
                   </Col>

                {cartItems.length !== 0 && (
                   <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-sm-12 ">
                      <Card className="card mb-4">
                        <CardHeader className="card-header py-3">
                          <h5 className="mb-0">جمع سبد خرید</h5>
                        </CardHeader>
                        <CardBody className="card-body">
                          <ul className="list-group list-group-flush p-1">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              مبلغ
                              <span>                                                    
                                 <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true}  className="mb-0" />ریال
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              هزینه ارسال
                              <span>رایگان</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>مبلغ کل</strong>
                                <strong>
                                  <p className="mb-0"></p>
                                </strong>
                              </div>
                              <span><strong>
                              <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} className="mb-0" />ریال
                              </strong></span>
                            </li>
                          </ul>
                          <Link to="/factor" >
                           <Button className="success btn-lg">
                             ادامه خرید
                           </Button>
                          </Link>
                        </CardBody>
                     </Card>
                   </Col>                  
                   )} 
                 
               <div className='push'></div>
             </Row>     
            </Container>
          </div>
         </>
    );
  }
 
export default Cart;