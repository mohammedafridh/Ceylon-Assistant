import React, {useState} from 'react'
import './AddGallery.css'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../Firebase'
import {Select } from '@mantine/core';
import { ClassNames } from '@emotion/react';

const AddGallery = () => {

  const [destination,setDestination] = useState('')
  const [district,setDistrict] = useState('')
  const [guide,setGuide] = useState('')
  const [mainImage,setMainImage] = useState('')
  const [image1,setImage1] = useState('')
  const [image2,setImage2] = useState('')
  const [image3,setImage3] = useState('')
  const [image4,setImage4] = useState('')
  const [status,setStatus] = useState('active')

  const addTourHandler = async(e)=>{
      e.preventDefault();
  }

  return (
    <div className="addGallery">
        <div className = 'addToGalleryForm'>      
            <h3>Add Tours</h3>
            <div className='detaleContainer'>

              <input 
                  type="text" 
                  className='addDetailInput' 
                  onChange = {(e)=> setDestination(e.target.value)}
                  placeholder='Destination'
                  value = {destination}
              />

            <Select 
                style = {{width:"20rem", outline:"none"}} 
                onChange = {(e)=> setDistrict(e.target.value)} 
                placeholder='District'

                data={[
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
              ]}
            />
            </div>

            <div className="allImageContainer">
                <div className="imageProfile">
                  <span>Main Image</span>
                    <input 
                        type="file" 
                        name = 'coverImg' 
                        onChange = {(e)=>setMainImage(e.target.files[0])}
    
                    />
                </div>

            <div className= 'splitImageContainer'>
                <div className="imageProfile">
                    <span>Image 1</span>
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e)=>setImage1(e.target.files[0])}
                      />
                </div>

                <div className="imageProfile">
                    <span>Image 2</span>
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e)=>setImage2(e.target.files[0])}
                      />
                </div>
            </div>
            
            <div className= 'splitImageContainer'>
            <div className="imageProfile">
                    <span>Image 3</span>
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e)=>setImage3(e.target.files[0])}
                      />
                </div>

                <div className="imageProfile">
                    <span>Image 4</span>
                      <input 
                          type="file" 
                          name = 'coverImg' 
                          onChange = {(e)=>setImage4(e.target.files[0])}
                      />
                </div>
            </div>
                
            </div>

          <div className='addGalleryAction'>
              <button className='addGalleryBtn' onClick = {addTourHandler}> Add Tour</button>
          </div>   
        </div>
      </div>
  )
}

export default AddGallery