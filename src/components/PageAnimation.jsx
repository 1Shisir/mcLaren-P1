import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PageAnimation = ({ children }) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      })
      gsap.from(ref.current.querySelectorAll('.fade-item'), {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      })
    }, ref.current)

    return () => ctx.revert()
  }, [])

  return <div ref={ref} className='overflow-hidden'>{children}</div>
}

export default PageAnimation
