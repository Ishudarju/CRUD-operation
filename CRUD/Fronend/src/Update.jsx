// import React from 'react'
// import { useState } from 'react';


// function Update() {
//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         category: '',
//         price: '',
//         image: null
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value
//         });
//       };
    
//       const handleFileChange = (e) => {
//         setFormData({
//           ...formData,
//           image: e.target.files[0]
//         });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData); // Handle form submission, e.g., send data to the server
//       };
    
//       return (
        
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <h1>Product Update</h1>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter name"
//             />
//           </div>
    
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Enter description"
//             ></textarea>
//           </div>
    
//           <div className="form-group">
//             <label htmlFor="category">Category:</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               placeholder="Enter category"
//             />
//           </div>
    
//           <div className="form-group">
//             <label htmlFor="price">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Enter price"
//             />
//           </div>
    
//           <div className="form-group">
//             <label htmlFor="image">Image Upload:</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//           </div>
    
//           <button type="submit" className="submit-btn">Submit</button>
//         </form>
  
//   );
// }

// export default Update;





import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const navigate = useNavigate(); // For navigation after updating
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  // Fetch the product details when the component mounts
  useEffect(() => {
    if (!id) {
      console.error('No product ID found.');
      return; // Exit if ID is not present
    }
  
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4023/product/list${id}`);
        setFormData(response.data.data); // Set form data with the fetched product
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Update the image in the form data
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      updatedFormData.append(key, value);
    });

    try {
      await axios.put(`http://localhost:4023/product/update/${id}`, updatedFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/'); // Redirect to home or another page after successful update
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Product Update</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image Upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default Update;

