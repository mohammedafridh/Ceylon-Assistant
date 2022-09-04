import React from 'react'
import classes from './BookingHeader.module.css'

function BookingHeader() {
  return (
    <div className = {classes.headerContainer}>
      <div className= {classes.imageContainer}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' />
      </div>
    </div>
  )
}

export default BookingHeader;