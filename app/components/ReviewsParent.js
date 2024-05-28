import React from 'react'
import VideoPlayer from './VideoPlayer'
import ImagePath from '@constants/ImagePath'
import VIDEO_URL_PATH from '@constants/VideoConstant'
// import Link from 'next/link'

const ReviewsParent = () => {
    return (
        <div className='r-w flex flex-col items-center '>
            <h2 className='text-white font-semibold md:text-xl text-center mb-4'>REVIEWS BY PARENTS AND STUDENTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                <VideoPlayer thumb={ImagePath.STUDENT_1_REVIEW} url={VIDEO_URL_PATH.STUDENT_1} imgWidth={400} imgWidthClass='400px' />
                <VideoPlayer thumb={ImagePath.STUDENT_2_REVIEW} url={VIDEO_URL_PATH.STUDENT_2} imgWidth={400} imgWidthClass='400px' />
                <VideoPlayer thumb={ImagePath.PARENT_1_REVIEW} url={VIDEO_URL_PATH.PARENT_2} imgWidth={400} imgWidthClass='400px' />
                <VideoPlayer thumb={ImagePath.PARENT_2_REVIEW} url={VIDEO_URL_PATH.PARENT_1} imgWidth={400} imgWidthClass='400px' />
            </div>
            {/* <Link href={'/contact'} className='btn rounded-full m-auto' >Enroll Now</Link> */}
        </div>
    )
}

export default ReviewsParent