import React, { useState } from 'react'
import { PageTitle } from '../../components/PageTitle'
import '../../css/AdmissionForm.css';
import useAdmission from '../../hooks/useAdmission';

function Admission_form() {
  const { handleSubmit, handleChange, loading } = useAdmission();
  return (
    <>
    <PageTitle title="Admission Page" />
      <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2 className='mb-3'>Admission Form</h2>
            <div className='form-inputs'>
              <label htmlFor="name">Your Name</label>
              <input onChange={handleChange} className='mb-3' type="text" id="name" name="name" placeholder='Enter name..' required />
            </div>
            {/* ratio buttons for male and female */}
            <div className='form-radio mb-3'>
              <label htmlFor="gender" className='label-1'>Gender</label>
              <label>
                <input onChange={handleChange} className='label' type="radio" name="gender" id="gender" value="male" required />
                Male
              </label>
              <label>
                <input onChange={handleChange} className='label' type="radio" name="gender" id="gender" value="female" required />
                Female
              </label>
            </div>
            {/* DOB */}
            <div className='form-inputs'>
              <label htmlFor="DOB">Date of Birth</label>
              <input onChange={handleChange} type="date" id="DOB" name="DOB" required />
            </div>
            {/* place of birth */}
            <div className='form-inputs'>
              <label htmlFor="POB">Place of Birth</label>
              <input onChange={handleChange} className='mb-3' type="text" id="POB" name="POB" placeholder='Place of Birth..' required />
            </div>
            {/* contact details */}
            <div className='form-inputs'>
              <label htmlFor="number">Contact Number</label>
              <input onChange={handleChange} className='mb-3' type="tel" id="number" name="contact" placeholder='Enter contact number..' required />
            </div>
            <div className='form-inputs'>
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} className='mb-3' type="email" id="email" name="email" placeholder='Enter email..' required />
            </div>
            {/* father name and mother name */}
            <div className='form-inputs'>
              <label htmlFor="fName">Father's Name</label>
              <input onChange={handleChange} className='mb-3' type="text" id="fName" name="fName" placeholder="Enter father's name.." required />
            </div>
            <div className='form-inputs'>
              <label htmlFor="mName">Mother's Name</label>
              <input onChange={handleChange} className='mb-3' type="text" id="mName" name="mName" placeholder="Enter mother's name.." required />
            </div>
            {/* permanent address in text area */}
            <div className='form-inputs'>
              <label htmlFor="pAddress">Permanent Address</label>
              <textarea onChange={handleChange} className='mb-3' id="pAddress" name="pAddress" placeholder="Enter permanent address.." required></textarea>
            </div>
            {/* current address */}
            <div className='form-inputs'>
              <label htmlFor="cAddress">Current Address</label>
              <textarea onChange={handleChange} className='mb-3' id="cAddress" name="cAddress" placeholder="Enter current address.." required></textarea>
            </div>
            <div className='form-btn'>
              <button type='submit' disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
            </div>
          </form>
          </div>
      </div>
      </section>
    </>
  )
}

export default Admission_form