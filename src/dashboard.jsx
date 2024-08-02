import React from 'react'
import './dashboard.css'
import { FaEnvelope, FaUser, FaHome, FaCog, FaBars, FaFileAlt ,FaSearch} from 'react-icons/fa'


const Dashboard = () => {
  return (
    <div className='dashboard-screen'>
      <div className='app-bar'>
        <h4>Dashboard</h4>
        <div className='app-icons'>
          <FaEnvelope className='icon' />
          <FaUser className='icon' />
        </div>
      </div>
      <div className='main-content'>
        <div className='side-menu'>
          <img src='https://cdn-icons-png.freepik.com/512/7835/7835563.png' alt='logo' className='logo' />
          <h4 className='name'>StoreZan</h4>

          <div className='list'>
            <ul>
              <li><FaHome className='menu-icon' /> Dashboard</li>
              <li><FaBars className='menu-icon' /> Transactions</li>
              <li><FaFileAlt className='menu-icon' /> Documents</li>
              <li><FaCog className='menu-icon' /> Settings</li>
              <li>Report</li>
              <li>SignOut</li>
            </ul>
          </div>
        </div>
        <div className='cards'>
          <div className='card card1'>Current Orders</div>
          <div className='card card2'>Total Orders</div>
          <div className='card card3'>Processed Orders</div>
          <div className='card card4'>In Process Transactions <br />0</div>
        </div>
        <div className='table-container'>
          <div className='recent'>Recently Added Products
           
           
            <input type='text' placeholder='Search' className='search'></input>
            <FaSearch className='search-icon'/>          
          </div>
          <div className='table'>
            
            <table>
<thead>

                <tr>
              <th>#</th>
              <th className='pic'>Picture</th>
              <th className='sku'>Sku</th>
              <th className='pname'>Name</th>
              <th>Product Link </th></tr>
              </thead><tbody>
                <tr>
                  <td>1</td>
                  <td className='pic'><img src="" alt="product1" className="product-image" /></td>
                  <td>12345</td>
                  <td>Product Name 1</td>
                  <td><button >View</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className='pic'><img src="" alt="product1" className="product-image" /></td>
                  <td>12345</td>
                  <td>Product Name 2</td>
                  <td><button >View</button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className='pic'><img src="" alt="product1" className="product-image" /></td>
                  <td>12345</td>
                  <td>Product Name 3</td>
                  <td><button >View</button></td>
                </tr>
                
                <tr>
                  <td>5</td>
                  <td className='pic'><img src="" alt="product1" className="product-image" /></td>
                  <td>12345</td>
                  <td>Product Name 5</td>
                  <td><button >View</button></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td className='pic'><img src="" alt="product1" className="product-image" /></td>
                  <td>12345</td>
                  <td>Product Name 6</td>
                  <td><button >View</button></td>
                </tr>
                </tbody>
                
                
                </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
