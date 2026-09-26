import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Skills from './pages/skills'
import Resources from './pages/Resources'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ResourceDetails from './pages/ResourceDetails'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'
import EditProfile from './pages/EditProfile'

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/resources/:title" element={<ResourceDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile/:name/edit" element={<EditProfile />} />
        </Routes>
        

      </div>

    </BrowserRouter>
  )
}

export default App