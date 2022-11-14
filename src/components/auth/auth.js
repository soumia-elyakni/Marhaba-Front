import "./auth.css"
import Login from "./login/login.js";
// import Signup from "./signup/signup"

const Auth = () => {
    return (
        <>
        <div className="d-flex flex-row">
            <div>

            </div>
            <div className="auth w-50 mt-2">
                <Login></Login>
            </div>
        </div>
        </>
    )
}

export default Auth; 