import React from 'react'
import classes from './TopGuides.css'

function TopGuides() {
  return (<div className= 'topGuidesContainer'>
    <div className = 'title'>
        <center><h4>Our Top Guides</h4></center>
    </div>
    <div className = 'feature'>
        <div className = 'featuredItems'>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" 
            alt = 'abc' className = 'featuredImg'/>   
            <div className = 'featuredTitles'>
                <h2>Suresh</h2>
                <h5>Ranking</h5>
            </div>
        </div>
        <div className = 'featuredItems'>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
            alt = 'abc' className = 'featuredImg'/>   
            <div className = 'featuredTitles'>
                <h2>Razni</h2>
                <h5>Ranking</h5>
            </div>
        </div>
        <div className = 'featuredItems'>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU"
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
