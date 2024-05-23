"use client"
import dynamic from 'next/dynamic.js';
import Image from 'next/image';
import React, { useState } from 'react'


const DynamicModal = dynamic(() => import("./Video.js"), { ssr: false });


const VideoPlayer = ({ url, thumb, imgWidth }) => {

    const [play, setIsPlay] = useState(false);
    const close = () => {
        setIsPlay(false);
    }
    return (
        <div className='w-full h-max' >{play ? <DynamicModal url={url} isPlay={close} /> :
            (<div className='relative'>
                <div onClick={() => { setIsPlay(true) }} className='cursor-pointer absolute inset-0 flex items-center justify-center'>
                    <div className='h-[50px] w-[50px] flex items-center justify-center pl-5 shadow-xl rounded-full p-4 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} className='fill-red-500 cursor-pointer' viewBox="0 0 384 512">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>
                <Image onClick={() => { setIsPlay(true) }} width={imgWidth} height={400} src={thumb} alt='video' className='h-auto rounded-xl border w-full' />
            </div>)
        }</div>
    )
}

export default VideoPlayer