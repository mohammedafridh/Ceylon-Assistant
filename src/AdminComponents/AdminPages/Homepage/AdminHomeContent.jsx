import React from 'react'
import Charts from './Charts/Charts'
import FeaturedInfo from './FeaturedInfo/FeaturedInfo'
import './AdminHomeContent.css'
import WidgetSm from './Widgets/WidgetSm'
import WidgetLg from './Widgets/WidgetLg'

const AdminHomeContent = () => {
  return (
    <div className="adminHomeContent">
      <FeaturedInfo />
      <Charts />
      <WidgetLg />
    </div>
  )
}

export default AdminHomeContent