import HomepageBg from "../backgrounds/HomepageBg";
import Layout from "../Components/layouts/Layout";
// import SlideshowContainer from "../Components/slideshowContainer/SlideshowContainer";
import * as Icons from 'react-icons/fa'
import classes from './Homepage.module.css'
import {Link} from 'react-router-dom'
import {useUserAuth} from '../Context/Context'

function Homepage(){
    const {user} = useUserAuth();
    console.log(user);
    return(<Layout>
             <HomepageBg />  
             
                <center>
                <button className = {classes.explore}><Link to = '/guides'>
                    Explore more <Icons.FaArrowRight className = {classes.icon}/></Link></button>
                </center>
             
         </Layout>
    )
    
   
}

export default Homepage;