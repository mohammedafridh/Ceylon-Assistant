import {useState} from 'react'
import classes from './BookGuide.module.css'

function BookGuide() {

  return (
    <div className = {classes.bookingContainer}>
        <h1 className = {classes.title}>Make Guide Bookings in Minutes</h1>
        <div className = {classes.bookingInputs}>
            <input type = 'text' placeholder='Travelling Location' />
            <input type = 'text' placeholder='Pick-up Destination' />
        </div>
      
    </div>
  )
}

export default BookGuide;
