import React from 'react'
import ForgotPassword from './components/template/ForgotPassword'
// import Login from './components/template/Login'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesFile = () => {
  return (
    <div>

      {/* <BrowserRouter>
      <Routes>
     <Route  path="/" element={<Login />}/>
     <Route  path="/Password" element={<ForgotPassword />}/>
      </Routes>
      </BrowserRouter> */}
      <ForgotPassword/>
      
        
 
    </div>
  )
}

export default RoutesFile
