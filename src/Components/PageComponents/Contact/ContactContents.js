import React from 'react'
import classes from './ContactContents.module.css'
import {UilForwadedCall} from '@iconscout/react-unicons' 

const ContactContents = () => {
  return (
    <div className = {classes.contactContents}>
        <div className = {classes.topContainer}>
            <h1>Contact Us</h1>
        </div>

        <div class={classes.mapouter}>
          <div class={classes.gmap_canvas}>
            <iframe width="1000" height="435" id="gmap_canvas" src="https://maps.google.com/maps?q=120/71,yonakapura%20dickwella&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://123movies-to.org"></a>
          </div>

          <div className = {classes.mapContact}>
            <div className = {classes.callHotline}>
            <div className = {classes.callIcon}>  
              <UilForwadedCall />
              <h1>1912</h1>
            </div>
              <span><b>Sri-Lanka Tourism Hotline</b></span>
            </div>

            <div className = {classes.mapCall}>
                <h3>Contact Tourism Head Office </h3>
                <div className = {classes.mapContact}>
                  <span>Contact : </span>
                  <span>+94 112426900</span>
                </div>

                <div className = {classes.mapContact}>
                  <span>Address : </span>
                  <span>No. 80, Galle Road, Colombo 03, Sri Lanka.</span>
                </div>      
            </div>      

            </div>
        </div>

        <div className = {classes.contactDetails}>

          <div className = {classes.fillDetails}>
              <form className={classes.bookingForm}>
                <h3>Message Us</h3>

                <div>
                    <label>Your Name*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    name = '' 
                    onChange = ''/>
                </div>

                <div>
                    <label>Your Email*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    name = '' 
                    onChange = ''/>
                </div>

                <div>
                    <label>Subject*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    name = '' 
                    onChange = ''/>
                </div>

                <span>
                    <label>Message*</label>
                    <textarea 
                      className = {classes.bookingDescription}
                      onChange= ''>
                    </textarea>
                </span>

                <button className = {classes.bookBtn} onClick = ''>Send </button>
            </form>
          </div>

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

        </div>

    </div>
  )
}

export default ContactContents