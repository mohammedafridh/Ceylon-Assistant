import React from 'react'
import classes from './ProfileDetails.module.css'

function ProfileDetails() {
  return (
    <div className  ={classes.profileContainer}>
        <div className = {classes.profileDetails}>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5"
                alt = 'abc' />
        </div>
    </div>
  )
}

export default ProfileDetails;
