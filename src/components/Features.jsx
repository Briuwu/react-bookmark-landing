import React, { useState } from 'react'
import FeaturesImg1 from '../images/illustration-features-tab-1.svg'
import FeaturesImg2 from '../images/illustration-features-tab-2.svg'
import FeaturesImg3 from '../images/illustration-features-tab-3.svg'

import { motion, AnimatePresence } from 'framer-motion'
import { headerVariants, featuresText } from './variants'

const tabs = [
  {
    tabId: 'simple',
    tabBtn: 'Simple Bookmarking',
    tabImg: FeaturesImg1,
    tabTitle: 'Bookmark in one click',
    tabDesc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  {
    tabId: 'speedy',
    tabBtn: 'Speedy Searching',
    tabImg: FeaturesImg2,
    tabTitle: 'Intelligent search',
    tabDesc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  {
    tabId: 'easy',
    tabBtn: 'Easy Sharing',
    tabImg: FeaturesImg3,
    tabTitle: 'Share your bookmarks',
    tabDesc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  },
]

const Features = () => {
  const [activeTab, setActiveTab] = useState('simple')

  const handleActive = (e) => {
    let activeId = e.target.id
    setActiveTab(activeId)
  }

  return (
    <motion.div className='features'
      variants={headerVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="container">
        <motion.p className='features-title' variants={featuresText}>Features</motion.p>
        <motion.p className='features-desc' variants={featuresText}>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</motion.p>

        <div className="features-btns">
          {tabs.map((item) => (
            <motion.button
              variants={featuresText}
              key={item.tabId}
              onClick={handleActive}
              id={item.tabId}
              className={activeTab === item.tabId ? 'active' : ''}
            >
              {item.tabBtn}
            </motion.button>
          ))}
        </div>

        <AnimatePresence exitBeforeEnter>
          <motion.div className="features-tab"
            variants={featuresText}
            exit='exit'
          >
            {tabs.map((item, index) => (
                item.tabId === activeTab ? (
                  <motion.img src={item.tabImg}  alt={item.tabTitle} key={index} />
                ) : ''
            ))}

              <motion.div className="features-tab-desc"
              >
                {tabs.map((item, index) => (
                    item.tabId === activeTab ? (
                      <motion.div key={index}
                      >
                        <p className='features-tab-title'>{item.tabTitle}</p>
                        <p className='features-tab-info'>{item.tabDesc}</p>
                      </motion.div>
                    ) : ''
                ))}
                <motion.button href="#" className='soft-blue'
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >More Info</motion.button>
              </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    <motion.div className="features-bg"
      initial={{ translateX: '-100%' }}
      animate={{ translateX: '0%' }}
      transition={{type: 'tween'}}
    ></motion.div>
    </motion.div>
  )
}

export default Features