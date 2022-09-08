import React from 'react'
import BookingHeader from './BookingHeader'
import Layout from '../../layouts/Layout';
import MailList from '../Homepage/MailList'
import classes from './SelectedBooker.module.css'
import {Button} from 'react-bootstrap'

function SelectedBooker() {
  return (
    <Layout>
        <BookingHeader />
        <div className = {classes.bookerContainer}>
          <div className = {classes.bookerWrapper}>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5" alt = '' />
            <div className = {classes.bookerDetails}>
              <div className = {classes.details}>
                <label>Name</label>
                <span>Abc</span>
              </div>
              <div className = {classes.details}>
                <label>Gender</label>
                <span>Abc</span>
              </div>
              <div className = {classes.details}>
                <label>Contact Number</label>
                <span>Abc</span>
              </div>
              <div className = {classes.details}>
                <label>Email</label>
                <span>Abc</span>
              </div>  

              <div className = {classes.actions}>
                <Button className = {classes.rjct}>Reject</Button>
                <Button className = {classes.acpt}>Accept</Button>
              </div>      
            </div> 
          </div>
        </div>

        <MailList />
      
    </Layout>
  )
}

export default SelectedBooker;
