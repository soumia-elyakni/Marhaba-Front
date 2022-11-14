import './login.css';

const Login = ()=>{
    return (
    <>
      <form className="d-flex flex-column">
        <div className="w-75 m-auto p-3">
        
        <h3 className="mt-3">Sign In</h3>
        <div className="mb-3">
          <label className="float-start ms-2">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="float-start ms-2">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Sign In
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#" className="text-success">password?</a>
        </p>
        </div>
      </form>
    </>
    )
}

export default Login;

