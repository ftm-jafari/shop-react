import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useContext } from 'react';
import { cartContext } from '../context/shoppingCartContext';

const Factor = ()=>{

  const Context = useContext(cartContext);
  const [cartItems , setCartItems] = Context.cartItems;
  const totalPrice = cartItems.reduce((a,c) => a + c.sales * c.qty, 0);


    const componentRef =useRef();
    const print = useReactToPrint({
        content: ()=> componentRef.current,
        documentTitle: 'emp-data',
    });

    var CurrencyFormat = require('react-currency-format');

    return(
        <>
         <div className="card">
           <div className="card-body">
             <div className="container mb-5 mt-3">
                <div className="row d-flex align-items-baseline">
                  <div className="col-xl-9 d-flex">
                   <img src='images/icons/receipt.svg'   style={{width: '35px' ,height: '35px'}}/>
                    <p style={{color: '#000', fontSize: '20px'}}>صورتحساب </p>
                  </div>
                <div className="col-xl-3 float-end">
                  <a onClick={print} className="btn btn-light text-capitalize m-2" ><i
                      className="fas fa-print "></i> پرینت</a>
                  {/* <a className="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                      className="far fa-file-pdf text-danger"></i> Export</a> */}
                </div>
                <hr/>
              </div>

              <div className="container" ref={componentRef}>
                <div className="col-md-12">
                  <div className="text-center">
                    <p className="pt-0">صورتحساب</p>
                  </div>    
                </div>

                 <div className="row">
                   {/* <div className="col-xl-8">
                     <ul className="list-unstyled">
                       <li className="text-muted">به: <span style={{color: '#5d9fc5' }}>جان لورم</span></li>
                       <li className="text-muted">خیابان , شهر</li>
                       <li className="text-muted">دولت , کشور</li>
                       <li className="text-muted"><i className="fas fa-phone"></i> 123-456-789</li>
                     </ul>
                   </div> */}
                   <div className="col-xl-4">
                     <ul className="list-unstyled">
                       <li className="text-muted"><i className="fas fa-circle" style={{color: '#84B0CA'}}></i> <span
                           className="fw-bold">آیدی:</span>#123-456</li>
                       <li className="text-muted"><i className="fas fa-circle" style={{color: '#84B0CA'}}></i> <span
                           className="fw-bold">تاریخ ایجاد: </span>Jun 23,2021</li>
                       <li className="text-muted"><i className="fas fa-circle" style={{color: '#84B0CA'}}></i> <span
                           className="me-1 fw-bold">وضعیت:</span><span className="badge bg-warning text-black fw-bold">
                           پرداخت نشده</span></li>
                     </ul>
                   </div>
                 </div>

                 <div className="row my-2 mx-1 justify-content-center">
                   <table className="table table-striped table-borderless">
                     <thead style={{backgroundColor: '#61BFAD '}} className="text-white">
                       <tr>
                         <th scope="col">#</th>
                         <th scope="col">شرح</th>
                         <th scope="col">تعداد</th>
                         <th scope="col">قیمت واحد</th>
                         <th scope="col">قیمت کل</th>
                       </tr>
                     </thead>
                     <tbody>
                       
                      {cartItems.map((item , index )=>(
                        <tr>
                        <th scope="row">{++index}</th>
                        <td>{item.title}</td>
                         <td>{item.qty}</td>
                         <td>
                         <CurrencyFormat value={item.sales} displayType={'text'} thousandSeparator={true} className="mb-0" />ریال
                        </td>
                         <td>
                         <CurrencyFormat value={item.sales * item.qty} displayType={'text'} thousandSeparator={true} className="mb-0" />ریال
                         </td>
                       </tr>
                       ))}
                         
                       
                     </tbody>
         
                   </table>
                 </div>

                   <div className="row">
                     {/* <div className="col-xl-7">
                       <p className="ms-3"> اطلاعات پرداخت اضافی</p>
                     </div> */}
                     <div className="col-xl-5">
                       <span className="text-black me-4">هزینه ارسال</span>
                       <CurrencyFormat value={300000} displayType={'text'} thousandSeparator={true}  className="mb-0" /> ریال 
                      
                     </div>
                     <div className='col-xl-5'>
                     <p className="text-black float-start"><span className="text-black me-3"> مبلغ قابل پرداخت </span>
                       <span className='p-2' style={{fontSize: '25px'}}>
                         <CurrencyFormat value={totalPrice+300000} displayType={'text'} thousandSeparator={true} className="mb-0" /> ریال   
                        </span></p>
                     </div>
                    
                   </div>
                   <hr/>
                 
           
                 </div>
                 <div className="row">
                     <div className="col-xl-10">
                       <p>از خرید شما متشکریم</p>
                     </div>
                     <div className="col-xl-2">
                       <button type="button" className="btn success " >پرداخت</button>
                     </div>
                   </div>
               </div>
             </div>
           </div>
        </>
    )
}

export default Factor;