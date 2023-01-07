import React from 'react'
import classes from './ContactContents.module.css'

const ContactInfo = () => {
  return (
    <div className = {classes.contactInfo}>
        <h3>Contact Info</h3>
        <div className = {classes.infoTiles}>
        <span>Address :</span>
        <span> No. 106, Beliaththa Road,</span>
        <span>Yonakapura,</span>
        <span>Dickwella.</span>
        </div>

        <div className = {classes.infoTiles}>
        <span>Email : </span>
        <span>ceylonassistant@gmail.com</span>
        </div>

        <div className = {classes.infoTiles}>
        <span>Contact Number : </span>
        <span>+94 412255623</span>
        </div>

    </div>
  )
}

export default ContactInfo