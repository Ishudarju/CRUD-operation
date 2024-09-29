import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Product() {
    const[product,setProduct]=useState([{
        Name:"poco",Discription:"good quality",Category:"Mobile",Price:"2400",Image:"Upload file"
    }])

    useEffect(()=>{
        axios.get('http://localhost:4023/product/insert')
            .then(result => setProduct(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='d-flex vh-100  bg-primary justify-content-center align-item-center'>
            <div className='w-50  bg-white rounded p-3'>
                <Link to="/insert" className='btn-insert'><button className='bg-primary'>Add +</button></Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Discription</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((products)=>{
                                return<tr>
                                    <td>{products.Name}</td>
                                    <td>{products.Discription}</td>
                                    <td>{products.Category}</td>
                                    <td>{products.Price}</td>
                                    <td>{products.Image}</td>
                                    <td>
                                        <Link to={`/update/${products._id}`} className='btn-update'>
                                            <button>Update</button>                                           
                                        </Link>
                                        <button>Delete</button>
                                    </td>
                                        
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Product;
