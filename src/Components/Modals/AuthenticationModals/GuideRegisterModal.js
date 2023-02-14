import { Modal, useMantineTheme,Select,MultiSelect} from '@mantine/core';
import React, {useState, useEffect,useRef} from 'react'
import './TouristRegisteModal.css'
import { useUserAuth } from '../../../Context/Context';
import {db,storage} from '../../../Firebase'
import {doc, addDoc, collection } from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
// import Select from 'react-select'
import { toast } from 'react-hot-toast';
import { useUser } from '../../../Context/UserContext';
import loadingGif from '../../../assets/loading-gif.gif'


function GuideRegisterModal({guideModal,setGuideModal}) {
  const theme = useMantineTheme();

//setting data
const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [nicNumber, setNicNumber] = useState('')
    const [address, setAddress] = useState('')
    const [guideRate, setGuideRate] = useState('')
    const [model, setModel] = useState('')
    const [maxPassengers, setMaxPassengers] = useState('')
    const [perKm, setPerKm] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [profileImage, setProfileImage] = useState('')
    const [nicImage, setNicImage] = useState('')
    const [status, setStatus] = useState('Active')
    const[profileUrl,setProfileUrl] = useState('')
    const [error, setError] = useState('')
    const[imgError,setImgError] = useState(false)
    const[url,setUrl] = useState(null)
    const[nicUrl,setNicUrl] = useState('')
    const {signUp} = useUserAuth();
    const[languages,setLanguages] = useState()
    const current = new Date();
    const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const {guides} = useUser()
    const profileRef = useRef()
    const nicRef = useRef()
    const[loading,setLoading] = useState(false)

    //language dropdown data
    // const language = [
    //     { value: 'Sinhala', label: 'Sinhala' },
    //     { value: 'English', label: 'English' },
    //     { value: 'Hindi', label: 'Hindi' },
    //     { value: 'Malayalam', label: 'Malayalam' },
    //     { value: 'Urdu', label: 'Urdu' },
    //     { value: 'French', label: 'French' },
    //     { value: 'Arabic', label: 'Arabic' },
    //     { value: 'Spanish', label: 'Spanish' },
    //     { value: 'Russian', label: 'Russian' },
    //     { value: 'Chinese', label: 'Chinese' },
    //     { value: 'Japanese', label: 'Japanese' },
    //     { value: 'Italian', label: 'Italian' },
    //     { value: 'Korean', label: 'Korean' },
    //   ];

    // const[languages,setLanguages] = useState()
    // const languageHandler = (e)=>{
    //     setLanguages(Array.isArray(e)?e.map(x=>x.label):[]);
    // }

    const languageData = [
      "Sinhala",
      "English",
      "Hindi",
      "Malayalam",
      "Urdu",
      "French",
      "Arabic",
      "Spanish",
      "Russian",
      "Chinese",
      "Japanese",
      "Italian",
      "Korean",
    ];

    //guide dropdown data
      const typeData = [
        {value:'National', label: 'National'},
        {value:'Site', label: 'Site'}
      ]
  
      const[type,setType] = useState()
      const typeHandler = (e)=>{
        setType(e)
      }

      //district dropdown data

      const districtData=[
        { value: 'Hambanthota', label: 'Hambanthota' },
        { value: 'Matara', label: 'Matara' },
        { value: 'Galle', label: 'Galle' },
        { value: 'Badulla', label: 'Badulla' },
        { value: 'Monaragala', label: 'Monaragala' },
        { value: 'Trincomalee', label: 'Trincomalee' },
        { value: 'Batticaloa', label: 'Batticaloa' },
        { value: 'Ampara', label: 'Ampara' },
        { value: 'Kegalle', label: 'Kegalle' },
        { value: 'Rathnapura', label: 'Rathnapura' },
        { value: 'Matale', label: 'Matale' },
        { value: 'Kandy', label: 'Kandy' },
        { value: 'Nuwara-Eliya', label: 'Nuwara Eliya' },
        { value: 'Anuradhapura', label: 'Anuradhapura' },
        { value: 'Polonnaruwa', label: 'Polonnaruwa' },
        { value: 'Gampaha', label: 'Gampaha' },
        { value: 'Colombo', label: 'Colombo' },
        { value: 'Kalutara', label: 'Kalutara' },
        { value: 'Puttalam', label: 'Puttalam' },
        { value: 'Kurunegala', label: 'Kurunegala' },
        { value: 'Jaffna', label: 'Jaffna' },
        { value: 'Kilinochchi', label: 'Kilinochchi' },
        { value: 'Mannar', label: 'Mannar' },
        { value: 'Mullativu', label: 'Mullativu' },
        { value: 'Vavuniya', label: 'Vavuniya' },
    ]

    const[district,setDistrict] = useState()
      const districtHandler = (e)=>{
        setDistrict(e)
      }

    //car dropdown data

    const carType=[
      { value: 'Car', label: 'Car' },
      { value: 'Van', label: 'Van' },
      { value: 'Mini-Jeep', label: 'Mini Jeep' },
    ]

    const[vehicleType,setVehicleType] = useState()
      const vehicleHandler = (e)=>{
        setVehicleType(e)
      }

  
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

const guideHandler = async(e)=>{
  e.preventDefault()
  setError('')
    if(password===confirmPassword){
      if(contactNumber.length === 10){
        if(!imgError){
          setLoading(true)
    const addDetails = collection(db, 'guideRequests')
    await addDoc(addDetails,{
      firstName:fName,
      password:password,
      lastName:lName,
      contactNumber:contactNumber,
      nicNumber:nicNumber,
      address: address,
      district: district,
      guideType :type,
      languages: languages,
      guideRate: guideRate,
      vehicleType:vehicleType,
      model:model,
      maxPassengers:maxPassengers,
      perKmRate: perKm,
      image: profileUrl,
      nicImage: nicUrl,
      email: email,
      registeredDate:addDate,
      status: 'Active'
    })
    .then(()=>{
      setLoading(false)
      setGuideModal(false)
      toast.success('Your Register Request is been noted. We kindly request your Patience!')
      setFName('')
      setLName('')
      setContactNumber('')
      setNicNumber('')
      setAddress('')
      setGuideRate('')
      setModel('')
      setMaxPassengers('')
      setDistrict([])
      setLanguages([])
      setType([])
      setVehicleType([])
      setNicUrl('')
      setProfileUrl('')
      setPerKm('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      profileRef.current.value = "";
      nicRef.current.value = "";
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
  }

  // const validatePassword = ()=>{
  // password === confirmPassword ? setPasswordMatch(true) : setPasswordMatch(false);
  // };

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.25}
      overlayBlur={0.5}
      size = '70%'
      opened = {guideModal}
      onClose = {()=>setGuideModal(false)}
    >

<form className = 'addUserForm' onSubmit = {guideHandler}>
                
                <h3>Register Guide</h3>

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
                            onChange = {(e)=>setNicNumber(e.target.value)}
                            placeholder='NIC Number'
                            value = {nicNumber}
                        />
                </div>
    
                <div>
                    <input 
                        type="text" 
                        className='userInput' 
                        onChange = {(e)=> setAddress(e.target.value)}
                        placeholder='Address'
                        value = {address}
                    /> 
    
                    <Select 
                      data = {districtData} 
                      placeholder = 'Select District' 
                      onChange={districtHandler}
                      className = 'typeDrop'
                      value = {district}
                      required
                    />
                </div>
    
                <div>
                  <MultiSelect 
                    data={languageData}
                    placeholder = 'Select Languages'
                    onChange={setLanguages}
                    value = {languages}
                    className = 'langDrop'
                    required
                  />

                  <Select 
                      data = {typeData} 
                      placeholder = 'Guide Type' 
                      onChange={typeHandler}
                      className = 'guideDrop'
                      value = {type}
                      required
                    />
    
                    <input 
                        type="number" 
                        className='userInput' 
                        onChange = {(e)=> setGuideRate(e.target.value)} 
                        placeholder='Guide Rate Per Day'
                        value = {guideRate}
                    />
                </div>
    
                {/* <div>
                    <Select 
                      data = {typeData} 
                      placeholder = 'Guide Type' 
                      onChange={typeHandler}
                      className = 'guideDrop'
                      value = {type}
                      required
                    />
    
                    <input 
                        type="number" 
                        className='userInput' 
                        onChange = {(e)=> setGuideRate(e.target.value)} 
                        placeholder='Guide Rate Per Day'
                        value = {guideRate}
                    />
                </div> */}
    
                <div>
                    <Select 
                      data = {carType} 
                      placeholder = 'Vehicle Type' 
                      onChange={vehicleHandler}
                      className = 'typeDrop'
                      value = {vehicleType}
                      required
                    />
    
                    <input 
                        type="text" 
                        className='userInput' 
                        onChange = {(e)=> setModel(e.target.value)} 
                        placeholder='Vehicle Model'
                        value = {model}
                    />
    
                    <input 
                        type="number" 
                        className='userInput' 
                        onChange = {(e)=> setMaxPassengers(e.target.value)} 
                        placeholder='Maximum Passengers'
                        value = {maxPassengers}
                    />
    
                    <div className = 'perKm'>
                        <input 
                            type="number" 
                            className='userInput' 
                            onChange = {(e)=> setPerKm(e.target.value)} 
                            placeholder='Per Km Rate'
                            value = {perKm}
                        />
                        <span>*Rate for own vehicle charges</span>
                    </div>
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
                    />
    
                    <input 
                        type="password" 
                        className='infoInput' 
                        onChange = {(e)=> setConfirmPassword(e.target.value)}
                        placeholder='Confirm Password'
                        value = {confirmPassword}
                    />
                </div>
    
              <div className='userAuthImageContainer'>
                <div className="authProfile">
                    Profile Image
                    {profileUrl &&
                    <img src={profileUrl} width={70} height={70} alt="profile" />}
                    <input 
                        type="file" 
                        name = 'profileImg' 
                        onChange = {(e) => setImage(e, 'GuideProfile', setProfileUrl)}
                        required
                        ref={profileRef}
                    />

                </div>
            
                <div className="authProfile">
                  <label>Passport Image</label>
                  {nicUrl &&
                  <img src={nicUrl} width={70} height={70} alt="profile" />}
                    <input 
                        type="file" 
                        name = 'coverImg' 
                        onChange = {(e) => setImage(e, 'GuideNic', setNicUrl)}
                        required
                        ref={nicRef}
                    />
                </div>
    
                </div>
                {loading?
                    <button type = 'submit' className="buttonLogin">
                      <img className='loadingIcon' src={loadingGif} />
                  </button>:
                <button type = 'submit' className="button infoButton">Add Guide</button>}
            </form>
    </Modal>
  );
}

export default GuideRegisterModal