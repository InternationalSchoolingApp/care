import ImagePath from '@constants/ImagePath'
import UrlPath from '@constants/UrlPath'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Social from './Social'

const CommonFooter = () => {
    return (
        <div className='w-full border-t bg-white'>
            <div className='r-w grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-8 md:justify-between'>
                <div >
                    <Image width={200} height={100} src={ImagePath.LOGO} className='h-auto mb-4' alt='logo-footer' />
                    <p className='mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Social />
                </div>
                <div className=''>
                    <h3 className='text-xl mb-4'>Quick Links</h3>
                    <ul>
                        <li><Link href={UrlPath.ABOUT} className='text-gray-700 hover:text-blue-600 duration-150 mb-1'>About us</Link></li>
                        <li><Link href={UrlPath.CONTACT} className='text-gray-700 hover:text-blue-600 duration-150 mb-1'>Contact us</Link></li>
                        <li><Link href={UrlPath.WHY} className='text-gray-700 hover:text-blue-600 duration-150 mb-1'>Why us</Link></li>
                    </ul>
                </div>
                <div >
                    <h3 className='text-xl mb-4'>Legal</h3>
                    <ul>
                        <li><Link href={'https://internationalschooling.org/privacy-policy/'} className='text-gray-700 hover:text-blue-600 duration-150 mb-1'>Privacy Policy</Link></li>
                        <li><Link href={'https://internationalschooling.org/terms-of-use/'} className='text-gray-700 hover:text-blue-600 duration-150 mb-1'>Terms of use</Link></li>
                    </ul>
                </div>

            </div>
            <div className='w-full py-4 bg-gray-100'>
                <div className='r-w md:flex md:justify-between md:items-center md:gap-5 md:text-left text-center'>
                    <p className='text-xs mb-2 md:mb-0'>Copyright © 2024 - International Schooling.</p>
                    <p className='text-xs'>All Rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default CommonFooter