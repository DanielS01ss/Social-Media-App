import React from "react";
import {mainImage} from '../images/login.jpg';
import "../Styles/login.css";
import {Link} from 'react-router-dom';

const SignUp  = () =>{

  return(

 <div className="limiter">
   <div className="container-login100" >
     <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
       <form className="login100-form validate-form">
         <span className="login100-form-title p-b-49">
           Sing Up
         </span>

         <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
           <span className="label-input100">Username</span>
           <input className="input100" type="text" name="username" placeholder="Type your username"/>
           <span className="focus-input100" data-symbol="&#xf206;"></span>
         </div>

       <div className="wrap-input100 validate-input m-b-23" style={{"margin-top":'30px'}} data-validate = "Username is reauired">
           <span className="label-input100">Email</span>
           <input className="input100" type="text" name="username" placeholder="Type your email"/>
           <span className="focus-input100" data-symbol="&#xf15a;"></span>
         </div>


         <div className="wrap-input100 validate-input" data-validate="Password is required">
           <span className="label-input100">Password</span>
           <input className="input100" type="password" name="pass" placeholder="Type your password"/>
           <span className="focus-input100" data-symbol="&#xf190;"></span>
         </div>

         <div className="wrap-input100 validate-input" style={{'margin-top':'30px'}} data-validate="Password is required">
           <span className="label-input100">Repeat Password</span>
           <input className="input100" type="password" name="pass" placeholder="Type your password"/>
           <span className="focus-input100" data-symbol="&#xf190;"></span>
         </div>

         <div className="container-login100-form-btn" style={{"margin-top":'50px'}}>
           <div className="wrap-login100-form-btn">
             <div className="login100-form-bgbtn"></div>
             <button className="login100-form-btn">
               SignUp
             </button>
           </div>
         </div>
         <div className='existent-account'>
          <p>Already have an account?</p>
          <Link to='/login' className='backToLogin'><i class="zmdi zmdi-arrow-left"></i>Back to login</Link>
         </div>
       </form>
     </div>
   </div>
 </div>



  )

}

export default SignUp;
