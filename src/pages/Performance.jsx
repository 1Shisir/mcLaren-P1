import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Performance = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroThree} alt='McLaren P1 performance' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/20 -z-5'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-6 py-16 h-full flex items-center'>
          <div className='space-y-6 lg:max-w-3xl'>
            <h2 className='fade-item text-4xl lg:text-5xl font-bold text-white drop-shadow-xl'>Performance</h2>
            <p className='fade-item text-gray-100 leading-8 text-lg lg:text-xl tracking-wide drop-shadow-lg'>The McLaren P1’s hybrid powertrain pairs a 3.8-litre twin-turbo V8 with an electric motor and the IPAS system, delivering 903 PS and 900 Nm of torque. The electric boost adds sharper acceleration on demand while keeping the powertrain responsive and track-capable.</p>
            <div className='fade-item grid gap-4 md:grid-cols-3 text-sm lg:text-base text-gray-100 mb-6'>
              <div>
                <p className='font-semibold text-white'>0-60 mph</p>
                <p>2.8 seconds</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Top speed</p>
                <p>217 mph / 349 km/h</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Downforce</p>
                <p>600 kg at speed</p>
              </div>
            </div>
            <p className='fade-item text-gray-100 leading-8 text-lg lg:text-xl tracking-wide drop-shadow-lg'>Every element is tuned for both road and track use, with a hybrid system engineered to sustain the demands of high-speed driving while delivering the drive quality expected from a McLaren hypercar.</p>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Performance
