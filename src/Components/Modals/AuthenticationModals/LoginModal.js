import { useState } from 'react';
import './TouristRegisteModal.css'
import { Modal, useMantineTheme} from '@mantine/core';
import {useUserAuth} from '../../../Context/Context' 
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { ContentCutOutlined } from '@mui/icons-material';
import { useUser } from '../../../Context/UserContext';

function LoginModal({loginModel,setLoginModel}) {
  const theme = useMantineTheme();

//setting data
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {logIn} = useUserAuth();
    const navigate = useNavigate()
    const {guides,tourists} = useUser()

//adding data to firebase

    const isGuideActive = guides.find(guide => guide.email === email && guide.status ==='Active')
    const isTouristActive = tourists.find(tourist => tourist.email === email && tourist.status ==='Active') 
    console.log(isGuideActive) 


const loginHandler = async (e)=>{
    e.preventDefault();
    setError('')
    try{
        if(isGuideActive || isTouristActive){
        await logIn(email,password)
        navigate('/')
        setLoginModel(false)
        toast.success("Login Successful")
        }
        // else{
        //     toast.error('Sorry. Your Profile has been inactivated by Admin! Please contact admin by ceylonassistant@gmail.com for more info')
        // }
    }catch(err){
        // setError('Invalid Credentials')
        console.log(err)
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
                type="text" 
                className='userInput' 
                onChange = {(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
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

        <button type = 'submit' className="buttonLogin">Login </button>
        </div>
    </form>
    </Modal>
  );
}

export default LoginModal