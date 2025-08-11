import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        try {
            const res = await axios.get('https://simple-ecommerce-i7qy.onrender.com/product/api/get-product')
            if (res.data.success) {
                setProduct(res.data.product)
            }
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://simple-ecommerce-i7qy.onrender.com/product/api/delete-single-product/${id}`);
            // Refresh products list after deletion
            getProduct();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }


    return (
        <div className='flex flex-col mt-16 px-28 w-full'>
            <h3 className='text-center text-4xl font-bold font-serif text-white'>
                Current Product
            </h3>

            <div className='w-full px-3 sm:px-6'>
                {
                    product.length > 0 ?
                        (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 lg:grid-cols-4 gap-4 text-white'>
                            {
                                product.map((item, index) => (
                                    <div key={index} className='border bg-black h-auto cursor-pointer rounded-2xl shadow p-4'>
                                        <div className='w-full h-[200px] overflow-hidden'>
                                            <img
                                                src={`https://simple-ecommerce-i7qy.onrender.com/upload/${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full rounded-2xl object-cover"
                                            />
                                        </div>
                                        <div className="p-2">
                                            <h4 className="font-bold">{item.name}</h4>
                                            <p className="font-bold text-2xl ">${item.price}</p>
                                        </div>
                                        <div className="p-2 flex flex-row gap-2">
                                            <Link to={`update/${item._id}`}>
                                                <button className='border bg-gray-200 cursor-pointer px-2 py-2 rounded'>
                                                    <FaEdit className='text-black' />
                                                </button>
                                            </Link>
                                            <button onClick={() => deleteProduct(item._id)} className='border bg-gray-200 cursor-pointer px-2 py-2 rounded'>
                                                <MdDelete className='text-black' />
                                            </button>

                                        </div>

                                    </div>
                                ))

                            }
                        </div>)
                        :
                        <div className='flex items-center  flex-row justify-center gap-2'>
                            <p className='text-1xl pt-1 text-white'>No product found?</p>
                            <Link to={'create'} className='text-blue-500 text-2xl'>Create product</Link>
                        </div>
                }

            </div>
        </div>
    )
}

export default Homepage
