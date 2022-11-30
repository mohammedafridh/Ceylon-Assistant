import React from 'react'
import classes from './ContactContents.module.css'
import {UilForwadedCall} from '@iconscout/react-unicons' 

const Map = () => {
  return (
    <div class={classes.mapouter}>
          <div class={classes.gmap_canvas}>
            <iframe width="1000" height="435" id="gmap_canvas" src="https://maps.google.com/maps?q=120/71,yonakapura%20dickwella&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://123movies-to.org"></a>
          </div>

          <div className = {classes.mainContact}>
            <div className = {classes.callHotline}>
              <div className = {classes.callIcon}>  
                <UilForwadedCall />
                <h1>1912</h1>
              </div>
              <span><b>Sri-Lanka Tourism Hotline</b></span>
            </div>

            <div className = {classes.mapCall}>
                <h3>Contact Tourism Head Office </h3>
                <div className = {classes.mapContacts}>
                  <span>Contact : </span>
                  <span>+94 112426900</span>
                </div>

                <div className = {classes.mapContacts}>
                  <span>Address : </span>
                  <span>No. 80, Galle Road, Colombo 03, Sri Lanka.</span>
                </div>      
            </div>      

            </div>
        </div>
  )
}

export default Map