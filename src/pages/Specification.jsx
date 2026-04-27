import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Specification = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroFour} alt='McLaren P1 specification' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/20 -z-5'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-6 py-16 h-full flex items-center'>
          <div className='space-y-6 lg:max-w-3xl'>
            <h2 className='fade-item text-4xl lg:text-5xl font-bold text-white drop-shadow-xl'>Specification</h2>
            <ul className='fade-item list-disc list-inside text-gray-100 space-y-2 text-lg lg:text-xl tracking-wide drop-shadow-lg'>
              <li>Engine: 3.8L twin-turbocharged V8 with electric motor</li>
              <li>Combined power: 903 PS (889 bhp)</li>
              <li>Torque: 900 Nm / 664 lb-ft</li>
              <li>0-60 mph: 2.8 seconds</li>
              <li>Top speed: 217 mph / 349 km/h</li>
              <li>Dry weight: 1,395 kg</li>
              <li>Battery: 6.8 kWh lithium-ion</li>
              <li>Transmission: 7-speed Seamless Shift Gearbox (SSG)</li>
              <li>Production run: 375 cars worldwide</li>
              <li>Official combined fuel consumption: 34.0 mpg (8.3 L/100km)</li>
            </ul>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Specification
