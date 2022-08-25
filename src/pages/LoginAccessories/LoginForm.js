import React, {useState} from 'react'
import classes from './LoginForm.module.css'
import {Form,Button,Card,Alert} from 'react-bootstrap'
// import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../Context/Context'

function LoginForm() {

    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth();
    const navigate = useNavigate()
    // const {googleSignIn} = useUserAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await logIn(email,password)
            navigate('/')
        }catch(err){
            setError(err.message)
        }
    }

    // const handleGoogleSignIn = async (e)=>{
    //     e.preventDefault();
    //     try{
    //       await googleSignIn();
    //       navigate('/home')
    //     }catch(err){
    //       setError(err.message);
    //     }
    // }

  return (<div>
    <Card className = {classes.card}>
      <Card.Body className = {classes.body}>
        {/* <div className = {classes.logo}>
        <img src ='https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logos%2FWhatsApp%20Image%202022-08-17%20at%2010.55.49%20PM%20(1).jpeg?alt=media&token=72c21d23-5832-4cf4-9001-aa34f4b4f702' alt = 'logo' />
        </div> */}
          <h2 className = {classes.heading}>Login</h2>
          {error && <Alert variant = 'danger'>{error}</Alert>}
          <Form className={classes.form} onSubmit = {handleSubmit}>
            <div className = {classes.credentials}>
              <Form.Group id = 'email'>
                  {/* <Form.Label  className = {classes.label}>E-mail</Form.Label> */}
                  <Form.Control type = 'email' placeholder = 'Email' className = {classes.fill} onChange = {(e)=> setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group id = 'password1'>
                  {/* <Form.Label  className = {classes.label}>Password</Form.Label> */}
                  <Form.Control type = 'password' placeholder = 'Password' className = {classes.fill} onChange = {(e)=>setPassword(e.target.value)} />
              </Form.Group>
              </div>
              <div className = {classes.loginBtn}>
                <Button type = 'submit' className = {classes.login}>Login</Button>
              </div>               
              
          </Form>
          <div className = {classes.signIn_Btn}>
      Do not have an account? <b>Sign Up</b>
    </div>
    <div className = {classes.actions}>
      <center>
        <button className = {classes.regBtn}><Link to = '/tourGuideReg'>Tour Guide Registration</Link></button>
        <button className = {classes.regBtn}><Link to = '/touristRegDemo'>Tourist Registration</Link></button>
      </center>
    </div>
      </Card.Body>
    </Card>
  </div>
  )
}

export default LoginForm
