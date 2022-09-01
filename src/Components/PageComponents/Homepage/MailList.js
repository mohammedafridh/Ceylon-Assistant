import React from 'react'
import classes from './MailList.css'
import {Button} from 'react-bootstrap'

function MailList() {
  return (
    <div className = 'mailContainer'>
      <h1 className = 'mailTopic'>Save Time, Enjoy your Weekend!</h1>
      <span className = 'subTop'><h5>Sign up to receive the best deals from us</h5></span>
      <div className = 'inputContainer'>
        <input type = 'text' placeholder='example@gmail.com' />
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default MailList;
