import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Inspiration = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroTwo} alt='McLaren P1 inspiration' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/25 -z-5'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-6 py-16 h-full flex items-center'>
          <div className='space-y-6 lg:max-w-3xl'>
            <h2 className='fade-item text-4xl lg:text-5xl font-bold text-white drop-shadow-xl'>Inspiration</h2>
            <p className='fade-item text-gray-100 leading-8 text-lg lg:text-xl tracking-wide drop-shadow-lg'>The McLaren P1 was born from a challenge to create the most driver-focused car ever built. Engineers set out to deliver a machine capable of a sub-seven-minute Nürburgring lap by blending race-car technology with exceptional road refinement.</p>
            <p className='fade-item text-gray-100 leading-8 text-lg lg:text-xl tracking-wide drop-shadow-lg'>Its inspiration is rooted in Formula 1 expertise: every surface works with airflow, every mechanical detail is engineered for peak performance, and the hybrid system is designed for relentless track use.</p>
            <p className='fade-item text-gray-100 leading-8 text-lg lg:text-xl tracking-wide drop-shadow-lg'>The result is a hypercar widely regarded as part of the modern ‘Holy Trinity’ — a complex, advanced engineering showcase built around the purest driver experience.</p>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Inspiration
