import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./auth.css"
import Login from "./login/login.js";
import Signup from "./signup/signup";
// import Error from "";
// import Signup from "./signup/signup";



const Auth = () => {
    return (
        <>

        <div className="row">

        <div className="col-sm-6 brand">
            {/* <a href="#" class="logo">Welcome to  <span></span></a> */}

            <div className="heading">
               <h2 className="mb-3">Marhaba Livraison</h2>
               <h3>Near to your MEAL</h3>
            </div>

            {/* <div class="success-msg">
               <p>Great! You are one of our members now</p>
               <a href="#" class="profile">Your Profile</a>
            </div> */}
         </div>
           
        <div className="col-sm-6 form">
                {/* <Login/> */}
      <Routes>

          <Route path="/auth" element={<Signup />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
          {/* <Route path="/*" element={<Error />} /> */}
   
        
      </Routes>
        </div>
        </div>
        </>
    )
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Auth />);
export default Auth; 