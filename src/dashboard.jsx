import React, { useState } from 'react'
import './dashboard.css'
import { FaEnvelope, FaUser, FaHome, FaCog, FaBars, FaFileAlt,FaExclamation } from 'react-icons/fa'

const Dashboard = () => {
  const [showProductTable, setShowProductTable] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    shop: '',
    category: '',
    productGroup: '',
    unitPrice: '',
    description: '',
    product: '',
    avail: '',
    subcat: '',
    brand: '',
    code: '',
    status: '',
  });
  const [image, setImage] = useState(null); // state to store the image

  const handleProductMenuClick = () => {
    setShowProductTable(!showProductTable);
  };

  const handleAddProductClick = () => {
    setShowAddProductForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // create a preview URL for the selected image
    setFormData({ ...formData, image: e.target.files[0] }); // store the actual file for the product
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...formData, image }]);
    setFormData({
      shop: '',
      category: '',
      productGroup: '',
      unitPrice: '',
      description: '',
      product: '',
      avail: '',
      subcat: '',
      brand: '',
      code: '',
      status: '',
    });
    setImage(null); // clear the image after form submission
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
              <li><FaExclamation className='menu-icon'/>Report</li>
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
                <button className='add-product-button' onClick={handleAddProductClick}>
                  Add New Product
                </button>
              </div>
              {showAddProductForm && (
                <form className='add-product-form' onSubmit={handleFormSubmit}>
                  <div className='form-left'>
                    <div className='form-group'>
                      <label>Shop:</label>
                      <select id="shop" name='shop' value={formData.shop} onChange={handleInputChange} required>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>
                        <option value="option3">Option3</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Category:</label>
                      <select id='category' name='category' value={formData.category} onChange={handleInputChange} required>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>
                        <option value="option3">Option3</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Product Group:</label>
                      <select id="productgroup" name='productGroup' value={formData.productGroup} onChange={handleInputChange} required>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>
                        <option value="option3">Option3</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Product:</label>
                      <input id="product" name='product' type='text' value={formData.product} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                      <label>Unit Price:</label>
                      <input type='number' name='unitPrice' value={formData.unitPrice} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                      <label>Unit Stock Avail:</label>
                      <input type='radio' name='avail' value='Yes' checked={formData.avail === 'Yes'} onChange={handleInputChange} required />
                      <label>Yes</label>
                      <input type='radio' name='avail' value='No' checked={formData.avail === 'No'} onChange={handleInputChange} required />
                      <label>No</label>
                    </div>
                    <div className='form-group'>
                      <label>Description:</label>
                      <textarea name='description' value={formData.description} onChange={handleInputChange} required></textarea>
                    </div>
                  </div>

                  <div className='form-right'>
                    <div className='form-group'>
                      <label>SubCategory:</label>
                      <select id="subcat" name='subcat' value={formData.subcat} onChange={handleInputChange} required>
                        <option value="option1">Option1</option>
                        <option value="option2">Option2</option>
                        <option value="option3">Option3</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Brand:</label>
                      <input id="brand" name='brand' type='text' value={formData.brand} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                      <label>Product Code:</label>
                      <input id="code" name='code' type='text' value={formData.code} onChange={handleInputChange} required />
                    </div>
                    <div className='form-group'>
                      <label>Product Status:</label>
                      <input type='radio' name='status' value='active' checked={formData.status === 'active'} onChange={handleInputChange} required />
                      <label>Active</label>
                      <input type='radio' name='status' value='inactive' checked={formData.status === 'inactive'} onChange={handleInputChange} required />
                      <label>Inactive</label>
                    </div>

                    <div className='form-group'>
                      <label>Upload Product Image:</label>
                      <input type='file' onChange={handleFileChange} />
                    </div>

                    {image && (
                      <div className='image-preview'>
                        <p>Image Preview:</p>
                        <img src={image} alt='Selected Product' width='100' height='100' />
                      </div>
                    )}

                    <button type='submit' className='submit-button'>Add Product</button>
                  </div>
                </form>
              )}

             <div className='product-display-container'>
  {products.map((product, index) => (
    <div key={index} className='product-card'>
      {product.image && (
        <img src={product.image} alt={product.product} className='product-image' />
      )}
      <div className='product-name'>{product.product}</div>
      <div className='product-description'>{product.description}</div>
      <div className='product-price'>${product.unitPrice}</div>
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
