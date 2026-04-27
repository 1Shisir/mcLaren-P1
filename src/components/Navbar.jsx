import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white border-b-2 border-orange-400 pb-1 hover:cursor-pointer'
      : 'text-gray-400 hover:text-white pb-1 transition hover:cursor-pointer';

  return (
    <div className='px-4 text-white bg-black flex justify-between items-center py-4'>
      <h1 onClick={() => navigate('/')} className='text-2xl font-bold hover:cursor-pointer'>McLAREN P1<sup className="text-sm align-top">TM</sup></h1>
      <ul className='flex gap-6 text-sm font-semibold px-4 py-2 rounded-lg'>
        <NavLink to="/overview" className={navLinkClass}>OVERVIEW</NavLink>
        <NavLink to="/inspiration" className={navLinkClass}>INSPIRATION</NavLink>
        <NavLink to="/design-and-innovation" className={navLinkClass}>DESIGN AND INNOVATION</NavLink>
        <NavLink to="/performance" className={navLinkClass}>PERFORMANCE</NavLink>
        <NavLink to="/specification" className={navLinkClass}>SPECIFICATION</NavLink>
      </ul>
    </div>
  )
}

export default Navbar

