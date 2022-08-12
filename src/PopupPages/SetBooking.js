import React from 'react'
import classes from './PopupPages.module.css'

export default function SetBooking(props) {
  return (<div className = 'view'>
        <div className = 'heading'>
            <p>Booking</p>
        </div>
        <div className='actions'>
            <button className='btn btn-alt' onClick = {props.onCancel}>Yes</button>
            <button className='btn' onClick={props.onCancel}>No</button>
        </div>
    </div>
    
  )
}
