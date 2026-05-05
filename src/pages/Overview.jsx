import React from 'react'
import assets from '../assets/assets'
import PageAnimation from '../components/PageAnimation'
import { useNavigate } from 'react-router-dom'

const Overview = () => {
  const navigate = useNavigate()
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <video src={assets.hero} autoPlay loop muted className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='relative z-10 max-w-5xl mx-auto px-6 py-12'>
          <div className='fade-item inline-flex items-center gap-3 mb-6'>
            <div className='h-16 w-1 rounded-full bg-orange-400'></div>
            <span className='text-sm uppercase tracking-[0.4em] text-orange-300'>McLaren P1™</span>
          </div>
          <h1 className='fade-item text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl max-w-3xl mb-6'>A hybrid hypercar built for the world’s most demanding roads and tracks.</h1>
          <p className='fade-item text-gray-300 leading-8 mb-6'>No ordinary car could inherit the McLaren F1’s mantle. The P1 was designed to deliver a sub-seven-minute lap of the Nürburgring Nordschleife, pairing a race-derived hybrid powertrain with active aerodynamics and a lightweight carbon fibre chassis.</p>
          <div className='fade-item grid gap-4 md:grid-cols-3 text-sm text-gray-200'>
            <div>
              <p className='font-semibold text-white'>Power</p>
              <p>903 bhp / 903 PS</p>
            </div>
            <div>
              <p className='font-semibold text-white'>Torque</p>
              <p>900 Nm / 664 lb-ft</p>
            </div>
            <div>
              <p className='font-semibold text-white'>Top speed</p>
              <p>217 mph / 349 km/h</p>
            </div>
          </div>
        </div>
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          <button onClick={() => navigate('/inspiration')} className='fade-item text-white px-5 py-3 rounded-md border border-white hover:bg-white hover:text-black transition'>Next</button>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Overview
