import Layout from "../Components/layouts/Layout";
import SlideshowContainer from "../Components/slideshowContainer/SlideshowContainer";
import {useUserAuth} from '../Context/Context'

function Homepage(){
    const {user} = useUserAuth();
    console.log(user);
    return(<Layout>
             <SlideshowContainer />  
         </Layout>
    )
    
   
}

export default Homepage;