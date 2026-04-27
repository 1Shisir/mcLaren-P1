import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import Inspiration from './pages/Inspiration.jsx'
import DesignAndInnovation from './pages/DesignAndInnovation.jsx'
import Performance from './pages/Performance.jsx'
import Specification from './pages/Specification.jsx'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/design-and-innovation" element={<DesignAndInnovation />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/specification" element={<Specification />} />
      </Routes>
    </div>
  )
}

export default App
