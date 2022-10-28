import { Visibility } from '@mui/icons-material'
import React from 'react'
import './WidgetSm.css'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                 alt = '' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Afridh</span>
                    <span className="widgetSmUserEmail">afridh7788@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                 alt = '' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Afridh</span>
                    <span className="widgetSmUserEmail">afridh7788@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                 alt = '' />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Afridh</span>
                    <span className="widgetSmUserEmail">afridh7788@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm