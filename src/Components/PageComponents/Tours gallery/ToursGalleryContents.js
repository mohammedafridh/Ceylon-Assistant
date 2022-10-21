import React,{useState} from 'react'
import './ToursGalleryContents.css'
import {Gallery} from './Gallery'
import ViewGalleryModal from '../../Modals/ViewGalleryModal'

const ToursGalleryContents = () => {

    const [modalOpened,setModalOpened] = useState(false)

  return (
    <div className = 'toursGalleryContents'>
        <div className = 'topContainer'>
            <span>Tours Gallery</span>
        </div>

        <div className = 'galleryComponents'>
            <h1>Memories with our Guides</h1>
            <hr/>
        </div>

        <div className = 'mainCategories'>
            <div className = 'categories'>
                <button className= 'categoryBtn'>All</button>
                <button className= 'categoryBtn'>Southern</button>
                <button className= 'categoryBtn'>Uva</button>
                <button className= 'categoryBtn'>Eastern</button>
                <button className= 'categoryBtn'>Sabaragamuwa</button>
                <button className= 'categoryBtn'>Central</button>
                <button className= 'categoryBtn'>North Central</button>
                <button className= 'categoryBtn'>Western</button>
                <button className= 'categoryBtn'>North Western</button>
                <button className= 'categoryBtn'>Northern</button>
            </div>
        </div>

        <div className='imageGallery'>
            <div className='gallery'>
                {Gallery.map((gallery, id)=>(
                    <div className='images' key = {id} onClick = {()=>setModalOpened(true)}>
                        <img src = {gallery.mainImage} alt = '' />
                        <div className='imageDetails'>
                            <span>{gallery.destination}</span>
                            <span>{gallery.province} Province</span>
                            <span>Guide : {gallery.guideName}</span>
                        </div> 
                    <ViewGalleryModal 
                    modalOpened = {modalOpened} 
                    setModalOpened = {setModalOpened}
                    galleryData = {gallery}
                    />     
                    </div>
                    
                ))}                
                </div>
            </div>
        </div>

  )
}

export default ToursGalleryContents