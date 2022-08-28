import {Container,Row} from 'reactstrap';
import '../css/signin.css';


const SignIn = () =>{

    return(
     <Container className=" h-100 py-5"> 
         <Row className=" justify-content-center h-100 ">
         <div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                <div class="form-container">
                    <form class="form-horizontal">
                        <h3 class="title">Login Form</h3>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input class="form-control" type="email" placeholder="Username"/>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input class="form-control" type="password" placeholder="Password"/>
                        </div>
                        <button class="btn signin">Log in</button>
                        <span class="forgot-pass"><a href="#">Lost password?</a></span>
                        <span class="register"><a href="#">Register / Signup</a></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
   </div>

    </Row>
  </Container> 
        
    )
}
export default SignIn;