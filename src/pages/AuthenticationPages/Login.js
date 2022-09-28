// import LoginBackground from '../../backgrounds/LoginBackground';
import classes from './Login.module.css'
import {useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../Context/Context'

function Login(){

  const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth();
    const navigate = useNavigate()

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

  return (<div className = {classes.loginBg}>
    <Card className = {classes.card}>
      <Card.Body className = {classes.body}>
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
        <button className = {classes.regBtn}><Link to = '/touristReg'>Tourist Registration</Link></button>
      </center>
    </div>
      </Card.Body>
    </Card>
  </div>
  );
}



export default Login;