"usse client"
import GluEffect from '@components/GluEffect';
import ImagePath from '@constants/ImagePath';
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const HomePage = () => {

  return (
    <div className=' w-full '>
      <GluEffect />
      <div className='r-w py-6 md:flex md:items-center md:gap-10 mb-4'>
        <div className='mb-4 md:mb-0 md:w-2/3 text-center md:text-left'>
          <h2 className='text-2xl g-t text-transparent m-auto md:mx-0 bg-clip-text w-max bg-gradient-to-r py-2 from-red-600 to-[#001FCF] font-semibold md:text-5xl'>International Schooling</h2>
          <h1 className='text-6xl font-black md:text-7xl text-[#001FCF] mb-4 '>Care Plus</h1>
          <div className='flex mb-4 flex-col md:flex-row md:gap-3 md:items-center'>
            <h4 className='text-xl md:text-2xl font-semibold text-[#001FCF]'>✔ Accredited.</h4>
            <h4 className='text-xl md:text-2xl font-semibold text-[#001FCF]'>✔ Approved.</h4>
            <h4 className='text-xl md:text-2xl font-semibold text-[#001FCF]'>✔ Recognized.</h4>
          </div>
          <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati iste recusandae ducimus suscipit! Omnis mollitia officiis tempora porro maxime nam neque eligendi explicabo assumenda, quos deleniti ex incidunt vel.</p>
          <button className='btn rounded-full bg-white hover:bg-base-200 border-[#001FCF] text-[#001FCF] hover:text-gray-800'>Contact now</button>
        </div>
        <div>
          <Image width={400} height={400} src={ImagePath.MAIN_BANNER} alt='banner img' />
        </div>
      </div>
      <div className='r-w py-6 md:py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-xl glass bg-red-50 !mb-4'>
        <div className='text-center px-2'>
          <h2 className='text-2xl mb-2s g-t text-transparent m-auto bg-clip-text w-max bg-gradient-to-r py-2 from-red-600 to-[#001FCF] font-semibold md:text-5xl'>KG-12</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequatur.</p>
        </div>
        <div className='text-center px-2'>
          <h2 className='text-2xl mb-2s g-t text-transparent m-auto bg-clip-text w-max bg-gradient-to-r py-2 from-red-600 to-[#001FCF] font-semibold md:text-5xl'>KG-12</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequatur.</p>
        </div>
        <div className='text-center px-2'>
          <h2 className='text-2xl mb-2s g-t text-transparent m-auto bg-clip-text w-max bg-gradient-to-r py-2 from-red-600 to-[#001FCF] font-semibold md:text-5xl'>KG-12</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequatur.</p>
        </div>
      </div>

    </div>
  )
}

export default HomePage