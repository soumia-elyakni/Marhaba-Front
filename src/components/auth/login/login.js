import "./login.css"
import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel, Form, input } from "react-bootstrap"

const Login = ()=> {
 
    return (
    <>
     
     <div className="container">
      <section id="formHolder">

     
            <div className="login form-peice switched">
               <form className="login-form" action="#" method="post">
                  <div className="form-group">
                     <label for="loginemail">Email Adderss</label>
                     <input type="email" name="loginemail" id="loginemail" required />
                  </div>

                  <div className="form-group">
                     <label for="loginPassword">Password</label>
                     <input type="password" name="loginPassword" id="loginPassword" required />
                  </div>

                  <div className="CTA">
                     <input type="submit" value="Login" />
                     <a href="/signup" className="switch">I'm New</a>
                  </div>
               </form>
            </div>


          
      
         
    

   </section>
   </div>

  
    </>

    )
}

export default Login;

