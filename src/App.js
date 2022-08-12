import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import TourGuides from './pages/TourGuides';
import Search from './pages/Search';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Login from './pages/LoginAccessories/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import TourGuideReg from './pages/LoginAccessories/TourGuideReg';
import TouristReg from './pages/LoginAccessories/TouristReg';
import Inbox from './pages/Inbox';
import SetBooking from './PopupPages/SetBooking';

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

    return(<div>
        <Routes>
            <Route path = '/' element = {<Login />} />
            <Route path = '/inbox' element = {<Inbox />} />
            <Route path = '/tourGuideReg' element = {<TourGuideReg />}/>
            <Route path = '/touristReg' element = {<TouristReg />}/>
            <Route path = '/home' element = {<ProtectedRoute><Homepage /></ProtectedRoute>} />
            <Route path = '/guides' element = {<ProtectedRoute><TourGuides /></ProtectedRoute>} />
            <Route path = '/search' element = {<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path = '/bookings' element = {<ProtectedRoute><Bookings /></ProtectedRoute>} />
            <Route path = '/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path = '/setBookings' element = {<ProtectedRoute><SetBooking /></ProtectedRoute>} />
        </Routes>    
    </div>  
    )
}

export default App;
