import React from 'react'

export default function Project() {

  const dataProject = [
    {
      id: 'blogr',
      title: 'Blogr Landing Page',
      codeUrl: 'https://github.com/bowbowzai/tailwindcss-blogr_landing_page',
      liveSiteUrl: 'https://bowbowzai.github.io/tailwindcss-blogr_landing_page/',
      img: 'images/blog.jpg'
    },
    {
      id: 'fylo',
      title: 'Fylo Landing Page',
      codeUrl: 'https://github.com/bowbowzai/html-css-fylo_landing_page',
      liveSiteUrl: 'https://bowbowzai.github.io/html-css-fylo_landing_page/',
      img: 'images/dark.jpg'
    },
    {
      id: 'chat',
      title: 'Chat Illustration',
      codeUrl: 'https://github.com/bowbowzai/tailwindcss-chat_illustration',
      liveSiteUrl: 'https://bowbowzai.github.io/tailwindcss-chat_illustration/',
      img: 'images/mobile.jpg'
    },
    {
      id: 'card',
      title: 'Four Card',
      codeUrl: 'https://github.com/bowbowzai/html-css-four_card_challenge',
      liveSiteUrl: 'https://bowbowzai.github.io/html-css-four_card_challenge/ ',
      img: 'images/card.jpg'
    },
    {
      id: 'sunny',
      title: 'Sunnyside Landing Page',
      codeUrl: 'https://github.com/bowbowzai/tailwindcss-sunnyside_landing_page',
      liveSiteUrl: 'https://bowbowzai.github.io/tailwindcss-sunnyside_landing_page/',
      img: 'images/sunnyside.jpg'
    },
    {
      id: 'order',
      title: 'Order Summary Page',
      codeUrl: 'https://github.com/bowbowzai/html-css-order_summary',
      liveSiteUrl: 'https://bowbowzai.github.io/html-css-order_summary/',
      img: 'images/order.jpg'
    },
  ]

  return (
    <div className='h-auto lg:h-screen w-full scroll-snap-align-start py-10 px-5 lg:py-20 lg:px-20 bg-gray-200' id='project'>
      <h3 className='text-2xl font-acme text-crimson text-center'>My Projects</h3>
      <p className='text-center text-gray-700 font-zilla-slab text-xl lg:text-5xl mt-5 mb-10 lg:mb-32'>Here are some of the projects I've done before</p>
      <div className='flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-y-20 place-items-center'>
        {
          dataProject.map((value) => {
            return (
              <div key={value.id} className=' w-80 h-56 rounded-2xl relative overflow-hidden group '>
                <img src={value.img} alt="" className='w-full h-full absolute transition duration-200 transform left-0 right-0 top-0 bottom-0 opacity-100 group-hover:scale-150 group-hover:opacity-30' />
                <div className='group-hover:absolute justify-center items-center w-full h-full flex flex-col  cursor-pointer'>
                  <h4 className='font-acme font-bold text-3xl bg-gradient-to-r from-crimson to-pink-900 bg-clip-text text-transparent'>{value.title}</h4>
                  <a href={value.liveSiteUrl} target='_blank' className='mt-10 inline-block w-48 py-2  bg-purple-800 rounded-full text-xl text-white transition duration-200 hover:text-purple-800 hover:bg-purple-300 text-center font-zilla-slab'>PREVIEW SITE</a>
                  <a href={value.codeUrl} target='_blank' className='mt-5 inline-block w-48 py-2  bg-purple-800 rounded-full text-xl text-white transition duration-200 hover:text-purple-800 hover:bg-purple-300 text-center font-zilla-slab'>VIEW CODE</a>
                </div>
              </div>)
          })
        }
      </div>
    </div>
  )
}
