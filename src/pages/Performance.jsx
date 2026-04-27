import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Performance = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroThree} alt='McLaren P1 performance' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/20 -z-5'></div>
        <div className='relative z-10 h-full'>
          <div className='absolute top-12 left-8 max-w-xl space-y-6'>
            <h2 className='fade-item text-5xl lg:text-6xl font-bold text-white drop-shadow-xl leading-tight'>Performance</h2>
            <p className='fade-item text-gray-100 leading-8 text-base lg:text-lg tracking-wide drop-shadow-lg max-w-lg'>The McLaren P1’s hybrid powertrain pairs a 3.8-litre twin-turbo V8 with an electric motor and the IPAS system, delivering 903 PS and 900 Nm of torque. The electric boost adds sharper acceleration on demand while keeping the powertrain responsive and track-capable.</p>
            <p className='fade-item text-gray-100 leading-8 text-base lg:text-lg tracking-wide drop-shadow-lg max-w-lg'>Every element is tuned for both road and track use, with a hybrid system engineered to sustain the demands of high-speed driving while delivering the drive quality expected from a McLaren hypercar.</p>
          </div>
          <div className='absolute bottom-12 right-8 bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-sm text-right max-w-sm'>
            <div className='fade-item text-sm lg:text-base text-gray-100 space-y-4'>
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
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Performance
