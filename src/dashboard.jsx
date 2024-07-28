import React from 'react'
import './dashboard.css'
import {FaEnvelope, FaUser,FaHome,FaCog ,FaBars, FaFileAlt} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className='dashboard-screen'>
        <div className='app-bar'>
            <h4>Dashboard</h4>
            <div className='app-icons'>
                <FaEnvelope className='icon'/>
                <FaUser className='icon'/>

            
                
            </div>
        </div>
        <div className='main-content'>
        <div className='side-menu'>
            <img src='https://cdn-icons-png.freepik.com/512/7835/7835563.png' alt='logo' className='logo'></img>
            <h4 className='name'>StoreZan</h4>

            <div className='list'>
            <ul>
                <li><FaHome className='menu-icon'/> Dashboard</li>
                <li><FaBars className='menu-icon'/> Transactions</li>
                <li><FaFileAlt className='menu-icon'/> Documents</li>
                <li><FaCog className='menu-icon'/> Settings</li>
                <li>Report</li>
                <li>SignOut</li>
            </ul></div>

</div>
        </div>
        
    </div>
  )
}

export default Dashboard