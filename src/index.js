import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from './Context/Context';
// import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
    <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>
    </React.StrictMode> 
  </UserAuthContextProvider>
     
);


