import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import '../../css/AdmissionForm.css';

function Admission_form() {
  return (
    <>
    <PageTitle title="Login Page" />
      <p className='text-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum modi ducimus nobis minima, voluptate aut nihil, corporis quas ullam, animi fuga cumque. Repellat, excepturi error sequi vel perferendis officia!</p>
      <p className='text-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut eius cupiditate odio numquam suscipit quibusdam dolorum ipsa tempore, excepturi cum eligendi commodi inventore? Similique corporis officiis eum ad eius.</p>
      <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2 className='mb-3'>Admission Form</h2>
            <div className='form-inputs'>
              <label htmlFor="name">Your Name</label>
              <input className='mb-3' type="text" id="name" name="name" placeholder='Enter name..' required />
            </div>
            {/* ratio buttons for male and female */}
            <div className='form-radio mb-3'>
              <label htmlFor="gender" className='label-1'>Gender</label>
              <label>
                <input className='label' type="radio" name="gender" value="male" required />
                Male
              </label>
              <label>
                <input className='label' type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>
            {/* DOB */}
            <div className='form-inputs'>
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            {/* place of birth */}
            <div className='form-inputs'>
              <label htmlFor="birth-place">Place of Birth</label>
              <input className='mb-3' type="text" id="birth-place" name="birth-place" placeholder='Place of Birth..' required />
            </div>
            {/* contact details */}
            <div className='form-inputs'>
              <label htmlFor="contact">Contact Number</label>
              <input className='mb-3' type="tel" id="contact" name="contact" placeholder='Enter contact number..' required />
            </div>
            <div className='form-inputs'>
              <label htmlFor="email">Email</label>
              <input className='mb-3' type="email" id="email" name="email" placeholder='Enter email..' required />
            </div>
            {/* father name and mother name */}
            <div className='form-inputs'>
              <label htmlFor="father-name">Father's Name</label>
              <input className='mb-3' type="text" id="father-name" name="father-name" placeholder="Enter father's name.." required />
            </div>
            <div className='form-inputs'>
              <label htmlFor="mother-name">Mother's Name</label>
              <input className='mb-3' type="text" id="mother-name" name="mother-name" placeholder="Enter mother's name.." required />
            </div>
            {/* permanent address in text area */}
            <div className='form-inputs'>
              <label htmlFor="address">Permanent Address</label>
              <textarea className='mb-3' id="address" name="address" placeholder="Enter permanent address.." required></textarea>
            </div>
            {/* current address */}
            <div className='form-inputs'>
              <label htmlFor="current-address">Current Address</label>
              <textarea className='mb-3' id="current-address" name="current-address" placeholder="Enter current address.." required></textarea>
            </div>
            <div className='form-btn'>
              <button>Submit</button>
            </div>
          </form>
          </div>
      </div>
      </section>
    </>
  )
}

export default Admission_form