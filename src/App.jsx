import React from 'react'
import Dashboard from './components/template/Dashboard'
import Management from './components/template/Management'
import Subscription from './components/template/Subscription'
import Builder from './components/template/Builder'
import Login from './components/template/Login'
import ForgotPassword from './components/template/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/verify' element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/management" element={<Management />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
