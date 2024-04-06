import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

  function Registration() {
    const [formData, setFormData] = useState({
      // firstName: '',
      // lastName: '',
      // birthday: '',
      // role: '',
      // expectSalary: '',
      // email: '',
      // address: '',
      // address2: '',
      // country: '',
      // state: '',
      // zip: '',
      // gender: '',
      // cv: null
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('birthday', formData.birthday);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('expectSalary', formData.expectSalary);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('address2', formData.address2);
        formDataToSend.append('country', formData.country);
        formDataToSend.append('state', formData.state);
        formDataToSend.append('zip', formData.zip);
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('cv', formData.cv);
    
        const response = await fetch('http://localhost:5000/form', {
          method: 'POST',
          body: formDataToSend
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Success:', data);
          // ทำสิ่งที่ต้องการเมื่อส่งข้อมูลสำเร็จ เช่น นำผลลัพธ์ไปแสดงบนหน้าเว็บ
        } else {
          console.error('Error:', response.statusText);
          // ทำสิ่งที่ต้องการเมื่อเกิดข้อผิดพลาดในการส่งข้อมูล เช่น แสดงข้อความแจ้งเตือน
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        cv: file
      }));
    }
    
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
        <main className="mx-auto">
        <div className="py-5 text-center">
          <h2>Registration form for employee</h2>
        </div>

        <div className="row g-6">
          <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-3">
            <h4 className="mb-3">Form</h4>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First name..." value={formData.firstName} onChange={handleChange} required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last name..." value={formData.lastName} onChange={handleChange} required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="birthday" className="form-label">Date of birth</label>
                  <input type="date" id="birthday" name="birthday" className="form-control" value={formData.birthday} onChange={handleChange} required/>
                </div>

                <div className="col-12">
                  <label htmlFor="salary" className="form-label">Choose your position</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="salary" placeholder="Position..." value={formData.role} onChange={handleChange} required/>
                    <div className="invalid-feedback">
                      Choose your position is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="expectSalary" className="form-label">Expect Salary</label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control" id="expectSalary" placeholder="Expect salary..." value={formData.expectSalary} onChange={handleChange} required/>
                    <div className="invalid-feedback">
                      Your expect salary is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com..." value={formData.email} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Enter your address..." value={formData.address} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={formData.address2} onChange={handleChange} required/>
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Thai</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option>Chiang Mai</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" value={formData.zip} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Gender</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="male" name="gender" type="radio" className="form-check-input" value="Male" onChange={handleChange} required/>
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input id="female" name="gender" type="radio" className="form-check-input" value="Female" onChange={handleChange} required/>
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="form-check">
                  <input id="etc" name="gender" type="radio" className="form-check-input" value="Etc" onChange={handleChange} required/>
                  <label className="form-check-label" htmlFor="etc">Etc</label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="cv" className="form-label">Upload CV:</label>
                <input type="file" id="cv" name="cv" className="form-control" accept=".pdf,.doc,.docx" onChange={handleFileChange} onClick={(e) => e.target.value = ''} required />
                <small className="text-muted">Accepted formats: PDF, DOC, DOCX</small>
              </div>

              <hr className="my-4" />

              <Link to="/applicant-summary" className="w-100 btn btn-primary btn-lg">Confirm Registration</Link>
            </form>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">© 2017–2024 Company Name</p>
      </footer>
    </div>
    </div>
    </div>
  );
}

export default Registration;