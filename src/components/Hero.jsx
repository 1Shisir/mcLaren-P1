import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets.js'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <video src={assets.heroVideo} autoPlay loop muted className='absolute inset-0 object-cover w-screen h-screen -z-10'></video>
      <div className='flex flex-col items-center justify-center h-screen text-center '>

        <div className='text-7xl font-bold mb-4  text-gray-400'>On The Shoulders of Giants</div>
        <div>
          <button onClick={() => navigate('/overview')} className=' text-white px-4 py-2 mt-50 rounded-md border  border-white hover:bg-gray-300 hover:text-gray-800 hover:cursor-pointer'>Explore P1</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
