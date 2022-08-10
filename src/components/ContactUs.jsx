import React, { useState } from 'react'

import { motion } from 'framer-motion'

const ContactUs = () => {
  const [email, setEmail] = useState('')
  const [notValid, setNotValid] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setEmail(e.target.value)
  }
  
  const handleEmail = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(re.test(email)){
      setNotValid(false)
    } else if (!re.test(email)) {
      setNotValid(true)
    }
  }
  
  return (
    <motion.div className='contact'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.6}}
    >
      <div className="container">
        <p className='contact-joined'>35,000+ already joined</p>
        <p className="contact-title">Stay up-to-date with what we're doing</p>

        <form className='contact-form' onSubmit={handleSubmit}>
          <input type="email" value={email} placeholder='Enter your email address' onChange={handleChange} className={notValid ? 'active' : ''} />
          <span className={notValid ? 'active' : ''}>Whoops make sure it's an email</span>
          <button onClick={handleEmail}>Contact Us</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactUs