import React from 'react'
import classes from './AddGallery.module.css'

function AddGallery() {
  return (
    <div className = {classes.addGallery}>
        <h2>Add Trip</h2>
        <div className = {classes.tripDetails}>
            <div className = {classes.details}>
                <span>Destination District</span>
                <input type = "text" />
            </div>
            <div className = {classes.details}>
                <span>Destination Name</span>
                <input type = "text" />
            </div>
            <div className = {classes.subDetails}>
                <span>Travel Images</span>
                <div className = {classes.imageContainer}>
                    <label>Image 1</label>
                    <input type = "file" />
                </div>

                <div className = {classes.imageContainer}>
                    <label>Image 2</label>
                    <input type = "file" />
                </div>

                <div className = {classes.imageContainer}>
                    <label>Image 3</label>
                    <input type = "file" />
                </div>

                <div className = {classes.imageContainer}>
                    <label>Image 4</label>
                    <input type = "file" />
                </div>

                <div className = {classes.imageContainer}>
                    <label>Image 5</label>
                    <input type = "file" />
                </div>
            </div>
            <button>Add To Gallery</button>
        </div>
    </div>
  )
}

export default AddGallery
