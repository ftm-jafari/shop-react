import {Container,Row,Col,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/shoppingCartContext';


const Dessert =() =>{
   const Context = useContext(cartContext);
   const [products] = Context.products;
   const onAdd = Context.onAdd;
   const onRemove = Context.onRemove;
   const onDelete = Context.onDelete;
   const [favItems] = Context.favItems;
   const onFavorite = Context.onFavorite; 
   const changeModal = Context.changeModal;
   const getItemQuntity = Context.getItemQuntity;
   var CurrencyFormat = require('react-currency-format');
   //favorite
  //  let favIcon = 'heart float-start';
  //  if(favItems.find((x) => x.id === products.id)){
  //    favIcon = 'heart float-start text-danger';
  //  }else{
  //    favIcon = 'heart float-start';
  //  }
 
return(
   <Container className=" mt-3">
         <div className="d-flex align-items-center mb-2">
              <img src='images/slide/dessert.png'   style={{width: '35px' ,height: '35px'}}/>
             <h3 className="fw-normal mb-0 text-black">دسرها</h3>  
          </div>

      <Row md={4} xs={1} sm={2} >
          {products.map(product =>{
              if(product.category == 'دسر'){
                return(
                <Col className='mb-4'> 
                 <Card className='mt-4 p-0 shadow-lg mb-3 bg-body rounde' style={{minHeight: 500 }}>
                  <Link to={`/products/${product.id}`}>
                     <CardImg alt="Card image cap"  src={product.img} top />
                   </Link> 
                    <CardBody>
                      <CardTitle tag="h5"> 
                           <div className="card-icon">
                                <a onClick={()=>changeModal(product)} className="float-end" href="#">
                                   <i class="fa-solid fa-eye"></i>
                                </a>
                                <a id='btnFav' onClick={() => onFavorite(product)} className="heart float-start" href="#">
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                           </div>
                           <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">{product.title}</Link>    
                      </CardTitle>
       
                      <CardSubtitle className="mb-2 mt-3 text-muted" tag="h6" style={{ textAlign: 'justify'}}>
                        {product.description}
                      </CardSubtitle>
                    </CardBody>
       
                    <div className='p-2 m-2 align-items-end' >
                     <CardText>
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
                      {getItemQuntity(product) === 0 ? (
                           <Button onClick={() => onAdd(product)} className='btn mt-auto  align-items-end'>
                               <img src="images/icons/add to shopping cart.svg" alt="" className='img-cart' />
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
                 </Card>
              </Col>
              )
              }
                
            })}
     </Row>
    </Container>
 )
}

export default Dessert;