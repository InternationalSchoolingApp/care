import GluEffect from "@components/GluEffect";
import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full ">
      <GluEffect />
      <div className="r-w flex flex-col-reverse md:flex-row md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="md:w-2/3 !mb-4 md:mb-0 ">
          <h1 className="g-t mb-4 font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-text">
            CHANGING LIVES FOR
            THE BEST
          </h1>
          <p className="mb-4 text-xl font-medium text-gray-800 md:text-justify">
            Each Child Is Unique And Deserves An Education As Per Their Own Needs.
          </p>
          <p className="text-gray-800 md:text-justify ">
            In the rollercoaster of life, countless individuals find themselves derailed or lost by the obstacles of inaccessible and unaffordable education. This harsh reality not only crushes their hope for a better life but also inflicts deep wounds upon the dreams and aspirations of those seeking knowledge and opportunity.
            <br />
            More often than not, traditional education systems fail to find ways to support students with different learning needs and speeds and create an environment full of restrictions. Especially for physically challenged students and students with special needs, it becomes extremely difficult to learn and respond in a classroom of 30 students. They need extra attention and guidance to match pace with their peers and fulfill their learning needs.
          </p>
        </div>
        <div>
          <Image
            src={ImagePath.HERO_IMG}
            width={800}
            height={800}
            className="h-auto w-2/3 mb-8 md:mb-0 md:w-[400px] m-auto  "
            alt=""
          />
        </div>
      </div>
      <div className="r-w text-center md:text-left py-8 px-8 bg-gradient-to-r from-[#001FCF] to-[#007EFF] mb-4 rounded-2xl">
        <h2 className="text-white text-2xl font-bold mb-2">We Understand</h2>
        <p className="text-white md:text-justify text-sm">
          As parents we want our children to have the best education. However children with special needs are left behind by their peers and are unable to reach their full potential because of the rules and regulations. Thousands of children worldwide do not have access to quality education because of their special needs and learning differences.
        </p>
        <p className="text-white md:text-justify text-sm">
          This is why International Schooling is the best choice for your child. We are home to thousands of children from all around the world. We value and appreciate every student and are committed to providing them with unconditional support. Our curriculum is tailor-made for each child keeping in mind their strengths, uniqueness and limitations. We do not expect our students to conform to strict curriculum that will hamper their skills. Instead we give them the resources and opportunity to explore their skills and work on their strengths. We support them in becoming the leaders of tomorrow. Our internationally and nationally trained teachers will take care of academic as well as emotional needs of your child. They provide unconditional positive regard to all our students. They cater to the special needs of your child to ensure great academic as well as personal growth.
        </p>
      </div>
      <div className="r-w md:flex md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Image
            src={ImagePath.WHY_IS_IMG_2}
            width={800}
            height={800}
            className="h-auto w-2/3 m-auto md:w-[400px]"
            alt=""
          />
        </div>
        <div className="md:w-2/3 mb-4 md:mb-0 ">
          <h2 className=" md:text-2xl font-bold mb-2 text-gray-800">
            Most Affordable Accredited Online School
          </h2>
          <p className="text-gray-800 md:text-justify text-sm">
            Through our unwavering commitment to make education accessible and
            affordable to every student across the globe, we aim to remove the
            barriers that hinder so many students from realizing their full
            potential. We have officially become the world’s most affordable
            accredited online school that also offers scholarships, financial
            aid and inclusive programs. Students who have fallen out of the
            mainstream education system for whatever reason are welcome to talk
            to us, and we will do our best to support them by providing them
            with curated and customized learning solutions hand-picked and
            designed for them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
