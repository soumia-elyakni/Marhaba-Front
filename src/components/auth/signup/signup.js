import "./signup.css"
const Signup = ()=> {
 
    return (
    <>
    
    <div className="signup form-peice">
<form className="signup-form" action="#" method="post">

   <div className="form-group">
      <label for="name">Full Name</label>
      <input type="text" name="username" id="name" className="name"/>
      <span className="error"></span>
   </div>

   <div className="form-group">
      <label for="email">Email Adderss</label>
      <input type="email" name="emailAdress" id="email" className="email"/>
      <span className="error"></span>
   </div>

   <div className="form-group">
      <label for="phone">Phone Number - <small>Optional</small></label>
      <input type="text" name="phone" id="phone"/>
   </div>

   <div className="form-group">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" className="pass"/>
      <span className="error"></span>
   </div>

   <div className="form-group">
      <label for="passwordCon">Confirm Password</label>
      <input type="password" name="passwordCon" id="passwordCon" className="passConfirm"/>
      <span className="error"></span>
   </div>

   <div className="CTA">
      <input type="submit" value="Signup Now" id="submit"/>
      <a href="/login" className="switch">I have an account</a>
   </div>
</form>
</div>

    
    </>

    )

    }

    export default Signup;