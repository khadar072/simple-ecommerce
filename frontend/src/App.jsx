
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import UpdateProduct from './pages/UpdateProduct'
import CreateProduct from './pages/CreateProduct'

const App = () => {
  return (
    <div>
      <div className='min-h-screen w-full bg-gray-600'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create' element={<CreateProduct/>}/>
          <Route path='/update/:id' element={<UpdateProduct/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
