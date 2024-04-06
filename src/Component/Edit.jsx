import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
  return (
<div className="container ">
      <main className="mx-auto">
        <div className="py-5 text-center">
          <h2>Edit your form</h2>
        </div>

        <div className="row g-6">
          <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-3">
            <h4 className="mb-3">Form</h4>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First name..." value="" required="" />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last name..." value="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="birthday" className="form-label">Date of birth</label>
                  <input type="date" id="birthday" name="birthday" className="form-control" required />
                </div>

                <div className="col-12">
                  <label htmlFor="salary" className="form-label">Choose your position</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="salary" placeholder="Position..." required="" />
                    <div className="invalid-feedback">
                      Choose your position is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="expectSalary" className="form-label">Expect Salary</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="expectSalary" placeholder="Expect salary..." required="" />
                    <div className="invalid-feedback">
                      Your expect salary is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com..." />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Enter your address..." required="" />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>Thai</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>Chiang Mai</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Gender</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="male" name="gender" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input id="female" name="gender" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="form-check">
                  <input id="etc" name="gender" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="etc">Etc</label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="cv" className="form-label">Upload CV:</label>
                <input type="file" id="cv" name="cv" className="form-control" accept=".pdf,.doc,.docx" required />
                <small className="text-muted">Accepted formats: PDF, DOC, DOCX</small>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-warning btn-lg" type="submit"><Link to="/applicant-summary">Confirm your change</Link></button>
            </form>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">© 2017–2024 Company Name</p>
      </footer>
    </div>  )
}

export default Edit