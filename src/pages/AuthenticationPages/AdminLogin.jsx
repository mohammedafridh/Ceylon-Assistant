import React from 'react'
import './AdminLogin.css'

const AdminLogin = () => {
  return (
    <div className="adminLogin">
        <div className="loginSection">
            <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logos%2FWhatsApp%20Image%202022-12-28%20at%2010.52.01%20AM.jpeg?alt=media&token=6809fdab-7ee5-4906-9b12-f69d21f8f732'/>
        </div>
            <form className='adminLoginForm'>
                <h1>Ceylon Assistant Admin</h1>
                <div className='loginCredentials'>
                    <input type = 'text' placeholder = 'Email Address'></input>
                    <input type = 'password' placeholder = 'Password'></input>
                </div>
                <button className='logBtn'>Log In</button>
            </form>     
    </div>

  )
}

export default AdminLogin