import React from 'react'
import './Faq.css'
import {Data} from './FaqData'

const Faq = () => {

  return (
    <div className = 'faq'>
      <div className = 'faqContainer'>
          {Data.map((faqData, i)=>(
              <div className = 'item'>
                <span className='title'>{faqData.question}</span>
                <span className='content'>{faqData.answer}</span>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Faq