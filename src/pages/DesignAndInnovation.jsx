import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const DesignAndInnovation = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <video src={assets.heroOne} autoPlay loop muted className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/40 -z-5'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-6 py-12 h-full flex flex-col justify-center'>
          <div className='bg-black/60 backdrop-blur-sm rounded-lg p-8'>
            <h2 className='fade-item text-3xl font-bold mb-4 text-white'>Design and Innovation</h2>
            <p className='fade-item text-gray-200 leading-8 mb-4'>Form equals function in the P1. Its bodywork is shrink-wrapped tightly over the mechanical hard points, placing the cockpit at the centre and reducing frontal area while directing airflow into the roof snorkel and over active aero surfaces.</p>
            <p className='fade-item text-gray-200 leading-8 mb-4'>The lightweight carbon fibre MonoCell chassis and dihedral doors reflect McLaren's focus on engineering purity, while hydraulic active aero adjusts the rear wing and front flaps to balance downforce and drag across different speeds.</p>
            <p className='fade-item text-gray-200 leading-8'>The P1's innovative design is a direct translation of track-developed performance into the world of extreme road-going hypercars.</p>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default DesignAndInnovation

