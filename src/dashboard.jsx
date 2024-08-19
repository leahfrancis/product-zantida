import React, { useState } from 'react'
import './dashboard.css'
import { FaEnvelope, FaUser, FaHome, FaCog, FaBars, FaFileAlt ,FaSearch} from 'react-icons/fa'


const Dashboard = () => {
  const [showProductTable,setShowProductTable]=useState(false);
  const [showAddProductForm,setShowAddProductForm]=useState(false);
  const [products,setProducts]=useState([]);
  const [formData, setFormData] = useState({
    shop: '',
    category: '',
    productGroup: '',
    unitPrice: '',
    description: ''
  });
  const handleProductMenuClick=()=>{
setShowProductTable(!showProductTable)
  };
  const handleAddProductClick=()=>{
  setShowAddProductForm(true);
  };
  const handleInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      shop: '',
      category: '',
      productGroup: '',
      unitPrice: '',
      description: ''
    });
    setShowAddProductForm(false);
  };
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
        <div className='Product-menu-container'>
          
            <input type='button' value='Product Menu' className='menu-button' onClick={handleProductMenuClick}></input>
            {showProductTable && (
            <div className='product-table-container'>
              <div className='table-header'>
                <button 
                  className='add-product-button'
                  onClick={handleAddProductClick}
                >
                  Add New Product
                </button>
              </div>
              {showAddProductForm && (
                <form className='add-product-form' onSubmit={handleFormSubmit}>
                  <div className='form-group'>
                    <label>Shop:</label>
                    <input type='text' name='shop' value={formData.shop} onChange={handleInputChange} required></input>
                    </div>
                  <div className='form-group'>
                    <label>Category:</label>
                    <input 
                      type='text' 
                      name='category' 
                      value={formData.category} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className='form-group'>
                    <label>Product Group:</label>
                    <input 
                      type='text' 
                      name='productGroup' 
                      value={formData.productGroup} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className='form-group'>
                    <label>Unit Price:</label>
                    <input 
                      type='number' 
                      name='unitPrice' 
                      value={formData.unitPrice} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className='form-group'>
                    <label>Description:</label>
                    <textarea 
                      name='description' 
                      value={formData.description} 
                      onChange={handleInputChange} 
                      required 
                    ></textarea>
                  </div><br></br>
                  <button type='submit' className='submit-button'>Add Product</button>
                </form>
              )}
                
                <div className='product-display-container'>
                {products.map((product, index) => (
                  <div key={index} className='product-card'>
                    <h3 className='product-items'>{product.productGroup}</h3>
                    <p className='product-items'><strong>Shop:</strong> {product.shop}</p>
                    <p className='product-items'><strong>Category:</strong> {product.category}</p>
                    <p className='product-items'><strong>Price:</strong> ${product.unitPrice}</p>
                    <p className='product-items'><strong>Description:</strong> {product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;