import React, {useState,useRef} from 'react'
import './AddGallery.css'
import {collection, addDoc,doc,setDoc} from 'firebase/firestore'
import {db,storage} from '../../../Firebase'
import { Select } from '@mantine/core';
import { ClassNames } from '@emotion/react';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { useUserAuth } from '../../../Context/Context';
import { toast } from 'react-hot-toast';

const AddGallery = () => {

  const [destination,setDestination] = useState('')
  const [mainImage,setMainImage] = useState('')
  const [image1,setImage1] = useState('')
  const [image2,setImage2] = useState('')
  const [image3,setImage3] = useState('')
  const [image4,setImage4] = useState('')
  const [imgError,setImgError] = useState('')
  const [error,setError] = useState('')
  const [status,setStatus] = useState('Active')
  const {user} = useUserAuth()
  const mainImageRef = useRef()
  const image1Ref = useRef()
  const image2Ref = useRef()
  const image3Ref = useRef()
  const image4Ref = useRef()

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

  const setImage = (e, imageFolder, setUrl) => {
    const image = e.target.files[0];
    const storageImageRef = ref(storage, `${imageFolder}/${image?.name + v4()}`);
    if(image === null || image === undefined || image === '') {
      console.log("No file selected");
      setImgError(true)
      toast.error('No Valid Image Selected')
      return
    }
    uploadBytes(storageImageRef, image).then(() => {
      console.log('valid file selected')
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

  const tourHandler = async(e)=>{
    e.preventDefault()
    try{
      const addTour = collection(db, "toursGallery")
      await addDoc(addTour,{guideId:user.uid, destination:destination, district: district,
      mainImage:mainImage, image1:image1, image2:image2, image3:image3, image4:image4, status:status})
        .then(()=>{
          setDestination('')
          setDistrict('')
          setMainImage('')
          setImage1('')
          setImage2('')
          setImage3('')
          setImage4('')
          mainImageRef.current.value = "";
          image1Ref.current.value = "";
          image2Ref.current.value = "";
          image3Ref.current.value = "";
          image4Ref.current.value = "";
          setError(false)
          toast.success('Tour Added Successfully!')
        })
    }catch(err){
      setError(true)
      toast.error('Sorry Something Went Wrong. Please Try Again!')
    }

  }

  return (
    <div className="addGallery">
      <hr></hr>
      <div className='galleryText'>
        <h3>Hi Guides!</h3>
        <h5>Lets share your tour experience with all of our Tourists</h5>
        <p><b>Add your tour experience to <u>Tours Gallery</u> by providing the 
          Destination, District and with exactly 05 images.</b></p>
      </div>

        <form className = 'addToGalleryForm' onSubmit={tourHandler}>      
            <h3>Add Tours</h3>
            <div className='detaleContainer'>

              <input 
                  type="text" 
                  className='addDetailInput' 
                  onChange = {(e)=> setDestination(e.target.value)}
                  placeholder='Destination'
                  value = {destination}
                  required
              />

              <Select 
                  style = {{width:"17rem", outline:"none", border:'none'}} 
                  data = {districtData} 
                  placeholder = 'Select District' 
                  onChange={districtHandler}
                  className = 'typeDrop'
                  value = {district}
                  required
              />
            </div>

            <div className="allImageContainer">
                <div className="imageProfile">
                  <span>Main Image</span>
                  {mainImage &&
                  <img src={mainImage} width={50} height={50} alt="profile" />}
                    <input 
                        type="file" 
                        name = 'coverImg' 
                        onChange = {(e) => setImage(e, 'toursGallery', setMainImage)}
                        required
                        ref={mainImageRef}
                    />
                </div>

            <div className= 'splitImageContainer'>
                <div className="imageProfile">
                    <span>Image 1</span>
                    {image1 &&
                    <img src={image1} width={50} height={50} alt="profile" />}
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e) => setImage(e, 'toursGallery', setImage1)}
                          required
                          ref={image1Ref}
                      />
                </div>

                <div className="imageProfile">
                    <span>Image 2</span>
                    {image2 &&
                    <img src={image2} width={50} height={50} alt="profile" />}
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e) => setImage(e, 'toursGallery', setImage2)}
                          required
                          ref={image2Ref}
                      />
                </div>
            </div>
            
            <div className= 'splitImageContainer'>
            <div className="imageProfile">
                    <span>Image 3</span>
                    {image3 &&
                    <img src={image3} width={50} height={50} alt="profile" />}
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e) => setImage(e, 'toursGallery', setImage3)}
                          required
                          ref={image3Ref}
                      />
                </div>

                <div className="imageProfile">
                    <span>Image 4</span>
                    {image4 &&
                    <img src={image4} width={50} height={50} alt="profile" />}
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e) => setImage(e, 'toursGallery', setImage4)}
                          required
                          ref={image4Ref}
                      />
                </div>
            </div>
                
            </div>

          <div className='addGalleryAction'>
              <button type = 'submit' className='addGalleryBtn'> Add Tour</button>
          </div>   
        </form>
      </div>
  )
}

export default AddGallery