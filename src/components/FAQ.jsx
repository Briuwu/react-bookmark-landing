import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { animateFaq, featuresText } from './variants'

const FaqData = [
  {
    question: 'What is Bookmark?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, praesentium delectus esse tenetur sunt, rerum totam ratione dolorem laborum laboriosam voluptates quis reiciendis dolorum sapiente facere voluptate ducimus quas.'
  },
  {
    question: 'How can I request a new browser?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, praesentium delectus esse tenetur sunt, rerum totam ratione dolorem laborum laboriosam voluptates quis reiciendis dolorum sapiente facere voluptate ducimus quas.'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, praesentium delectus esse tenetur sunt, rerum totam ratione dolorem laborum laboriosam voluptates quis reiciendis dolorum sapiente facere voluptate ducimus quas.'
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, praesentium delectus esse tenetur sunt, rerum totam ratione dolorem laborum laboriosam voluptates quis reiciendis dolorum sapiente facere voluptate ducimus quas.'
  },
]

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const handleFaq = i => {
    if (activeFaq === i) {
      return setActiveFaq(null)
    }

    setActiveFaq(i)
  }

  return (
    <motion.div className='faq container'
      variants={featuresText}
      initial='initial'
      whileInView='animate'
      viewport={{once: true, amount: 0.6}}
    >
      <p className="faq-title">Frequently Asked Questions</p>
      <p className="faq-desc">Here are some of our FAQs. If you have any other questions you'd like to answered please feel free to email us.</p>

      <div className="faq-all">
        {FaqData.map((item, i) => (
          <motion.div className='faq-each' key={i} variants={animateFaq}>
            <div className="faq-each-question" onClick={() => handleFaq(i)}>
              <p>{item.question}</p>
              <svg className={`faq-arrow ${activeFaq === i ? 'show' : ''}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
            </div>
            <div className={`faq-each-answer ${activeFaq === i ? 'show' : ''}`}>
              {item.answer}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button href="#" className='soft-blue' whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>More Info</motion.button>
    </motion.div>
  )
}

export default FAQ