import ImagePath from '@constants/ImagePath'
import Image from 'next/image'
import React from 'react'
import Social from './Social'

const CommonFooter = () => {
    return (
        <div className='w-full border-t bg-[#F7FBFF]'>
            <div className='r-w grid grid-cols-1 md:grid-cols-3 item-center justify-center gap-4 py-8 '>
                {/* <div > */}
                <Image width={200} height={100} src={ImagePath.IS_LOGO} className='h-auto m-auto mb-4 md:mb-0 w-2/3 md:w-full ' alt='logo-footer-1' />
                <Image width={200} height={100} src={ImagePath.LOGO} className='h-auto m-auto mb-4 md:mb-0 ' alt='logo-footer-2' />
                <Social />
            </div >
            <div className='w-full py-4 bg-gray-100'>
                <div className='r-w md:flex md:justify-between md:items-center md:gap-5 md:text-left text-center'>
                    <p className='text-xs mb-2 md:mb-0'>Copyright © 2024 - International Schooling.</p>
                    <p className='text-xs'>All Rights Reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default CommonFooter