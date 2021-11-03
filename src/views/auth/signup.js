import React from 'react';
import {Link} from 'react-router-dom'
import '../../scss/login.scss';
import logo from '../../assets/images/logo.png'

const Login = () => {
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            
<div className="container-fluid p-0"> 
      <div className="row m-0">
        <div className="col-12 p-0">    
          <div className="login-card">
            <div>
              <div>
                  <a className="logo">
                      <img className="img-fluid for-light" src={logo} alt="looginpage" />
                      </a>
                      </div>
              <div className="login-main"> 
                <form className="theme-form">
                  <h4>Create your account</h4>
                  <p>Enter your personal details to create account</p>
                
                  <div className = "form-group">
                    <label className = "col-form-label pt-0">Your Name</label>
                    <div className = "row g-2">
                      <div className = "col-6">
                        <input className = "form-control" type="text" required="" placeholder="First name" />
                      </div>
                      <div className = "col-6">
                        <input className = "form-control" type="text" required="" placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                  <div className = "form-group">
                    <label className = "col-form-label">Email Address</label>
                    <input className = "form-control" type="email" required="" placeholder="Test@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <div className="form-input position-relative">
                      <input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                      {/* <div className = "show-hide"><span className = "show"></span></div> */}
                    </div>
                  </div>
                  <div className = "form-group mb-0">
                    <div className = "checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label className = "text-muted" htmlFor="checkbox1">Agree with<a className = "ml-2" href="#">Privacy Policy</a></label>
                    </div>
                    <button className = "btn btn-primary btn-block w-100" type="submit">Create Account</button>
                  </div>
                 
                  <p className="mt-4 mb-0 text-center">Already have an account?<Link className = "ml-2 text-decoration-none" to="/login">Sign In</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Login;
