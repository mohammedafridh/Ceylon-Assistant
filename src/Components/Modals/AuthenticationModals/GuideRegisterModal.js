import { Modal, useMantineTheme} from '@mantine/core';
import React, {useState, useEffect} from 'react'
import './TouristRegisteModal.css'
import { useUserAuth } from '../../../Context/Context';
import {db,storage} from '../../../Firebase'
import {doc, addDoc, collection } from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import Select from 'react-select'


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
    const [error, setError] = useState('')
    const[url,setUrl] = useState(null)
    const[nicUrl,setNicUrl] = useState(null)
    const {signUp} = useUserAuth();
    const current = new Date();
    const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    //language dropdown data
    const language = [
        { value: 'Sinhala', label: 'Sinhala' },
        { value: 'English', label: 'English' },
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'Urdu', label: 'Urdu' },
        { value: 'French', label: 'French' },
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Korean', label: 'Korean' },
      ];

    const[languages,setLanguages] = useState()
    const languageHandler = (e)=>{
        setLanguages(Array.isArray(e)?e.map(x=>x.label):[]);
    }

    //guide dropdown data
      const typeData = [
        {value:'National', label: 'National'},
        {value:'Site', label: 'Site'}
      ]
  
      const[type,setType] = useState(typeData.label)
      const typeHandler = (e)=>{
        setType(e.label)
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

    const[district,setDistrict] = useState(typeData.label)
      const districtHandler = (e)=>{
        setDistrict(e.label)
      }

    //car dropdown data

    const carType=[
      { value: 'Car', label: 'Car' },
      { value: 'Van', label: 'Van' },
      { value: 'Mini-Jeep', label: 'Mini Jeep' },
    ]

    const[vehicleType,setVehicleType] = useState(typeData.label)
      const vehicleHandler = (e)=>{
        setVehicleType(e.label)
      }

  
//getting image urls

useEffect(() => {
    const getImageUrl = async () => {
        const guideProfileRef = ref(storage, `GuideProfile/${profileImage.name + v4()}`);
        uploadBytes(guideProfileRef, profileImage)
          .then(() => {
            getDownloadURL(guideProfileRef)
              .then((url) => {
                console.log({ url });
                setUrl(url);
              })
              .catch((err) => {
                setError(err.message, "error getting the image");
              });
          })
          .catch((err) => {
            setError(err);
          });
      };
    const imageUrl = async () => {
      await getImageUrl();
    };
    const getNicImageUrl = async () => {
        const guideNicRef = ref(storage, `GuideNic/${nicImage.name + v4()}`);
        uploadBytes(guideNicRef, nicImage)
          .then(() => {
            getDownloadURL(guideNicRef)
              .then((url) => {
                console.log({ url });
                setNicUrl(url);
              })
              .catch((err) => {
                setError(err.message, "error getting the image");
              });
          })
          .catch((err) => {
            setError(err);
          });
      };
    const nicImageUrl = async () => {
      await getNicImageUrl();
    };
    imageUrl();
    nicImageUrl();
  }, [profileImage, nicImage]);
    

//adding data to firebase

const guideHandler = async(e)=>{
  e.preventDefault()
  validatePassword()
  try{
    if(passwordMatch===false){
      return
    }
    const addDetails = collection(db, 'guideRequests')
    await addDoc(addDetails,{
      firstName:fName,
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
      image: url,
      nicImage: nicUrl,
      email: email,
      registeredDate:addDate,
      status: 'Active'
    })
    .then(()=>{
      alert('Your Register Request is been noted. We kindly hope your Patience!')
      setGuideModal(false)
    })

    }catch(err){
      err.message('Cant add Your Request')
    }
  }

  const validatePassword = ()=>{
  password === confirmPassword ? setPasswordMatch(true) : setPasswordMatch(false);
  };

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

                {passwordMatch? '' : <p style = {{color:"red", fontWeight:"bold", fontSize:12}}>* The passwords doesn't Match. Try Again!</p>}
    
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
                      options = {districtData} 
                      placeholder = 'Select District' 
                      onChange={districtHandler}
                      className = 'typeDrop'
                    />
                </div>
    
                <div>
                  <Select isMulti
                    options={language}
                    placeholder = 'Select Languages'
                    onChange={languageHandler}
                    className = 'langDrop'
                  />
                </div>
    
                <div>
                    <Select 
                      options = {typeData} 
                      placeholder = 'Guide Type' 
                      onChange={typeHandler}
                      className = 'guideDrop'
                    />
    
                    <input 
                        type="number" 
                        className='userInput' 
                        onChange = {(e)=> setGuideRate(e.target.value)} 
                        placeholder='Guide Rate Per Day'
                        value = {guideRate}
                    />
                </div>
    
                <div>
                    <Select 
                      options = {carType} 
                      placeholder = 'Vehicle Type' 
                      onChange={vehicleHandler}
                      className = 'typeDrop'
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
                        <input 
                            type="file" 
                            name = 'profileImg' 
                            onChange = {(e) => setProfileImage(e.target.files[0])}
                        />
                    </div>
                
                    <div className="authProfile">
                        NIC Image
                        <input 
                            type="file" 
                            name = 'coverImg' 
                            onChange = {(e)=>setNicImage(e.target.files[0])}
                        />
                    </div>
    
                </div>
                <button type = 'submit' className="button infoButton">Add Guide</button>
            </form>
    </Modal>
  );
}

export default GuideRegisterModal