import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Specification = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroFour} alt='McLaren P1 specification' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/20 -z-5'></div>
        <div className='relative z-10 h-full'>
          <div className='absolute top-12 left-8 max-w-xl space-y-6'>
            <h2 className='fade-item text-5xl lg:text-6xl font-bold text-white drop-shadow-xl leading-tight'>Specification</h2>
            <p className='fade-item text-gray-100 leading-8 text-base lg:text-lg tracking-wide drop-shadow-lg max-w-lg'>The McLaren P1 combines extreme carbon-fibre engineering with a hybrid powertrain to deliver track-capable performance and road-legal usability. These figures define the car’s technical excellence.</p>
          </div>
          <div className='absolute bottom-12 right-8 bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm max-w-md'>
            <ul className='fade-item list-disc list-inside text-gray-100 space-y-3 text-base lg:text-lg tracking-wide'>
              <li>Engine: 3.8L twin-turbocharged V8 + electric motor</li>
              <li>Power: 903 PS / 889 bhp</li>
              <li>Torque: 900 Nm / 664 lb-ft</li>
              <li>0-60 mph: 2.8 seconds</li>
              <li>Top speed: 217 mph / 349 km/h</li>
              <li>Dry weight: 1,395 kg</li>
            </ul>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Specification
