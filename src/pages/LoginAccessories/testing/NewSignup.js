import React, {useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import classes from '../Signup.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../../Context/Context';
import LoginBackground from '../../../backgrounds/LoginBackground';
// import addTourGuide from '../../../Firebase'
import {db } from '../../../Firebase';
import {collection,addDoc} from 'firebase/firestore'

export default function NewSignup() {

    const [newName,setNewName] = useState('');
    const[newEmail,setNewEmail] = useState('')
    const[newPassword,setNewPassword] = useState('')
    const [error,setError] = useState('')
    const {signUp} = useUserAuth();
    const navigate = useNavigate()

    const usersCollectionRef = collection(db, "users")

    const createUser = async()=>{
        await addDoc(usersCollectionRef, {name:newName, email:newEmail})
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
                <Form.Group id = 'name'>
                    <Form.Label className = {classes.label}>Name</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewName(e.target.value)}/>
                </Form.Group>
                
                <Form.Group id = 'gender'>
                    <Form.Label  className = {classes.label}>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" >
                    <option required>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group id = 'contactNumber'>
                    <Form.Label  className = {classes.label}>Contact Number</Form.Label>
                    <Form.Control type = 'number' />
                </Form.Group>
                <Form.Group id = 'address'>
                    <Form.Label  className = {classes.label}>Address</Form.Label>
                    <Form.Control type = 'text'/>
                </Form.Group>
                <Form.Group id = 'district'>
                    <Form.Label  className = {classes.label}>District</Form.Label>
                    <Form.Control type = 'text'/>
                </Form.Group> 
                <Form.Group id = 'email'>
                    <Form.Label  className = {classes.label}>E-mail</Form.Label>
                    <Form.Control type = 'email' onChange = {(e)=> setNewEmail(e.target.value)} />
                </Form.Group>
                <Form.Group id = 'password1'>
                    <Form.Label  className = {classes.label}>Password</Form.Label>
                    <Form.Control type = 'password' onChange = {(e)=> setNewPassword(e.target.value)} />
                </Form.Group>
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
