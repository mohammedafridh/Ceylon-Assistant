import React from "react";
import classes from "./TopGuides.css";
import { useUser } from "../../../Context/UserContext";
import { useEffect } from "react";
import { useState } from "react";

function TopGuides() {
  const { guides } = useUser();
  const [topGuides, setTopGuides] = useState([]);

  const sumOfRating = (ratings) => {
    // no ratings return
    if (!ratings || ratings.length === 0) return 'No Ratings Yet';

    let sum = 0
    ratings.forEach(item => {
      sum += item.rating
    })
    const value = sum/ratings.length
    return value.toFixed(1);
  }

  useEffect(() => {
    //iterate through guides and find the top guides
    guides.forEach((guide) => {
      if(sumOfRating(guide.ratings) >= 4){
        console.log('here')
        setTopGuides((prev) => [...prev, guide]);
      } 
    });
  
  }, [guides]);

  return (
    <div className="topGuidesContainer">
      <div className="title">
        <center>
          <h4>Our Top Guides</h4>
        </center>
      </div>
      <div className="feature">
    {topGuides?.slice(0, 3).map((guide) => {
        return (         
            <div className="featuredItems">
              <img
                src={guide.image ? guide.image : "https://i.pinimg.com/736x/ca/52/e6/ca52e6e168595f767c2121a68cc227b0.jpg"}
                alt="abc"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>{guide.firstName} {guide.lastName}</h2>
                <h5>{sumOfRating(guide.ratings)}</h5>
              </div>
            </div>
          
        );
      }) 
    }
    </div>
    </div>
  );
}

export default TopGuides;