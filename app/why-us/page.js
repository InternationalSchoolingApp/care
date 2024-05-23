import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full bg-[#F7FBFF]">
      <div className="r-w md:flex md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="md:w-2/3 mb-4 md:mb-0 ">
          <h1 className="g-t mb-4 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-text">
            CHANGING LIVES FOR <br />
            THE BEST
          </h1>
          <p className="mb-4 text-xl font-medium text-gray-800 md:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-800 md:text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div>
          <Image
            src={ImagePath.HERO_IMG}
            width={800}
            height={800}
            className="h-auto w-[200px] md:w-[400px] m-auto"
            alt=""
          />
        </div>
      </div>
      <div className="r-w py-8 px-8 bg-gradient-to-r from-[#001FCF] to-[#007EFF] mb-4 rounded-2xl">
        <h2 className="text-white text-2xl font-bold mb-2">We Understand</h2>
        <p className="text-white text-justify">
          Each child is physically, emotionally and mentally distinct. Expecting
          every child to fit in the same mold is similar to asking everyone to
          wear the same- sized shoe. Similarly, expecting every child to fit in
          the same learning environment defeats the purpose of learning as all
          of their energy is absorbed in trying to fit in. Education loses its
          essence when children who need extra support are forced to conform to
          standards that do not suit them. Therefore, we firmly believe every
          child deserves a learning space that does not hinder their potential
          and provides ample room for growth. <br />
          We understand the challenges people around the globe face when it
          comes to education, limited by their personal, physical, or social
          constraints. Therefore, at International Schooling, we create a place
          for every student. When we say every student, it also includes those
          limited and restricted by various challenges and disabilities. We
          strive to create smiles on every student’s face, and we believe that
          we are capable and fortunate to be able to bring about a positive
          impact. We do not ask our students to adapt to the school environment;
          rather, we create an environment that adapts to every student’s unique
          requirements.
        </p>
      </div>
      <div className="r-w md:flex md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div>
          <Image
            src={ImagePath.WHY_IS_IMG_2}
            width={800}
            height={800}
            className="h-auto w-[200px] md:w-[400px] m-auto"
            alt=""
          />
        </div>
        <div className="md:w-2/3 mb-4 md:mb-0 ">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Most Affordable Accredited Online School
          </h2>
          <p className="text-gray-800 md:text-justify ">
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
