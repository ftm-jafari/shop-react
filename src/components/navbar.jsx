
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';

const Navbars = () => {
  
  const Context = useContext(cartContext);
  const [cartItems , setCartItems] = Context.cartItems;
  const countCartItems = cartItems.length;

    return (
       <>
              <Navbar className='navbar' sticky='top' >
                <div>
                <NavbarBrand to="/" className='float-end p-1'>
                    <img src='images/logo1-removebg-preview.png' className='logo'/>
                   </NavbarBrand>
                  <Nav className="menu">
                    <NavItem className='nav-item '>
                      <Link to="/"  className="nav-link">خانه</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/products" className="nav-link">محصولات</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about"  className="nav-link">درباره ما</Link>
                    </NavItem>
                     <NavItem>
                      <Link to="/contact"  className="nav-link">تماس با ما</Link>
                    </NavItem>
                  </Nav>   
                </div>

                  <Nav className="login p-0 align-items-center">
                  <NavItem className='nav-item'>
                      <Link to="/favorite"  className="p-1 nav-link ">
                        <img src="images/icons/heart2.svg" alt="" className='img-cart'/>
                      </Link>
                    </NavItem>
                    <NavItem className='nav-item'>
                      <Link to="/cart"   className="p-1 nav-link">
                        <img src="images/icons/shopping bag.svg" alt="" className='img-cart' />
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                         style={{color: "white", width:'20px', height:'20px', position:'absolute', top:20 ,left:90 , transform:"translate(25%, 25%)"}}>
                          {countCartItems}
                        </div>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/signin"  className="nav-link">
                        <img src="images/icons/login_black_24dp.svg" alt="" className='img-cart'/>
                      </Link>
                    </NavItem>
                  </Nav>
              </Navbar>
       </>
     );   
}

 
export default Navbars;