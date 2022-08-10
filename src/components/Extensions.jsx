import React from 'react'
import ChromeImg from '../images/logo-chrome.svg'
import FirefoxImg from '../images/logo-firefox.svg'
import OperaImg from '../images/logo-opera.svg'

import { motion } from 'framer-motion'
import { animateCards, featuresText } from './variants'

const extensions = [
  {
    ext_name: 'Chrome',
    ext_ver: '62',
    ext_img: ChromeImg
  },
  {
    ext_name: 'Firefox',
    ext_ver: '55',
    ext_img: FirefoxImg
  },
  {
    ext_name: 'Opera',
    ext_ver: '46',
    ext_img: OperaImg
  }
]

const Extensions = () => {
  return (
    <motion.div className='extensions container'
      variants={featuresText}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
    >
      <div className='extensions-head'>
        <p className='extensions-head-title'>Download the extension</p>
        <p className='extensions-head-desc'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priotize.</p>
      </div>
      <div className="extensions-all">
        {extensions.map((item, index) => (
          <motion.div className={`extensions-each ${item.ext_name}`} key={index} variants={animateCards} whileHover={{translateY: -20}}>
            <img src={item.ext_img} alt={item.ext_img} className='extensions-each-img' />
            <p className="extensions-each-title">Add to {item.ext_name}</p>
            <p className="extensions-each-ver">Miniumum version {item.ext_ver}</p>
            <motion.button href="#" className='soft-blue' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Add & Install Extension</motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Extensions