import React from 'react'

function Register() {
  return (
    <section className="vh-100">
    <div className="container h-custom mt-5 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="sign.png"
            alt="loading"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
          <form>
            <h2 className='text-center' id="title">Register Here</h2>
            <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">
               Name
              </label>
              <input
                type="text"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a Name"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">
               Email
              </label>
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
              />
            </div>
            
            <div className="form-outline mb-3">
              <label className="form-label" for="form3Example4">
                Password
              </label>
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" for="form2Example3">
                  Show Password
                </label>
              </div>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
            <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register
