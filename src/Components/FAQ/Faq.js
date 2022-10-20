import React, {useState} from 'react'
import './Faq.css'
import {Data} from './FaqData'

const Faq = () => {

  const [selected,setSelected] = useState('')

  const toggle = (i) => {
      if(selected == i){
        return setSelected(null)
      }

      setSelected(i)
  }

  return (
    <div className = 'faq'>
      <h1>FAQ</h1>

      {Data.map((faqData,i)=>(
        <div className='faqData'>
          <div className = 'question' onClick = {()=>toggle(i)}>
            <h4>{faqData.question}</h4>
            <div className='icons'>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
          </div>

          <div className = {selected == i? 'content show' : 'content'}>
            {faqData.answer}
          </div>

        </div>
      ))}
    </div>
  )
}

export default Faq