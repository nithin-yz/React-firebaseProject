import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Add this line
import VerifyCode from './components/Verifycode'
import Signup from './components/signup'
import Login from './components/Login'
import Home from './components/Home' // Assuming you have a Home component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<VerifyCode />} />
          <Route path="/home" element={<Home />} /> {/* Corrected syntax */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
