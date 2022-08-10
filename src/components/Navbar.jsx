import React, { useEffect, useState } from 'react'
import Logo from '../images/logo-bookmark.svg'
import LogoNav from '../images/logo-bookmark-nav.svg'
import IconMenu from '../images/icon-hamburger.svg'
import IconClose from '../images/icon-close.svg'

import { motion } from "framer-motion"
import { NavbarVariants, ListVariants } from './variants'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(prev => !prev)
  }

  // prevent scrolling when the navbar is open.
  useEffect(() => {
    if (menu){
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [menu])

  return (
    <motion.nav className='navbar container'
      initial='initial'
      whileInView='animate'
      viewport={{ once: false }}
    >
      <motion.img src={menu ? LogoNav : Logo} alt="Bookmark Logo" className='navbar-logo'
        variants={NavbarVariants}
      />

      <motion.button onClick={handleMenu} className='navbar-menu'
        variants={NavbarVariants}
      ><img src={menu ? IconClose : IconMenu} alt="Menu" /></motion.button>
      <motion.ul className={`navbar-items ${menu ? 'active' : ''}`}
        variants={NavbarVariants}
        initial='initial'
        whileInView='animate'
        exit='exit'
        viewport={{ once: false }}
      >
        <motion.li variants={ListVariants}>features</motion.li>
        <motion.li variants={ListVariants}>pricing</motion.li>
        <motion.li variants={ListVariants}>contact</motion.li>
        <motion.li 
          variants={ListVariants} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ><button className='login-btn'>login</button></motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar