"usse client"
import GluEffect from '@components/GluEffect';
import ReviewsParent from '@components/ReviewsParent';
import ImagePath from '@constants/ImagePath';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const HomePage = () => {

  return (
    <div className=' w-full '>
      <GluEffect />
      <div className=' r-w py-6 md:py-12 flex flex-col-reverse md:flex-row md:items-center md:gap-10 mb-4'>
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
        <div className='mb-4 md:mb-0'>
          <Image width={400} height={400} src={ImagePath.MAIN_BANNER} alt='banner img' className='h-auto m-auto md:mx-0 w-2/3 md:w-full' />
        </div>
      </div>
      <div className='r-w py-6 md:py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-xl shadow border bg-red-50 !mb-4'>
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

      <div className='py-6 md:flex md:items-center md:gap-5 r-w'>
        <div className='w-2/3 m-auto md:w-1/3 mb-4 md:mb-0'>
          <Image src={ImagePath.IMAGE_GIRL} width={300} height={300} className='h-auto w-full' />
        </div>
        <div className='md:w-2/3 text-center md:text-left'>
          <h2 className='text-3xl font-bold text-gray-700 mb-4'>Special Education Support </h2>
          <p className='mb-2 text-sm'>School education is the most basic need of every individual. As educators, we firmly believe that no child, under any circumstance, should be deprived of it. We also understand that every student is different and has unique learning needs. Expecting every child to learn using the same methods not only hampers their growth but also limits their individual potential. As every student is special in their own way, they deserve an education that celebrates and recognizes their differences.</p>
          <p className='mb-2 text-sm'>Unlike the rigid traditional schools where children are forced to follow a strict line year after year, we, at International Schooling, celebrate diversity and welcome every student with open arms. Whether your child is a fast learner or a slow learner, has ADHD, autism, or learning disabilities, our commitment to accessibility, affordability, and inclusivity, is breaking barriers that stand between your child’s unique needs and their dreams.</p>
          <p className='mb-2 text-sm'>Building on our school’s philosophy, ‘each child is unique and deserves an education as per their needs, and every decision we make revolves around the student’, the leadership at International Schooling customized a program; International Schooling Care+, for all our special students.</p>
        </div>
      </div>

      <div className='r-w py-6 px-4 md:px-12 md:py-12 rounded-xl bg-gradient-to-r from-[#001FCF] to-blue-500 !mb-4 text-white text-center md:text-left'>
        <h2 className='md:text-3xl font-bold mb-2'>What is International Schooling Care+</h2>
        <p className='mb-2 text-sm'>School education is the most basic need of every individual. As educators, we firmly believe that no child, under any circumstance, should be deprived of it. We also understand that every student is different and has unique learning needs. Expecting every child to learn using the same methods not only hampers their growth but also limits their individual potential. As every student is special in their own way, they deserve an education that celebrates and recognizes their differences.</p>
        <p className='mb-2 text-sm'>Unlike the rigid traditional schools where children are forced to follow a strict line year after year, we, at International Schooling, celebrate diversity and welcome every student with open arms. Whether your child is a fast learner or a slow learner, has ADHD, autism, or learning disabilities, our commitment to accessibility, affordability, and inclusivity, is breaking barriers that stand between your child’s unique needs and their dreams.</p>
        <p className='mb-2 text-sm'>Building on our school’s philosophy, ‘each child is unique and deserves an education as per their needs, and every decision we make revolves around the student’, the leadership at International Schooling customized a program; International Schooling Care+, for all our special students.</p>
      </div>
      <div className='r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b '>
        <Image width={200} height={200} src={'/happy-girl-sitting.png'} alt='first-img' className='h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0' />
        <div className='w-full'>
          <h2 className='text-sm md:text-lg font-semibold mb-2'>ADHD - Attention Deficit Hyperactivity Disorders</h2>
          <p>Is your son unable to sit in one place for too long? Does the teacher always complain about your daughter not paying attention in class? Does your child feel out of place with other students in the classroom? If these situations seem familiar for your child, they are not alone. It is what they have and not who they are. Attention-deficit hyperactivity disorder affects their development, which makes them struggle at school because of lack of attention and increased impulsivity. In a class of 30–50 students</p>
        </div>
      </div>
      <div className='r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b'>
        <Image width={200} height={200} src={'/happy-boy-sitting.png'} alt='first-img' className='h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0' />
        <div className='w-full'>
          <h2 className='text-sm md:text-lg font-semibold mb-2'>Autism Spectrum Disorder</h2>
          <p>For some children, navigating social aspects of life can be difficult. Making friends, understanding social norms and regulations can be confusing for them. Difficulties with communication can make it tough for them to express their needs, wants, answer or ask questions in a classroom setting. They can have issues with adjustment making it difficult for them to fit in with their classmates. Children with autism have different views about the world, the skills they possess have the power to create magic if given the proper atmosphere</p>
        </div>
      </div>
      <div className='r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left !mb-4'>
        <Image width={200} height={200} src={'/happy-boy-sitting-front.png'} alt='first-img' className='h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0' />
        <div className='w-full'>
          <h2 className='text-sm md:text-lg font-semibold mb-2'>Learning Disabilities (Dyscalculia, Dysgraphia, Dyslexia)</h2>
          <p>Has reading and writing always been difficult for your child? Is your child’s homework full of mistakes encircled in red by the teacher? Is math your child’s greatest enemy? No matter how hard they try, they are never able to get their studies right! Learning disabilities can make it difficult for the child to think, speak, solve mathematical equations, write or read. To accommodate the needs of students facing such difficulties, International Schooling offers interactive and engaging learning plans that are customized to suit the distinctive needs of every student. </p>
        </div>
      </div>

      <div className='py-6 text-sm md:py-12 px-4 !mb-4 r-w md:px-12 rounded-xl bg-[#F7FBFF] shadow border'>
        <p>Education is necessary for the growth and development of every individual. A structured, comfortable and encouraging learning environment is necessary for students with specific learning needs. School plays a vital role in the development of your child. A right schooling atmosphere not only nurtures academic growth but also prepares them to handle every situation effectively. At International Schooling, our goal is to develop an inclusive learning space for all our students and offer them the opportunity to reach their full potential and become active contributors in the development of their nation. We strongly believe every child has the potential to be a changemaker when given the right resources, opportunities and teaching that suits their needs.  </p>
      </div>

      <div className='r-w py-6 mb-4'>
        <h2 className='text-lg md:text-2xl mb-4 text-center font-bold'>HEAR FROM OUR HAPPY PARENTS!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className='rounded-xl py-6 px-4 bg-gray-100 border'>
            <h3 className='text-blue-800 mb-2 font-semibold'>Riyad Bahloul (Grade 08 Parent)</h3>
            <p className='text-sm italic'>"This is the first experience with International Schooling, and me and my 2 kids are happy with it. Both kids are 12 and 9 years old and have already experienced the online school model while the covid time. Both are very happy with the curriculum, teachers and the One-To-One teaching method. Thank you International Schooling."</p>
          </div>
          <div className='rounded-xl py-6 px-4 bg-gray-100 border'>
            <h3 className='text-blue-800 mb-2 font-semibold'>Daniel Henderson (Grade 05 Parent)</h3>
            <p className='text-sm italic'>"As an expat in UAE for the last 5 years, I wanted a ‘real’ American School for my son and International Schooling is providing me exactly that… in fact much more than I expected. Parent to parent, I would recommend International Schooling without a doubt."</p>
          </div>
          <div className='rounded-xl py-6 px-4 bg-gray-100 border'>
            <h3 className='text-blue-800 mb-2 font-semibold'>Salwa Bassam (Grade 10 Parent)</h3>
            <p className='text-sm italic'>"My daughter is in Grade 10 at International Schooling. She wants to join a US university after completing Grade 12 and aspires to become an architect. After joining International Schooling, she is getting better academic scores and is more confident about fulfilling her dream. Many many thanks to International Schooling"</p>
          </div>
        </div>
      </div>
      <div className='py-6 bg-gradient-to-r from-red-800 to-blue-800 mb-4'>
        <ReviewsParent />
      </div>
      <div className="e-card border playing r-w py-6 px-2 md:px-4 flex flex-col !mb-4 justify-center items-center bg-blue-800 ">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <h2 className='text-center text-lg mb-2 md:text-3xl font-bold z-50 text-white  '>MAKE THE RIGHT CHOICE FOR YOUR CHILD</h2>
        <h3 className='text-center text-xl mb-4 md:text-4xl font-bold z-50 text-white  '>FULFILL YOUR CHILD'S DREAMS</h3>
        <Link href={"#titleOfForm"} className='btn z-50'>Connect Now</Link>
      </div>
    </div>
  )
}

export default HomePage