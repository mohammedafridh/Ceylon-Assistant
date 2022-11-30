import React from 'react'
import classes from './ContactContents.module.css'
import ContactInfo from './ContactInfo'
import Map from './Map'
import Message from './Message'

const ContactContents = () => {

  return (
    <div className = {classes.contactContents}>
        <Map />

        <div className = {classes.contactDetails}>
          <Message />
          <ContactInfo />

        </div>

    </div>
  )
}

export default ContactContents