import React, {useState} from 'react'
import classes from './LoginForm.module.css'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../Context/Context'

function LoginForm() {

    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth();
    const navigate = useNavigate()
    const {googleSignIn} = useUserAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await logIn(email,password)
            navigate('/home')
        }catch(err){
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e)=>{
        e.preventDefault();
        try{
          await googleSignIn();
          navigate('/home')
        }catch(err){
          setError(err.message);
        }
    }

  return (<div>
    <Card className = {classes.card}>
      <Card.Body className = {classes.body}>
          <h2 className = {classes.heading}>Login</h2>
          {error && <Alert variant = 'danger'>{error}</Alert>}
          <Form className={classes.form} onSubmit = {handleSubmit}>
              <Form.Group id = 'email'>
                  {/* <Form.Label  className = {classes.label}>E-mail</Form.Label> */}
                  <Form.Control type = 'email' placeholder = 'Email' className = {classes.fill} onChange = {(e)=> setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group id = 'password1'>
                  {/* <Form.Label  className = {classes.label}>Password</Form.Label> */}
                  <Form.Control type = 'password' placeholder = 'Password' className = {classes.fill} onChange = {(e)=>setPassword(e.target.value)} />
              </Form.Group>
            
                <Button type = 'submit' className = {classes.login}>Login</Button>
            <div className={classes.buttons}>
                <GoogleButton className = {classes.gglBtn} onClick = {handleGoogleSignIn}></GoogleButton>
            </div>
               
              
          </Form>
          <div className = {classes.signIn_Btn}>
      Do not have an account? <Link to = '/newSignup'>Sign Up</Link>
    </div>
      </Card.Body>
    </Card>
    
  </div>
  )
}

export default LoginForm
