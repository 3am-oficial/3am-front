import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center space-y-20'>
      <img src="/assets/images/logo.webp" alt="3AM Logo" className='rounded-xl' width={'200px'} />
      <ul className='flex space-x-5 items-center ml-5'>
        <li>
          <a href='/'>
            <img src='/assets/icons/home.svg' width={'25px'} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/3am.oficial/' target='_blank'>
            <img src='/assets/icons/instagram.svg' width={'25px'} className='cursor-pointer' />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UC3myUwsL1oeYp216INrvtQw' target='_blank'>
            <img src='/assets/icons/youtube.svg' width={'25px'} className='cursor-pointer' />
          </a>
        </li>
        <li>
          <a href='https://www.tiktok.com/@3am.oficial' target='_blank'>
            <img src='/assets/icons/tiktok.svg' width={'25px'} className='cursor-pointer' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
