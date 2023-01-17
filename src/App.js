import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './screen/home/Home'
import Work from './screen/work/Work'
import Service from './screen/service/Service'
import Price from './screen/pricie/Price'
import Page from './screen/page/Page'
import Login from './screen/login/Login'
import Register from './screen/register/Register'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/work' element={ <Work/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/price' element={<Price/>} />
      <Route path='/page' element={<Page/> }/>
      <Route path='/login' element={<Login/> }/>
      <Route path='/register' element={<Register/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
