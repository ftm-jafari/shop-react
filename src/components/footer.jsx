import '../css/footer.css';
import {Footer,Container,Icon,Input,Col,Row,Button} from 'reactstrap';

const Footers = () => {
    return ( 
        <>
        <div className='footerr'>
           <div  className='text-center text-white text-lg-left' style={{ backgroundColor: '#61BFAD' }}>
           <Container className='p-4 pb-0' > 
              <Row className='d-flex '>
               <Col size='auto' className='mb-4 mb-md-0 '>
                   <a className="navbar-brand" href="#">
                      <img src='images/logo1-removebg-preview.png' className='logo'/>
                     </a>
                     <p>با بیش از 50 سال سابقه در صنعت کیک و شیرینی، خریدی مطمئن و با کیفیت</p>
              </Col>

            <Col md='5' size='12' className='mb-4 mb-md-0'>
            <form className='form-email'>   
                  <p>با ثبت ایمیل از تخفیفات هر ماه باخبر شوید</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <input id="newsletter1" type="text" className="form-control" placeholder="ایمیل"/>
                    <button className="btn btn-bg" type="button">ثبت</button>
                  </div>
                </form>
                </Col>
             </Row>      
         </Container>
         </div>
         
         <div className='text-center p-3' style={{ backgroundColor: '#61BFAD' }}>
         <Container className='d-flex flex-column flex-sm-row justify-content-between  border-top'>
                 <ul className="nav mt-2 p-2">
                   <h6>همراه ما باشید! </h6>
                     <li className="nav-item m-2 mt-0"><a href="#" className="nav-link p-0 text-muted"><img src="images/icons/telegram1.svg" alt="" className='img-cart'/></a></li>
                     <li className="nav-item m-2 mt-0"><a href="#" className="nav-link p-0 text-muted"><img src="images/icons/instagram.svg" alt="" className='img-cart'/></a></li>
                     <li className="nav-item m-2 mt-0"><a href="#" className="nav-link p-0 text-muted"><img src="images/icons/whatsapp.svg" alt="" className='img-cart'/></a></li>
                     <li className="nav-item m-2 mt-0"><a href="#" className="nav-link p-0 text-muted"><img src="images/icons/facebook.svg" alt="" className='img-cart'/></a></li>
                   </ul>
                <p className='mt-2 p-2'>© 2022 Company, Inc. کلیه حقوق محفوظ است</p>
            </Container>
          </div>
          </div>
{/* 
          <div className='wrapper'></div> */}
        </>
    );
}
 
export default Footers;
