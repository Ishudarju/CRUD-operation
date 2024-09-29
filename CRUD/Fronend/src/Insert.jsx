// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import './Insert.css'; // Import your CSS
// import { useNavigate } from 'react-router-dom';

// function Insert() {
//   const navigate = useNavigate()  
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     price: '',
//     image: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0] // Capture the selected image file
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare form data to be sent as multipart/form-data
//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('category', formData.category);
//     formDataToSend.append('price', formData.price);
//     formDataToSend.append('image', formData.image); // File upload

//     try {
//       // Sending POST request to the backend
//       const response = await axios.post('http://localhost:4023/product/insert', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Handle success response
      
//         console.log('Product successfully inserted:', response.data);
//         navigate('/')

      

//     } catch (error) {
//       // Handle error
//       console.error('Error inserting product:', error);
//     }
//     alert('The product is inserted successfully!');
//   };

//   return (
//     <form className="form-container" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <h1>Product Insert</h1>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter name"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//         ></textarea>
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           id="category"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Enter price"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="image">Image Upload:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           accept="image/*"
//           onChange={handleFileChange}
//         />
//       </div>

//       <button type="submit" className="submit-btn">Submit</button>
//     </form>
//   );
// }

// export default Insert;




import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Insert.css'; // Import your CSS
import { useNavigate } from 'react-router-dom';

function Insert() {
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] // Capture the selected image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to be sent as multipart/form-data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image', formData.image); // File upload

    try {
      // Sending POST request to the backend
      const response = await axios.post('http://localhost:4023/product/insert', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle success response and navigate to the home page
      console.log('Product successfully inserted:', response.data);
      alert('The product is inserted successfully!');
      navigate('/'); // Navigate to home page after successful insertion

    } catch (error) {
      // Handle error
      console.error('Error inserting product:', error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Product Insert</h1>
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

export default Insert;

