import { useState } from 'react'
import Navbar from './components/Navbar'
import CertificateDiv from './components/CertificateDiv'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InterPage from './pages/InterPage'

function App() {


  return (
    <div className='w-screen h-screen box-border'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/Intership' element={<InterPage/>} />
          <Route path='Intership/certificate' element={<CertificateDiv />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
