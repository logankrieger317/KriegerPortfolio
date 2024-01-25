import React from 'react'
import { useState } from 'react'

function Contact() {
  const [contactForm, setContactForm] = useState({
    name:  '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // submit form data
  }
  
    return (
    <section id="contact">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Name"
            name="name"
            value={contactForm.name}
            onChange={handleChange}  
          />
          <input
            type="email" 
            placeholder="Email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
          />
          <input 
            type='phone'
            placeholder="Phone"
            name="phone"
            value={contactForm.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={contactForm.message}
            onChange={handleChange}  
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
  )
}

export default Contact