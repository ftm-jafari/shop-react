import '../css/products.css';
import {Col,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const Product = ({product,getItemQuntity, onAdd , onRemove ,onDelete, favItems , onFavorite ,changeModal}) => {

  const quantity = getItemQuntity(product);
  var CurrencyFormat = require('react-currency-format');
 
  //favorite
  let favIcon = 'heart float-start';
  if(favItems.find((x) => x.id === product.id)){
    favIcon = 'heart float-start text-danger';
  }else{
    favIcon = 'heart float-start';
  }

    return (
     <>   
      <Col className='mb-4'> 
         <Card className='mt-4 p-0  shadow-lg mb-3 bg-body rounde' style={{minHeight: 500 }}>
          <Link to={`/products/${product.id}`} >
             <CardImg alt="Card image cap"  src={product.img} top />
          </Link>
             <CardBody>
               <CardTitle tag="h5"> 
                    <div className="card-icon">
                         <a onClick={()=>changeModal(product)} className="float-end" href="#">
                           <i className="fa-solid fa-eye"></i>
                         </a>
                         <a id='btnFav' onClick={() => onFavorite(product)} className={favIcon} href="#">
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
                        <CurrencyFormat value={product.sales} displayType={'text'} thousandSeparator={true}  />ریال
                      </span>
                    </div><br/>
                    <div className='inventory'>
                      <span className='float-end'>موجودی</span>
                      <span className='float-start'>{product.stock}</span>
                    </div><br/>
               </CardText>

               {quantity === 0 ? (
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
                            className="form-control form-control-sm  text-center" >{quantity}</label>
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
            
     </>
    );
}
 
export default Product;
