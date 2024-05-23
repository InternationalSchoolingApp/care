import React from 'react';

const Video = ({ url, isPlay }) => {

    return (
        <div className='z-50 fixed top-0 left-0 w-[100svw] h-[100svh] bg-black/20 backdrop-blur flex justify-center items-center'>
            <button className='btn btn-circle text-3xl fixed top-[100px] right-3' onClick={isPlay}>&times;</button>
            <iframe
                width="700px"
                height="380px"
                className='w-[400px] max-w-[90%] h-[210px] md:h-[380px] md:w-[700px]'
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
