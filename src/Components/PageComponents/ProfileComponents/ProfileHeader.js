import React from 'react'
import classes from './ProfileHeader.module.css'

function ProfileHeader() {
  return (
    <div className = {classes.headerContainer}>
      <div className= {classes.imageContainer}>
        <img src  ='https://www.business.hsbc.com/-/media/cmb/international-business-guide/srilanka/images/hero-srilanka.jpg?h=1200&w=1920&la=en-GB&hash=91388D0CD00C9DCA249D11ECE1E17F7A' />
      </div>
    </div>
  )
}

export default ProfileHeader;
