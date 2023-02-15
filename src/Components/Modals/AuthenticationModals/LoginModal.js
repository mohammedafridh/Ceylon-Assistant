import { useState,useRef } from 'react';
import './TouristRegisteModal.css'
import { Modal, useMantineTheme} from '@mantine/core';
import {useUserAuth} from '../../../Context/Context' 
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { useUser } from '../../../Context/UserContext';
import loadingGif from '../../../assets/loading-gif.gif'

function LoginModal({loginModel,setLoginModel}) {
  const theme = useMantineTheme();

//setting data
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn, logOut, forgotPassword} = useUserAuth();
    const navigate = useNavigate()
    const {guides,tourists} = useUser()
    const emailRef = useRef()
    const[loading,setLoading] = useState(false)

//adding data to firebase

    const isGuideActive = guides.find(guide => guide.email === email && guide.status ==='Active')
    const isTouristActive = tourists.find(tourist => tourist.email === email && tourist.status ==='Active') 
    console.log(isGuideActive) 


const loginHandler = async (e)=>{
    e.preventDefault();
    setError('')
        try{
            setLoading(true)
            const isLoggedIn = await logIn(email,password)
            if(isLoggedIn && !isGuideActive && !isTouristActive){
                setLoading(false)
                toast.error('Your account is not active')
                logOut()
                return
            }
            setLoading(false)
            navigate('/')
            toast.success('Logged in Successful. Thank You!')
            setLoginModel(false)
            
        }catch(error){
            console.log(error.message)
            error.code === 'auth/invalid-email' && toast.error('Invalid email')
            error.code === 'auth/user-not-found' && toast.error('User not found')
            error.code === 'auth/wrong-password' && toast.error('Incorrect Username or Password')
            setError('Failed to login')
            setLoading(false)
        }  
}

const forgotPasswordHandler = async()=>{
    const emailVal = emailRef.current.value;
    if(emailVal === null){
        toast.error('Provide your email address and press Reset Password')
    }else{
    await forgotPassword(emailVal);
    toast.success('done')
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

    <form onSubmit={loginHandler}>
                
        <div className = 'loginImage'>
            <img src ='https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logos%2FWhatsApp%20Image%202022-12-28%20at%2010.52.01%20AM.jpeg?alt=media&token=6809fdab-7ee5-4906-9b12-f69d21f8f732' alt = ''/>
        </div>

    <div className='addUserForm'>

        <div>
            <input 
                type="email" 
                className='userInput' 
                onChange = {(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
                ref = {emailRef}
                required
            />    
        </div>

        <div>
            <input 
                type="password" 
                className='userInput' 
                onChange = {(e)=> setPassword(e.target.value)}
                placeholder='Password'
                required
            />
        </div>

        {loading?
            <button type = 'submit' className="buttonLogin">
                <img className='loadingIcon' src={loadingGif} />
            </button>:
            <button type = 'submit' className="buttonLogin">Login </button>
        }

        <span>Forgot Password? <a onClick={forgotPasswordHandler} className='resetPassword'>Reset Password</a></span>
        </div>
    </form>
    </Modal>
  );
}

export default LoginModal