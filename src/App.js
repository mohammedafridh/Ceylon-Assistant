import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import TourGuides from './pages/TourGuides';
import Search from './pages/Search';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Login from './pages/LoginAccessories/Login'
import Signup from './pages/LoginAccessories/Signup';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'


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
            <Route path = '/login' element = {<Login />} />
            <Route path = '/signUp' element = {<Signup />}/>
            <Route path = '/home' element = {<ProtectedRoute><Homepage /></ProtectedRoute>} />
            <Route path = '/guides' element = {<ProtectedRoute><TourGuides /></ProtectedRoute>} />
            <Route path = '/search' element = {<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path = '/bookings' element = {<ProtectedRoute><Bookings /></ProtectedRoute>} />
            <Route path = '/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>    
    </div>  
    )
}

export default App;
