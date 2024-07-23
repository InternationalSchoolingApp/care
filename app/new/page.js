import ImagePath from "@constants/ImagePath";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#F5FAFF]">
      <div className="r-w py-10 md:flex items-center gap-10">
        <div className="text-center md:text-left md:w-3/4">
          <h1 className=" text-3xl md:text-6xl font-bold text-[#007EFF] mx-auto h-auto mb-3">
            <span className="bg-[#007EFF] py-1 px-3 text-white inline-block rounded-md">
              International
            </span>
            <br /> Schooling
          </h1>
          <Image
            src={ImagePath.CARE_PLUS_LOGO}
            width={200}
            height={100}
            alt="care_logo"
            className="mx-auto md:mx-0 h-auto mb-3"
          />
          <p className="text-black text-center md:text-justify mb-3 text-sm">
            International Schooling is an American Online School accredited by
            Cognia, USA, approved by College Board, USA, and powered by
            Discovery Education. We offer American curriculum for grades KG–12.
            <br />
            International Schooling Care+ is an initiative to offer special
            school education support to students with different learning needs.
            With over 80+ Special Educators, International Schooling has been
            supporting hundreds of special needs students since 2017.
          </p>
          <Link
            href={"/contact"}
            className="btn rounded-full bg-[#007EFF] text-white px-9 hover:bg-[#001FCF]"
          >
            Contact now
          </Link>
        </div>
        <div className="">
          <Image
            src={ImagePath.HERO}
            width={1000}
            height={900}
            alt="image"
            className=""
          />
        </div>
      </div>
      <div className="r-w grid md:grid-cols-3 gap-4 !mb-10">
        <div className="text-center bg-white border-2 rounded-lg border-gray-300 p-10">
          <h1 className="font-bold text-[#007EFF] text-3xl md:text-4xl ">
            KG-12
          </h1>
          <p className="text-sm">Supporting Students from 135+ Countries</p>
        </div>
        <div className="text-center bg-white border-2 rounded-lg border-gray-300 p-10">
          <h1 className="font-bold text-[#007EFF] text-3xl md:text-4xl ">
            12,000+
          </h1>
          <p className="text-sm">
            Dedicated & Motivated
            <br />
            Students
          </p>
        </div>
        <div className="text-center bg-white border-2 rounded-lg border-gray-300 p-10">
          <h1 className="font-bold text-[#007EFF] text-3xl md:text-4xl ">
            500+
          </h1>
          <p className="text-sm">
            Trained & Certified
            <br />
            Teachers
          </p>
        </div>
      </div>
      <div className="bg-[#0E083F] r-w md:p-10 p-5 rounded-3xl items-center md:flex gap-10 !mb-10">
        <div className="">
          <Image
            src={ImagePath.SPECIAL_EDUCATION_SUPPORT_IMAGE}
            width={1000}
            height={900}
            alt="image"
            className="md:mx-0 mx-auto h-auto mb-3"
          />
        </div>
        <div className="text-white md:text-justify text-center">
          <h2 className="text-2xl font-bold mb-2">Special Education Support</h2>
          <p className="text-sm">
            School education is the most basic need of every individual. As
            educators, we firmly believe that no child, under any circumstance,
            should be deprived of it. We also understand that every student is
            different and has unique learning needs. Expecting every child to
            learn using the same methods not only hampers their growth but also
            limits their individual potential. As every student is special in
            their own way, they deserve an education that celebrates and
            recognizes their differences.
            <br />
            Unlike the rigid traditional schools where children are forced to
            follow a strict line year after year, we, at International
            Schooling, celebrate diversity and welcome every student with open
            arms. Whether your child is a fast learner or a slow learner, has
            ADHD, autism, or learning disabilities, our commitment to
            accessibility, affordability, and inclusivity, is breaking barriers
            that stand between your child’s unique needs and their dreams.
            <br />
            Building on our school’s philosophy, ‘each child is unique and
            deserves an education as per their needs, and every decision we make
            revolves around the student’, the leadership at International
            Schooling customized a program; International Schooling Care+, for
            all our special students.
          </p>
        </div>
      </div>
      <div className="r-w !mb-10 text-black text-center">
        <h2 className="text-2xl mb-2 font-bold">
          What is International Schooling Care+
        </h2>
        <p className=" text-sm ">
          International Schooling Care+ is an initiative to provide special
          education support to students with different learning needs.
          Established with the aim to create smiles for students with accessible
          and excellent quality schooling, we tailor learning for each child to
          make them the best version of themselves. Our special educators work
          closely with students and parents to create custom learning plans for
          each student to support them not just academically, but in personal
          life as well.
          <br />
          <br />
          At International Schooling, students do not follow the curriculum;
          rather, the curriculum is designed to follow the students. Our
          teachers, administrators, management and counselors work round the
          clock to create an encouraging learning environment for all our
          students.
        </p>
      </div>
      <div className="r-w !mb-10">
        <div>
          <h2 className="font-bold text-black text-center text-2xl mb-5">
            HEAR FROM OUR HAPPY STUDENTS AND PARENTS -<br />
            REAL REVIEWS, REAL RESULTS!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-black">
          <div className="bg-white border-2 rounded-lg border-gray-300 p-6">
            <Image
              src={ImagePath.FEEDBACK_ICON}
              width={50}
              height={50}
              alt="icon"
              className="mb-2"
            />
            <h1 className="font-semibold text-md md:text-lg mb-2">
              Riyad Bahloul (Grade 08 Parent)
            </h1>
            <p className="text-justify text-sm ">
              "This is the first experience with International Schooling, and me
              and my 2 kids are happy with it. Both kids are 12 and 9 years old
              and have already experienced the online school model while the
              covid time. Both are very happy with the curriculum, teachers and
              the One-To-One teaching method. Thank you International
              Schooling."
            </p>
          </div>
          <div className="bg-white border-2 rounded-lg border-gray-300 p-6">
            <Image
              src={ImagePath.FEEDBACK_ICON}
              width={50}
              height={50}
              alt="icon"
              className="mb-2"
            />
            <h1 className="font-semibold text-md md:text-lg mb-2">
              Daniel Henderson (Grade 05 Parent)
            </h1>
            <p className="text-justify text-sm ">
              "As an expat in UAE for the last 5 years, I wanted a ‘real’
              American School for my son and International Schooling is
              providing me exactly that… in fact much more than I expected.
              Parent to parent, I would recommend International Schooling
              without a doubt."
            </p>
          </div>
          <div className="bg-white border-2 rounded-lg border-gray-300 p-6">
            <Image
              src={ImagePath.FEEDBACK_ICON}
              width={50}
              height={50}
              alt="icon"
              className="mb-2"
            />
            <h1 className="font-semibold text-md md:text-lg mb-2">
              Salwa Bassam (Grade 10 Parent)
            </h1>
            <p className="text-justify text-sm ">
              "My daughter is in Grade 10 at International Schooling. She wants
              to join a US university after completing Grade 12 and aspires to
              become an architect. After joining International Schooling, she is
              getting better academic scores and is more confident about
              fulfilling her dream. Many many thanks to International Schooling"
            </p>
          </div>
        </div>
      </div>
      <div className="e-card playing r-w py-4 px-2 md:px-4 flex flex-col !mb-10 justify-center items-center bg-gradient-to-r from-[#001FCF] via-[#007EFF] to-[#001FCF] ">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <h2 className="text-center text-xl mb-2 md:text-3xl font-bold z-50 text-white">
          MAKE THE RIGHT CHOICE FOR YOUR CHILD
        </h2>

        <Link href={"/contact"} className="btn rounded-full px-9 z-50">
          Talk to us
        </Link>
      </div>
      <div>
        <h3 className="text-[#F5FAFF] text-center text-sm">
          Internation Schooling
        </h3>
      </div>
    </div>
  );
};

export default page;
