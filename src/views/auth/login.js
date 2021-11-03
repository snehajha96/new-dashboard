import React from 'react';
import '../../scss/login.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {/* <section className = "login">
                <div className = "container">
                    <h3 className = "title">Sign in with</h3>
                  
                    <form>
                        <div className = "form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div className = "form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                        <button type="submit">Sign in</button>
                    </form>
                    <p className = "additional-act">Don't have an account? <span>Register</span></p>
                </div>
            </section>  */}
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="login-card">
              <div>
                <div>
                  <a className="logo">
                    {/* <img src="https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo.png" /> */}
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="login-main">
                  <form className="theme-form">
                    <h4>Sign in to account</h4>
                    <p>Enter your email & password to login</p>

                    <div className = "form-group">
                      <label className = "col-form-label">Email Address</label>
                      <input className = "form-control" type="email" placeholder="Test@gmail.com " />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <div className="form-input position-relative">
                        <input className="form-control" type="password" name="login[password]" placeholder="*********" />
                        {/* <div className = "show-hide"><span className = "show"></span></div> */}
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="checkbox p-0">
                        <input id="checkbox1" type="checkbox" />
                        <label className="text-muted" htmlFor="checkbox1">Remember password</label>
                      </div><Link className="link text-decoration-none" to="#">Forgot password?</Link>
                      <div className = "text-end mt-3">
                        <Link to="/dashboard">
                          <button className="btn btn-primary btn-block w-100" type="button">Sign in</button>
                        </Link>
                      </div>
                    </div>
                    {/* <h6 className="text-muted mt-4 or">Or Sign in with</h6> */}
                    {/* <div className="social mt-4">
                      <div className="btn-showcase">
                        <a className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className = "feather feather-linkedin txt-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn </a><a className = "btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className = "feather feather-twitter txt-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>twitter</a>
                        <a className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className = "feather feather-facebook txt-fb"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>facebook</a></div>
                    </div> */}
                    <p className="mt-4 mb-0 text-center">Don't have account?<Link className = "ml-2 text-decoration-none" to="/signup">Create Account</Link></p>
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
