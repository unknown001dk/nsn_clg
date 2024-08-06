import React from 'react'
import useContact from '../hooks/useContact';

function Contact() {
  const { handleSubmit, handleChange, loading } = useContact();

  return (
    <div className='contact-flex'>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>For any enquiries or inquiries, please contact us at:</p>
        <p><b>Email:</b> info@nsncollege.com</p>
        <p><b>Phone:</b> +91 1234567890</p>
        <p><b>Address:</b> 123 Main St, City, State, Zip</p>
      </div>
      <div className="contact-msg">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input id='name' name='name' onClick={handleChange} type="text" placeholder="Name" required />
          <input id='email' name='email' onClick={handleChange} type="email" placeholder="Email" required />
          <textarea id='msg' name='msg' onClick={handleChange} placeholder="Message" required />
          <div className='btn'>
            <button type="submit" disabled={loading}>{loading ? 'Loading..' : 'Submit'}</button>
          </div>
        </form>
        <p><span><b>Note:</b> Please ensure you fill all fields correctly.</span></p>
      </div>
    </div>

  )
}

export default Contact
