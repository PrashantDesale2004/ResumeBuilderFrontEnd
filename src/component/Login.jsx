import React from 'react';

const Login = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6"> {/* Adjusted column classes */}
            <div className="card bg-dark text-white border-radius: 1rem;">
              <div className="card-body p-4 text-center"> {/* Reduced padding from p-5 to p-4 */}
                <div className="mb-md-4 mt-md-3 pb-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">Please enter your login and password!</p>
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                  <p className="small mb-4 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
