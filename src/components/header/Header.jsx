import React, { useState, Fragment } from 'react'
import Dialog from '../dialog/Dialog'
import { Menu, Transition } from '@headlessui/react'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ backgroundImage: "url('images/crimson.jpg')" }} className='flex flex-col h-screen w-full bg-fixed bg-center bg-cover opacity-90 text-white overflow-hidden scroll-snap-align-start relative' id='header'>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* navbar */}
      <nav className='flex items-center justify-between py-5 px-7 lg:px-14 animate-fadeIn animation-1'>
        {/* left logo */}
        <div>
          <h1 className='font-lobster text-5xl'>
            <a href="">Bowbow.</a>
          </h1>
        </div>
        {/* hamburger */}
        <Menu className='cursor-pointer lg:hidden' as='div'>
          <Menu.Button as='div'><img src="images/icon-hamburger.svg" alt="" className='' /></Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom=" opacity-0"
            enterTo="opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="  opacity-100"
            leaveTo="  opacity-0"
          >
            <Menu.Items as='div' className='absolute h-96 w-4/5 left-50 transform -translate-x-1/2 mt-2 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden'>
              <Menu.Item as='div' className='w-full text-center h-1/3 py-3 px-5 bg-white text-black '>
                <a href='#about' className='flex items-center justify-center inline-block w-full h-full'>
                  About Me
                </a>
              </Menu.Item>
              <Menu.Item as='div' className='w-full text-center h-1/3 py-3 px-5 bg-white text-black flex items-center justify-center'>
                <a href='#project' className='flex items-center justify-center inline-block w-full h-full'>
                  My Projects
                </a>
              </Menu.Item>
              <Menu.Item as='div' className='w-full text-center h-1/3 py-3 px-5 bg-white text-black flex items-center justify-center' onClick={() => setIsOpen(true)}>
                <a className='flex items-center justify-center inline-block w-full h-full' >
                  Say Hello
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* right */}
        <div className='hidden lg:block animate-fadeIn animation-1'>
          <ul className='flex'>
            <li>
              <a href="#about" className='inline-block py-3 px-3 mr-4 text-xl font-zilla-slab hover:text-coral transition duration-200 '>About Me</a>
            </li>
            <li>
              <a href="#project" className='inline-block py-3 px-3 mr-4 text-xl font-zilla-slab hover:text-coral transition duration-200 ' >My Projects</a>
            </li>
            <li onClick={() => setIsOpen(true)} className='cursor-pointer'>
              <span className='inline-block py-3 px-5 mr-4 text-xl font-zilla-slab border-2 border-crimson rounded-full hover:border-white hover:bg-white hover:text-crimson transition duration-300 font-medium tracking-widest'>Say Hello</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* header content */}
      <div className='h-screen flex flex-col items-center justify-center animate-fadeIn animation-1'>
        <h1 className='font-acme text-4xl md:text-6xl lg:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-coral to-white'>I'm Ng Ju Peng</h1>
        <div className='mt-12 flex flex-col lg:flex-row items-center'>
          <span className='uppercase text-lg font-medium'>Front-end-developer</span>
          <span className='inline-block w-5 h-0.5 my-2 lg:my-0 lg:py-0 lg:w-0.5 lg:h-5 bg-white mx-3'></span>
          <span className='uppercase text-lg font-medium text-center px-2'>Still learning to become back-end-developer</span>
        </div>
        {/* about me button */}
        <a href="#about" className='block flex items-center mt-20 border-2 border-white py-3 px-5 text-center cursor-pointer hover:border-coral hover:text-coral transition duration-200'>
          <span className='text-xl font-poppins tracking-wide'>More About Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
