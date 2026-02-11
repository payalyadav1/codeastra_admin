import React from 'react'
import Dashboard from './components/template/Dashboard'
import Management from './components/template/Management'
import Subscription from './components/template/Subscription'
import Builder from './components/template/Builder'
import Login from './components/template/Login'
import ForgotPassword from './components/template/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUserForm from './components/organisms/AddUserForm '
import Projects from './components/template/Projects'
import UserManagement from './components/template/UserManagement'
import FullChatHistory from './components/template/FullChatHistory'
import Adrninprofile from './components/template/Adrninprofile'
import History from './components/template/History'
import EditProfile from './components/organisms/EditProfile'
import TransactionDetails from './components/template/TransactionDetails'
import AddNewSubscriptionPlan from './components/organisms/AddNewSubscriptionPlan'


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
          <Route path="/Addfrom" element={<AddUserForm />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/fullchat" element={<FullChatHistory/>}/>
          <Route path="/adminprofile" element={<Adrninprofile/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/transactiondetails" element={<TransactionDetails />} />
          <Route path="/addnewsubscriptionplan" element={<AddNewSubscriptionPlan />} />
     
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
