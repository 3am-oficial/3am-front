import React from 'react'

function SideNav() {
    return (
        <nav className='flex justify-between px-10 items-center'>
            <img src="/assets/images/logo.webp" alt="3AM Logo" className='rounded-xl m-2 w-20 lg:w-40' />
            <ul className='flex space-x-5 items-center'>
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
                {/* <li>
                    <a href='/cart'>
                        <img src='/assets/icons/cart.svg' width={'25px'} />
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}
export default SideNav
