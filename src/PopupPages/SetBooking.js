import React from 'react'
import {Form, Card, Button} from 'react-bootstrap';
import classes from './PopupPages.module.css'

function SetBooking(props){
  return (<Card className = {classes.card} >
        <div className = {classes.closeAll}>
          <Button className = {classes.close} onClick = {props.onCancel}>x</Button>
        </div>
        
        <Form.Group className="mb-3">
          <Form.Label>Tour Guide Name</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tourist</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group> 
        <Form.Group id = 'name' className = {classes.fill1}>
            <Form.Label className = {classes.label}>Name</Form.Label>
          <Form.Control type = 'text' disabled/>
        </Form.Group>

        <div className = {classes.actions}>
          <Button type = 'submit' className = {classes.cncl} onClick = {props.onCancel}>Cancel</Button>
          <Button type = 'submit' className = {classes.book}>Booking</Button>
        </div>
      </Card>
    );
}

export default SetBooking;