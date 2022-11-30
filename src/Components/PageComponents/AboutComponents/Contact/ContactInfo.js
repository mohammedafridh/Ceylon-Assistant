import React from 'react'
import classes from './ContactContents.module.css'

const ContactInfo = () => {
  return (
    <div className = {classes.contactInfo}>
        <h3>Contact Info</h3>

        <div className = {classes.infoTiles}>
        <span>Address :</span>
        <span>No: 120/18, Beliaththa Rd,</span>
        <span>Welihitiya, Yonakapura,</span>
        <span>Dickwella.</span>
        </div>

        <div className = {classes.infoTiles}>
        <span>Email : </span>
        <span>info@ceylonassistant.com</span>
        </div>

        <div className = {classes.infoTiles}>
        <span>Contact Number : </span>
        <span>+94 0761001819</span>
        </div>

    </div>
  )
}

export default ContactInfo