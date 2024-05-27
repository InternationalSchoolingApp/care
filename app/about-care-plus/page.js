import GluEffect from "@components/GluEffect";
import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import React from "react";

const Extra = () => {
  return (
    <div className="w-full">
      <GluEffect />
      <div className="r-w md:flex md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="md:w-2/3 mb-4 md:mb-0 ">
          <h2 className="g-t mb-4 font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-text">
            Types of <br />
            Disabilities
          </h2>
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
            src={ImagePath.EXTRA_IMG}
            width={800}
            height={800}
            className="h-auto w-[200px] md:w-[400px] m-auto"
            alt="img"
          />
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b ">
        <Image
          width={200}
          height={200}
          src={"/happy-girl-sitting.png"}
          alt="first-img"
          className="h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            ADHD - Attention Deficit Hyperactivity Disorders
          </h2>
          <p>
            Is your son unable to sit in one place for too long? Does the
            teacher always complain about your daughter not paying attention in
            class? Does your child feel out of place with other students in the
            classroom? If these situations seem familiar for your child, they
            are not alone. It is what they have and not who they are.
            Attention-deficit hyperactivity disorder affects their development,
            which makes them struggle at school because of lack of attention and
            increased impulsivity. In a class of 30–50 students
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b">
        <Image
          width={200}
          height={200}
          src={"/happy-boy-sitting.png"}
          alt="first-img"
          className="h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Autism Spectrum Disorder
          </h2>
          <p>
            For some children, navigating social aspects of life can be
            difficult. Making friends, understanding social norms and
            regulations can be confusing for them. Difficulties with
            communication can make it tough for them to express their needs,
            wants, answer or ask questions in a classroom setting. They can have
            issues with adjustment making it difficult for them to fit in with
            their classmates. Children with autism have different views about
            the world, the skills they possess have the power to create magic if
            given the proper atmosphere
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b">
        <Image
          width={200}
          height={200}
          src={"/happy-boy-sitting.png"}
          alt="first-img"
          className="h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Autism Spectrum Disorder
          </h2>
          <p>
            For some children, navigating social aspects of life can be
            difficult. Making friends, understanding social norms and
            regulations can be confusing for them. Difficulties with
            communication can make it tough for them to express their needs,
            wants, answer or ask questions in a classroom setting. They can have
            issues with adjustment making it difficult for them to fit in with
            their classmates. Children with autism have different views about
            the world, the skills they possess have the power to create magic if
            given the proper atmosphere
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b">
        <Image
          width={200}
          height={200}
          src={"/happy-boy-sitting.png"}
          alt="first-img"
          className="h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Autism Spectrum Disorder
          </h2>
          <p>
            For some children, navigating social aspects of life can be
            difficult. Making friends, understanding social norms and
            regulations can be confusing for them. Difficulties with
            communication can make it tough for them to express their needs,
            wants, answer or ask questions in a classroom setting. They can have
            issues with adjustment making it difficult for them to fit in with
            their classmates. Children with autism have different views about
            the world, the skills they possess have the power to create magic if
            given the proper atmosphere
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left !mb-4">
        <Image
          width={200}
          height={200}
          src={"/happy-boy-sitting-front.png"}
          alt="first-img"
          className="h-auto rounded-xl w-2/3 md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Learning Disabilities (Dyscalculia, Dysgraphia, Dyslexia)
          </h2>
          <p>
            Has reading and writing always been difficult for your child? Is
            your child’s homework full of mistakes encircled in red by the
            teacher? Is math your child’s greatest enemy? No matter how hard
            they try, they are never able to get their studies right! Learning
            disabilities can make it difficult for the child to think, speak,
            solve mathematical equations, write or read. To accommodate the
            needs of students facing such difficulties,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
