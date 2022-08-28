import {Container,Row,Col,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/shoppingCartContext';


const Cakes =() =>{
   const Context = useContext(cartContext);
   const [products] = Context.products;
   const onAdd = Context.onAdd;
   const onRemove = Context.onRemove;
   const onDelete = Context.onDelete;
   const onFavorite = Context.onFavorite; 
  var CurrencyFormat = require('react-currency-format');

return(
     <Container className=" mt-3">
            <div className="d-flex align-items-center mb-2">
              <img src='images/slide/cake.png'   style={{width: '35px' ,height: '35px'}}/>
               <h3 className="fw-normal mb-0 text-black">کیک ها</h3>  
           </div>

   <Row md={4} xs={1} sm={2} >

        {products.map(product =>{
              if(product.category == 'کیک'){
                return(
                <Col className='mb-4'> 
                 <Card className='mt-4 p-0 shadow-lg mb-3 bg-body rounde' style={{minHeight: 500 }}>
                  <Link to={`/products/${product.id}`}>
                     <CardImg alt="Card image cap"  src={product.img} top />
                   </Link> 
                    <CardBody>
                      <CardTitle tag="h5"> 
                           <div className="card-icon">
                                <a className="comment float-end" href="#">
                                   <i className="fa-solid fa-comment"></i>
                                 {/* <img src="images/icons/comment_black_24dp.svg" alt="" /> */}
                                </a>
                                <a id='btnFav' onClick={() => onFavorite(product)} className="heart float-start" href="#">
                                  <i className="fa-solid fa-heart"></i>
                                {/* <img src="images/icons/favorite_border_black_24dp.svg" alt=""/> */}
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

                      <Button onClick={() => onAdd(product)} className='btn mt-auto  align-items-end'>
                        <img src="images/icons/add to shopping cart.svg" alt="" className='img-cart' />
                      </Button>
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

export default Cakes;