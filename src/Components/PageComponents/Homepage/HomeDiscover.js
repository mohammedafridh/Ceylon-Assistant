import React, {useState} from 'react'
import classes from './HomeDiscover.module.css'
import {Gallery} from '../Tours gallery/Gallery'

const HomeDiscover = () => {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className={classes.text}>
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className={classes.readHide}>
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };

  return (
    <div className = {classes.homeDiscover}>
        <div className={classes.title}>
            <h2>Discover Sri Lanka</h2>
            <hr/>
        </div>

        <div className={classes.imageGallery}>
            <div className={classes.gallery}>
                {Gallery.map((gallery, id)=>(
                    <div className={classes.images} key = {id}>
                        <img src = {gallery.mainImage} alt = '' />
                        <div className={classes.imageDetails}>
                            <h4>Sigiriya</h4>
                            <ReadMore className = {classes.readMore}>
                                GeeksforGeeks: A Computer Science portal for geeks. 
                                It contains well written, well thought and well explained
                                computer science, programming articles and quizzes. 
                                It provides a variety of services for you to learn, so thrive
                                and also have fun! Free Tutorials, Millions of Articles, Live, 
                                Online and Classroom Courses ,Frequent Coding Competitions,
                                Webinars by Industry Experts, Internship opportunities, and Job
                                Opportunities. Knowledge is power!
                            </ReadMore>
                        </div>    
                    </div>
                    
                ))}                
                </div>
            </div>
        </div>
  )
}

export default HomeDiscover