import { useState,useEffect,useRef } from 'react';
import './TouristRegisteModal.css'
import { Modal, useMantineTheme} from '@mantine/core';
import {useUserAuth} from '../../../Context/Context' 
import {db,storage} from '../../../Firebase'
import {doc, setDoc } from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { toast } from 'react-hot-toast';
import loadingGif from '../../../assets/loading-gif.gif'

function TouristRegisterModal({touristModal,setTouristModal}) {
  const theme = useMantineTheme();

//setting data
const [fName, setFName] = useState('')
const [lName, setLName] = useState('')
const [contactNumber, setContactNumber] = useState('')
const [passportNumber, setPassportNumber] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [passwordMatch, setPasswordMatch] = useState(true);
const [passportImage, setPassportImage] = useState('')
const [status, setStatus] = useState('Active')
const [error, setError] = useState('')
const[profileURL,setProfileURL] = useState(null)
const[passportUrl,setPassportUrl] = useState(null)
const [formStatus, setFormStatus] = useState('')
const[imgError,setImgError] = useState(false)
const[numberOk,setNumberOk] = useState(true)
const {signUp} = useUserAuth();
const current = new Date();
const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const profileRef = useRef()
const passportRef = useRef()
const[loading,setLoading] = useState(false)

//getting image urls
const setImage = (e, imageFolder, setUrl) => {
  const image = e.target.files[0];
  const storageImageRef = ref(storage, `${imageFolder}/${image?.name + v4()}`);
  if(image === null || image === undefined || image === '') {
    console.log("No file selected");
    setImgError(true)
    return
  }
  uploadBytes(storageImageRef, image).then(() => {
    setImgError(false)
    getDownloadURL(storageImageRef)
      .then((url) => {
        setUrl(url);
        console.log({ profile: url });
      })
      .catch((error) => {
        console.log({ error });
      })
  });
}

//adding data to firebase

const touristHandler = async (e) => {
  // validatePassword()
  e.preventDefault();
  setError("");
  try{
    if(password === confirmPassword) {
      if(contactNumber.length===10){
        if(!imgError){
          setLoading(true)
      signUp(email, password)
        .then((data) => {
          const addDetails = doc(db, "Tourist", data.user.uid);    
          const details = {
              firstName:fName,
              lastName:lName,
              contactNumber: contactNumber,
              passportNumber:passportNumber,
              image: profileURL,
              passPortImage: passportUrl,
              email: email,
              publishedDate:addDate,
              status:status
          };
          setDoc(addDetails, details);
          setFName('')
          setLName('')
          setContactNumber('')
          setPassportNumber('')
          setProfileURL('')
          setPassportUrl('')
          setEmail('')
          setPassword('')
          setConfirmPassword('');
          profileRef.current.value = "";
          passportRef.current.value = "";
          toast.success('Tourist added successfully!')
          setTouristModal(false)
          setLoading(false)
        })
      }else{
        setError('*Select a valid image')
      }
      }else{
        setError('*Contact Number must be 10 characters')
      }
      }else{
        setError('Passwords Do Not Match!')
      }
    }catch(error){
      error.code === 'auth/email-already-in-use' && toast.error('*Email Already Taken. Please Try Another!')
    }
}

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.25}
      overlayBlur={0.5}
      size = '60%'
      opened = {touristModal}
      onClose = {()=>setTouristModal(false)}
    >

    <div className = 'addUserForm'>
                
        <h3>Register Tourist</h3>

        <p style={{ color: error && 'red', fontWeight:'bold'}}>{error}</p>
    
        <div>
                <input 
                    type="text" 
                    className='userInput' 
                    onChange = {(e)=> setFName(e.target.value)}
                    placeholder='First Name'
                    value = {fName}
                />
                <input 
                    type="text" 
                    className='userInput' 
                    onChange = {(e)=> setLName(e.target.value)}
                    placeholder='Last Name'
                    value = {lName}
                />
        </div>

        <div>
                <input 
                    type="number" 
                    className='userInput' 
                    onChange = {(e)=> setContactNumber(e.target.value)}
                    placeholder='Contact Number'
                    value = {contactNumber}
                />
            
                <input 
                    type="text" 
                    className='userInput' 
                    onChange = {(e)=>setPassportNumber(e.target.value)}
                    placeholder= 'Passport Number'
                    value = {passportNumber}
                />
        </div>

        <div>
            <input 
                type="text" 
                className='userInput' 
                onChange = {(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
                value = {email}
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

                <input 
                    type="password" 
                    className='userInput' 
                    onChange = {(e)=> setConfirmPassword(e.target.value)}
                    placeholder='Confirm Password'
                    value = {confirmPassword}
                    required
                />
            </div>

        <div className='userAuthImageContainer'>
          <div className="authProfile">
                    Profile Image
                    {profileURL &&
                    <img src={profileURL} width={70} height={70} alt="profile" />}
                    <input 
                        type="file" 
                        name = 'profileImg' 
                        onChange = {(e) => setImage(e, 'TouristProfile', setProfileURL)}
                        required
                        ref={profileRef}
                    />

                </div>
            
                <div className="authProfile">
                  <label>Passport Image</label>
                  {passportUrl &&
                  <img src={passportUrl} width={70} height={70} alt="profile" />}
                    <input 
                        type="file" 
                        name = 'coverImg' 
                        onChange = {(e) => setImage(e, 'TouristPassport', setPassportUrl)}
                        required
                        ref={passportRef}
                    />
                </div>
        </div>
        {loading ?
          <button type = 'submit' className="buttonLogin">
            <img className='loadingIcon' src={loadingGif} />
        </button>
        :<button className="button" onClick={touristHandler}>Add Tourist </button>}
    </div>
    </Modal>
  );
}

export default TouristRegisterModal