import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const [product, setProduct] = useState([])

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/product/api/get-single-product/${id}`)
      if (res.data.success) {
        setProduct(res.data.product)
        setName(res.data.product.name);
        setPrice(res.data.product.price);

      }
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('image', image);

      const product = await axios.put(
        `http://localhost:5000/product/api/update-single-product/${id}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (product.data.success) {
        navigate('/');
      } else {
        console.error(product.data.error);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className='flex flex-col w-full justify-center px-28 mt-10'>
      <h1 className='text-center font-bold text-4xl text-white'>Create New Product</h1>
      <div className='w-full flex justify-center '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-gray-700 min-w-[600px] px-10 py-14 mt-16 border rounded-4xl'>
          <input type="text" placeholder='Enter name' className='border rounded px-3 py-3' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Enter price' className='border rounded px-3 py-3' value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="file" className='border rounded px-3 py-3' onChange={handleImage} />
          <button type='submit' className='border rounded px-3 py-3 bg-blue-600 text-white cursor-pointer'>update</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateProduct
