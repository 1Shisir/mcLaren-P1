import React from 'react'
import PageAnimation from '../components/PageAnimation'
import assets from '../assets/assets'

const Inspiration = () => {
  return (
    <PageAnimation>
      <div className='w-screen h-screen relative overflow-hidden'>
        <img src={assets.heroTwo} alt='McLaren P1 inspiration' className='absolute inset-0 object-cover w-screen h-screen -z-10' />
        <div className='absolute inset-0 bg-black/25 -z-5'></div>
        <div className='relative z-10 h-full'>
          <div className='absolute inset-0 px-8 py-12 flex flex-col justify-between'>
            <div className='max-w-xl space-y-8'>
              <div className='fade-item inline-flex items-center gap-3'>
                <div className='h-16 w-1 rounded-full bg-orange-400'></div>
                <span className='text-sm uppercase tracking-[0.4em] text-orange-300'>Inspiration</span>
              </div>
              <h1 className='fade-item text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl'>The most driver-focused car ever built.</h1>
              <p className='fade-item text-gray-100 leading-relaxed text-base lg:text-lg tracking-wide drop-shadow-lg'>The McLaren P1 was born from a challenge to create the most driver-focused car ever built. Engineers set out to deliver a machine capable of a sub-seven-minute Nürburgring lap by blending race-car technology with exceptional road refinement.</p>
              <p className='fade-item text-gray-100 leading-relaxed text-base lg:text-lg tracking-wide drop-shadow-lg'>Its inspiration is rooted in Formula 1 expertise: every surface works with airflow, every mechanical detail is engineered for peak performance, and the hybrid system is designed for relentless track use.</p>
            </div>

            <div className='absolute self-end max-w-lg text-right bottom-10'>
              <p className='fade-item text-gray-100 leading-relaxed text-base lg:text-lg tracking-wide drop-shadow-lg'>The result is a hypercar widely regarded as part of the modern ‘Holy Trinity’ — a complex, advanced engineering showcase built around the purest driver experience.</p>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default Inspiration
