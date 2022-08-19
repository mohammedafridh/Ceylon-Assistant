import React, {useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import classes from './TourGuideReg.module.css'
import LoginBackground from '../../backgrounds/LoginBackground';
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context';

import {db,storage } from '../../Firebase';
import {collection,addDoc} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

function TouristReg() {

    const [newName,setNewName] = useState('');
    const [newGender,setNewGender] = useState('');
    const [newContactNumber,setNewContactNumber] = useState('');
    const[newEmail,setNewEmail] = useState('')
    const[newPassword,setNewPassword] = useState('')
    const [image,setImage] = useState(null)
    const[url,setUrl] = useState(null)
    const [error,setError] = useState('')
    const {signUp} = useUserAuth();
    const {user} = useUserAuth()
    const navigate = useNavigate()

    // getting image url and adding details to storage and firestore db
    const createUser = async()=>{
        const imageRef = ref(storage,`Tourist Images/${image.name + v4()}`);
        uploadBytes(imageRef, image).then(()=>{
            getDownloadURL(imageRef).then((url)=>{
                setUrl(url);
                //add details part
                const touristCollectionRef = collection(db, "Tourists")
                addDoc(touristCollectionRef, {name:newName, image:url, email:newEmail, gender:newGender, 
                         contact_Number:newContactNumber})
            }).catch((err)=>{
                setError(err.message,'error getting the image')
            })
            setImage(null)
        }).catch((err)=>{
            setError(err)
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await signUp(newEmail,newPassword);
            await createUser();
            // await uploadImage();
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
            <h2 className = {classes.heading}>Tourist Sign up</h2>
            {error && <Alert variant = 'danger'>{error}</Alert>}
            <Form className={classes.form} onSubmit = {handleSubmit}>  
            <div class = 'row'>
                <div class = 'col-6'>        
                <Form.Group id = 'name' className = {classes.fill1}>
                    <Form.Label className = {classes.label}>Name</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=> setNewName(e.target.value)} required/>
                </Form.Group>
                </div> 

                <div class = 'col-6'>
                <Form.Group id = 'image'>
                    <Form.Label  className = {classes.label}>Add your real image</Form.Label>
                    <Form.Control type = 'file' onChange = {(e)=>setImage(e.target.files[0])} required />
                </Form.Group>
                </div>
            </div>

            <div class='row'> 
                <div class = 'col-6'> 
                <Form.Group id = 'gender' className = {classes.fill20}>
                    <Form.Label  className = {classes.label}>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" onChange = {(e)=>setNewGender(e.target.value)} required>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Form.Select>
                </Form.Group>
                </div>           
            
                <div class = 'col-6'>
                <Form.Group id = 'contactNumber' className = {classes.fill30}>
                    <Form.Label  className = {classes.label}>Contact Number</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewContactNumber(e.target.value)} required/>
                </Form.Group>
                </div>
                
            </div>
            <center>
                <div class = 'col-6'>
                <Form.Group id = 'email' className = {classes.fill10}>
                    <Form.Label  className = {classes.label}>E-mail</Form.Label>
                    <Form.Control type = 'email' onChange = {(e)=> setNewEmail(e.target.value)} required/>
                </Form.Group>
                </div>
                <div class = 'col-6'>
                <Form.Group id = 'password1' className = {classes.fill11}>
                    <Form.Label  className = {classes.label}>Password</Form.Label>
                    <Form.Control type = 'password' onChange = {(e)=> setNewPassword(e.target.value)} required/>
                </Form.Group>
                </div>
                </center>
                
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

export default TouristReg;