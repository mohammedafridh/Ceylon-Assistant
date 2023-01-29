import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/CommonPages/Homepage/Homepage';
import TourGuides from './pages/CommonPages/TourGuidesPage/TourGuides';
import Tours from './pages/CommonPages/ToursPage/Tours';
import Bookings from './pages/CommonPages/BookingPage/Bookings';
import Profile from './pages/CommonPages/ProfilePage/Profile';
import Login from './pages/AuthenticationPages/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import TourGuideReg from './pages/AuthenticationPages/TourGuideReg';
import TouristReg from './pages/AuthenticationPages/TouristReg';
import ThingsToDo from './pages/CommonPages/ThingsToDo/ThingsToDo';
import About from './pages/CommonPages/About/About';
import ToursGallery from './pages/CommonPages/ToursGallery/ToursGallery';
import AddThingsToDo from './Components/PageComponents/ThingsToDoComponents/AddThingsToDo';
import AdminLogin from './pages/AuthenticationPages/AdminLogin';
import { UserProvider } from './Context/UserContext';
import { Toaster } from 'react-hot-toast';

function App() {

//     var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );

    return(<div className = 'app'>
        <Toaster />
        <UserProvider>
        <Routes>
            <Route path = '/login' element = {<Login />} />
            <Route path = '/tourGuideReg' element = {<TourGuideReg />}/>
            <Route path = '/touristReg' element = {<TouristReg />}/>
            <Route path = '/' element = {<Homepage />} />
            <Route path = '/tourGuides' element = {<TourGuides />} />
            <Route path = '/tours' element = {<Tours />} />
            <Route path = '/bookings' element = {<Bookings /> }/>
            <Route path = '/profile' element = {<Profile />} />
            <Route path = '/thingsToDo' element = {<ThingsToDo />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/toursGallery' element = {<ToursGallery />} />
            <Route path = '/addThingsToDo' element = {<AddThingsToDo />} />
            <Route path = '/admin' element = {<AdminLogin />} />
        </Routes>    
        </UserProvider>
    </div>  
    )
}

export default App;
