import React from 'react'
import HeroImg from '../images/illustration-hero.svg'

import { motion } from "framer-motion"
import { headerVariants, headerDesc, eachText } from './variants'

const Header = () => {
  return (
    <motion.div className='header'
      variants={headerVariants}
      initial='initial'
      animate='animate'
    >
      <div className="container">
        <motion.img src={HeroImg} alt="Hero Image" className='header-hero'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        />
        <motion.div className="header-desc"
          variants={headerDesc}
        >
          <motion.h1 variants={eachText}>A Simple Bookmark <br /> Manager</motion.h1>
          <motion.p variants={eachText}>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</motion.p>
          <motion.div className="header-btns" variants={eachText}>
            <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}} href='#' className='soft-blue'>Get it on Chrome</motion.button>
            <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}} href='#' >Get it on Firefox</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="header-bg"
        initial={{ translateX: '100%' }}
        animate={{ translateX: '0%' }}
        transition={{type: 'tween'}}
      ></motion.div>
    </motion.div>
  )
}

export default Header