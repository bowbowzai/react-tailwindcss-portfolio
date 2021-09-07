import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useIntersection } from 'use-intersection';
export default function About() {
  const contentRef = useRef();
  var previousTime = 0
  var timeThisTime = 0
  const tl = gsap.timeline({ defaults: { duration: 1 }, paused: true })
  useEffect(() => {

    tl.from('.bounce', {
      delay: 0.3,
      opacity: 0,
      y: '-100%',
      ease: 'bounce',
    }).from('.fadeInLeft', {
      opacity: 0,
      x: '-100%',
      ease: 'power2.out'
    }).from('.fadeInRight', {
      opacity: 0,
      x: '100%',
      ease: 'power2.out'
    })
  }, [])




  // const fadeInLeft = (element) => {
  //   gsap.from(element, {
  //     duration: 1.3,
  //     opacity: 0,
  //     x: '-100%',
  //     ease: 'power2.out'
  //   })
  // }
  // const fadeInRight = (element) => {
  //   gsap.from(element, {
  //     duration: 1,
  //     opacity: 0,
  //     x: '100%',
  //     ease: 'power2.out'
  //   })
  // }
  // const fadeInTopBounce = (element) => {
  //   gsap.from(element, {
  //     duration: 1,
  //     opacity: 0,
  //     y: '-100%',
  //     ease: 'bounce',
  //     onComplete: () => { console.log('onComplete'); }
  //   })
  // }
  const intersecting = useIntersection(contentRef, {
    rootMargin: '400px',
    threshold: 0.5
  }, function (ele) {
    if (tl.isActive()) {
      return false
    } else {
      tl.play(0)
    }



  });

  return (
    <div ref={contentRef} className='h-screen w-full scroll-snap-align-start px-5 py-10 lg:py-20 lg:px-20 flex flex-col items-center overflow-hidden bg-cover bg-opacity-10' id='about'>
      <h3 className='text-2xl font-acme text-crimson bounce text-crimson'>About Me</h3>
      <h3 className='text-xl md:text-3xl lg:text-5xl font-poppins mt-5 bounce'>Let me introduct myself.</h3>
      <div className='mt-5 px-10 flex flex-col items-center lg:mt-32  lg:px-44 lg:grid  lg:grid-cols-2 lg:grid-rows-1'>
        <div style={{ backgroundImage: 'url("images/me.jpg")', backgroundPosition: '15px -50px' }} className='w-32 h-32 md:w-60 md:h-60  lg:w-96 lg:h-96 overflow-hidden border-50 bg-cover flex items-center fadeInLeft'>
        </div>
        <p className='mt-5 md:mt-10 text-center lg:text-left text-xl md:text-4xl lg:text-3xl leading-6 md:leading-10 lg:leading-20 flex items-center font-zilla-slab fadeInRight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam nesciunt enim ex, minus nulla beatae earum deleniti, recusandae, necessitatibus perferendis temporibus soluta illo sunt!
        </p>
      </div>
    </div>
  )
}
