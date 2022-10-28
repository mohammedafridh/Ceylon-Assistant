import React from 'react'
import classes from './TopGuides.css'

function TopGuides() {
  return (<div className= 'topGuidesContainer'>
    <div className = 'title'>
        <center><h4>Our Top Guides</h4></center>
    </div>
    <div className = 'feature'>
        <div className = 'featuredItems'>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5" 
            alt = 'abc' className = 'featuredImg'/>   
            <div className = 'featuredTitles'>
                <h2>Suresh</h2>
                <h5>Ranking</h5>
            </div>
        </div>
        <div className = 'featuredItems'>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2F1.jpgfc743bca-1ffd-4244-8f17-0680537b40f0?alt=media&token=5110128a-e6f0-45db-a051-1708950a6484"
            alt = 'abc' className = 'featuredImg'/>   
            <div className = 'featuredTitles'>
                <h2>Razni</h2>
                <h5>Ranking</h5>
            </div>
        </div>
        <div className = 'featuredItems'>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2F2.jpg4d910a23-cf73-41da-b1c2-55a78b894f33?alt=media&token=ed321e9c-9af3-4931-b2eb-547783722cb6"
            alt = 'abc' className = 'featuredImg'/>   
            <div className = 'featuredTitles'>
                <h2>Afridh</h2>
                <h5>Ranking</h5>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TopGuides;
