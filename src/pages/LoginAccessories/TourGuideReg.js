import React, {useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import classes from './TourGuideReg.module.css'
import LoginBackground from '../../backgrounds/LoginBackground';
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context';

import {db } from '../../Firebase';
import {collection,addDoc} from 'firebase/firestore'

function TourGuideReg() {

    const [newName,setNewName] = useState('');
    const [newGender,setNewGender] = useState('');
    const [newContactNumber,setNewContactNumber] = useState('');
    const [newAge,setNewAge] = useState('');
    const [newAddress,setNewAddress] = useState('');
    const [newDistrict,setNewDistrict] = useState('');
    const[newEmail,setNewEmail] = useState('')
    const[newPassword,setNewPassword] = useState('')
    const [error,setError] = useState('')
    const {signUp} = useUserAuth();
    const navigate = useNavigate()

    const usersCollectionRef = collection(db, "users")

    const createUser = async()=>{
        await addDoc(usersCollectionRef, {name:newName, email:newEmail, gender:newGender, 
        contact_Number:newContactNumber, age:newAge, address:newAddress, district:newDistrict})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await signUp(newEmail,newPassword);
            await createUser()
            navigate('/home')
        }catch(err){
            setError(err.message)
        }
    }

  return (
    <div>
      <LoginBackground />
      <Card className = {classes.card}>
        <Card.Body>
            <h2 className = {classes.heading}>Sign up</h2>
            {error && <Alert variant = 'danger'>{error}</Alert>}
            <Form className={classes.form} onSubmit = {handleSubmit}>  
            <div class='row'> 
                <div class = 'col-6'>        
                <Form.Group id = 'name' className = {classes.fill1}>
                    <Form.Label className = {classes.label}>Name</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=> setNewName(e.target.value)}/>
                </Form.Group>
                </div> 
                <div class = 'col-6'> 
                <Form.Group id = 'gender' className = {classes.fill2}>
                    <Form.Label  className = {classes.label}>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" onChange = {(e)=>setNewGender(e.target.value)}>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Form.Select>
                </Form.Group>
                </div> 
            </div> 
            <div class = 'row'>
                <div class = 'col-6'>
                <Form.Group id = 'contactNumber' className = {classes.fill3}>
                    <Form.Label  className = {classes.label}>Contact Number</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewContactNumber(e.target.value)}/>
                </Form.Group>
                </div>
                <div class = 'col-6'>
                <Form.Group id = 'age' className = {classes.fill4}>
                    <Form.Label  className = {classes.label}>Age</Form.Label>
                    <Form.Control type = 'number' onChange = {(e)=>setNewAge(e.target.value)}/>
                </Form.Group>
                </div>
            </div>
            <div class = 'row'>
                <div class = 'col-7'>
                <Form.Group id = 'address' className = {classes.fill5}>
                    <Form.Label  className = {classes.label}>Address</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewAddress(e.target.value)}/>
                </Form.Group>
                </div>
                <div class = 'col-5'>
                <Form.Group id = 'district' className = {classes.fill6}>
                    <Form.Label  className = {classes.label}>District</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewDistrict(e.target.value)}/>
                </Form.Group>
                </div>
            </div>
                {/* <Form.Group id = 'vehicleType' className = {classes.fill7}>
                    <Form.Label  className = {classes.label}>Vehicle Type</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Select Type</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="jeep">Jeep</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group id = 'model' className = {classes.fill1}>
                    <Form.Label  className = {classes.label}>Model</Form.Label>
                    <Form.Control type = 'text'/>
                </Form.Group>
                <Form.Group id = 'passengerCapacity' className = {classes.fill1}>
                    <Form.Label  className = {classes.label}>No of Passengers</Form.Label>
                    <Form.Control type = 'text'/>
                </Form.Group> */}
                <center>
                <div class = 'col-6'>
                <Form.Group id = 'email' className = {classes.fill10}>
                    <Form.Label  className = {classes.label}>E-mail</Form.Label>
                    <Form.Control type = 'email' onChange = {(e)=> setNewEmail(e.target.value)} />
                </Form.Group>
                </div>
                <div class = 'col-6'>
                <Form.Group id = 'password1' className = {classes.fill11}>
                    <Form.Label  className = {classes.label}>Password</Form.Label>
                    <Form.Control type = 'password' onChange = {(e)=> setNewPassword(e.target.value)} />
                </Form.Group>
                </div>
                </center>
                {/* <Form.Group id = 'password2'>
                    <Form.Label  className = {classes.label}>Confirm Password</Form.Label>
                    <Form.Control type = 'password' ref = {password2} required />
                </Form.Group> */}
                {/* <Form.Group id = 'image'>
                    <Form.Label  className = {classes.label}>Add your real image</Form.Label>
                    <Form.Control type = 'file' ref = {image} required />
                </Form.Group> */}
                <center><Button type = 'submit' className = {classes.register_Btn}>Register</Button></center>
            </Form>
            <div className = {classes.signIn_Btn}>
        Already have an account? <Link to = '/'>Log in</Link>
      </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TourGuideReg;