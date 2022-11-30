import { useState } from 'react';
import './TouristRegisteModal.css'
import { Modal, useMantineTheme} from '@mantine/core';
import {useUserAuth} from '../../../Context/Context' 
import {useNavigate} from 'react-router-dom'

function LoginModal({loginModel,setLoginModel}) {
  const theme = useMantineTheme();

//setting data
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth();
    const navigate = useNavigate()

//adding data to firebase

const loginHandler = async (e)=>{
    e.preventDefault();
    setError('')
    try{
        await logIn(email,password)
        navigate('/')
    }catch(err){
        setError(err.message)
    }
}

return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.25}
      overlayBlur={0.5}
      size = '30%'
      opened = {loginModel}
      onClose = {()=>setLoginModel(false)}
    >

    <form onSubmit={loginHandler} className = 'addUserForm'>
                
        <h3>Login</h3>

        <div>
            <input 
                type="text" 
                className='userInput' 
                onChange = {(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
                value = {email}
                required
            />    
        </div>

        <div>
            <input 
                type="password" 
                className='userInput' 
                onChange = {(e)=> setPassword(e.target.value)}
                placeholder='Password'
                value = {password}
                required
            />
        </div>

        <button type = 'submit' className="button">Login </button>
    </form>
    </Modal>
  );
}

export default LoginModal