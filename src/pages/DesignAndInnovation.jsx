import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const DesignAndInnovation = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <video src={assets.heroOne} autoPlay loop muted className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/60 -z-5'></div>
        <div className='relative z-10 h-full'>
          <div className='absolute top-12 left-10 max-w-2xl'>
            <div className='fade-item inline-flex items-center gap-3 mb-6'>
              <div className='h-16 w-1 rounded-full bg-orange-400'></div>
              <span className='text-sm uppercase tracking-[0.4em] text-orange-300'>Design & Innovation</span>
            </div>
            <h1 className='fade-item text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl max-w-3xl'>A sculpted hypercar built around aerodynamic mastery and carbon-clad engineering.</h1>
          </div>

          {/* <div className='absolute top-48 left-10 grid gap-6 lg:grid-cols-[1fr,320px] items-start'>
            <div className='space-y-6 max-w-xl'>
              <p className='fade-item text-gray-100 text-lg lg:text-xl leading-9 tracking-wide drop-shadow-lg'>Form equals function in the P1. Its bodywork is shrink-wrapped tightly over the mechanical hard points, placing the cockpit at the centre and reducing frontal area while directing airflow into the roof snorkel and over active aerodynamic surfaces.</p>
              <p className='fade-item text-gray-100 text-lg lg:text-xl leading-9 tracking-wide drop-shadow-lg'>The lightweight carbon fibre MonoCell chassis and dihedral doors reflect McLaren’s focus on engineering purity, while hydraulic active aero adjusts the rear wing and front flaps to balance downforce and drag across different speeds.</p>
            </div>
            <div className='fade-item rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl text-white max-w-xs'>
              <p className='text-sm uppercase tracking-[0.3em] text-orange-300 mb-4'>Signature traits</p>
              <ul className='space-y-4 text-base leading-8'>
                <li>MonoCell carbon-fiber structure</li>
                <li>Active rear wing and front flaps</li>
                <li>Driver-centered cockpit packaging</li>
              </ul>
            </div>
          </div> */}

          <div className='absolute bottom-12 right-10 w-[40vw] min-w-[320px]'>
            <div className='fade-item rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl text-gray-100'>
              <p className='text-lg lg:text-xl leading-9 tracking-wide'>The P1’s innovative design is a direct translation of track-developed performance into the world of extreme road-going hypercars, where every line and every system exists to serve speed, cooling and driver focus.</p>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default DesignAndInnovation

