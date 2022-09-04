import React from 'react'
import classes from './BookingList.module.css'
import {Button} from 'react-bootstrap' 
import {useNavigate} from 'react-router-dom'

function BookingList() {

const navigate  = useNavigate('')

function handleBooking(){
    navigate('/selectedBooker')
}

  return (
    <div className = {classes.bookingContainer}>
            <div className = {classes.bookingList}>
                <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5' 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>
                        <span><b>Name : </b></span>
                        <span><b>Tour Location : </b> </span>
                        <span><b>Pick-up Destination : </b></span>
                        <span><b>Tour Date Range : </b></span>
                        <span><b>Pick-up Time : </b></span>
                    </div>
                    <div className = {classes.buttonContainer}>
                        <Button onClick = {handleBooking}>More Details</Button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BookingList;
