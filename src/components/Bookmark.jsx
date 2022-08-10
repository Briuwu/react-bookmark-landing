import React from 'react'
import LogoFooter from '../images/logo-bookmark-nav.svg'
import FbIcon from '../images/icon-facebook.svg'
import TwtIcon from '../images/icon-twitter.svg'

import { motion } from "framer-motion"
import { NavbarVariants, ListVariants } from './variants'

const Bookmark = () => {
  return (
    <motion.footer className='bookmark'
      variants={NavbarVariants}
      initial='initial'
      whileInView='animate'
      viewport={{amount: 0.5}}
    >
      <div className="container">
        <img src={LogoFooter} alt="bookmark logo" className='bookmark-logo' />
        <ul className="bookmark-items">
          <motion.li variants={ListVariants}>Features</motion.li>
          <motion.li variants={ListVariants}>Pricing</motion.li>
          <motion.li variants={ListVariants}>Contact</motion.li>
        </ul>
        <div className="bookmark-links">
          <motion.img variants={ListVariants} src={FbIcon} alt="Facebook Icon" />
          <motion.img variants={ListVariants} src={TwtIcon} alt="Twitter Icon" />
        </div>
      </div>
    </motion.footer>
  )
}

export default Bookmark