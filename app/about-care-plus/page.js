//import GluEffect from "@components/GluEffect";
import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Care+ | International Schooling for Special Needs",
  description:
    "Learn about Care+, our initiative dedicated to providing tailored education for children with special needs. Discover how we cherish each child's uniqueness and nurture their remarkable talents.",
  robots: "index,follow",
};

const Extra = () => {
  return (
    <div className="w-full">
      {/* <GluEffect /> */}
      <div className="r-w flex  flex-col-reverse md:flex-row md:gap-12 py-6 md:py-16 md:items-center text-center md:text-left">
        <div className="md:w-2/3 mb-4 md:mb-0 ">
          <Image
            priority
            src={ImagePath.LOGO}
            width={200}
            height={200}
            className="h-auto mb-6 m-auto md:mx-0 w-[200px] md:w-[300px]"
            alt="logo-image"
          />
          <h1 className="mb-2 text-lg font-medium text-gray-800 md:text-justify">
            Every Child is Special and Deserves an Education as per Their Own
            Needs
          </h1>
          <p className="text-gray-800 md:text-justify text-sm">
            There are no two children in the world that are the same. Every
            child is different and their uniqueness needs to be cherished. When
            it comes to special children their uniqueness shines more brightly,
            lighting the world with their remarkable skills. Special children
            possess great talents. Their creativity and innovations can bring
            revolution in the world. They look at the world with a unique lens
            and have incredible capacities. Many children with autism have the
            ability to hyperfocus and complete tasks to perfection. Their work
            is often beyond expectations and it shows their unique mind.
            Likewise, children with down syndrome have exceptional memory and
            children with ADHD are committed to their goals even in the face of
            adversary. The resilience and determination that children with
            special needs show is an inspiration to the world. They are
            contributing members of society and their unique needs make them
            more special and important. Proper guidance and nurturance can help
            them grow out of their limitations and support them into becoming
            their best selves. Schooling is the place where their talents and
            skills are discovered and developed. Schooling paves the way for
            these young minds to make meaningful contributions to society.
          </p>
        </div>
        <Image
          priority
          src={"/boy_1.webp"}
          width={400}
          height={400}
          className="h-auto border rounded-xl w-[300px] md:w-[400px] mx-auto bg-white shadow mb-4 md:mb-0 "
          alt="img"
        />
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-justify border-b ">
        <Image
          priority
          width={200}
          height={200}
          src={"/adhd_portrait.jpg"}
          alt="first-img"
          className="h-auto rounded-xl  md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            ADHD - Attention Deficit Hyperactivity Disorders
          </h2>
          <p className="text-sm text-justify">
            Is your son unable to sit in one place for too long? Does the
            teacher always complain about your daughter not paying attention in
            class? Does your child feel out of place with other students in the
            classroom? If these situations seem familiar for your child, they
            are not alone. It is what they have and not who they are.
            Attention-Deficit Hyperactivity Disorder affects their development,
            which makes them struggle at school because of lack of attention and
            increased impulsivity. In a class of 30–50 students, your child is
            not able to pay attention, has problems with listening, and scoring
            well in a strict traditional schooling system. International
            Schooling, with its One-to-One learning, offers the much-needed
            flexibility and customization essential for students who have ADHD.
            Our internationally trained and certified teachers, with vast
            experience and expertise in their respective fields, create lesson
            plans and study hours that suit our students the best. They focus on
            the strengths of every individual and provide support in areas where
            they struggle. Personalized attention and tailored curriculum cater
            to the unique needs of our students who have ADHD. They also create
            structured learning environments that enable them to reach their
            full potential, foster independence, and help them thrive to the
            best of their capabilities. Our educational programs also employ
            behavioral strategies to manage impulsivity and hyperactivity,
            creating a positive and supportive atmosphere for learning.
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left border-b">
        <Image
          width={200}
          priority
          height={200}
          src={"/asd_portrait.jpg"}
          alt="first-img"
          className="h-auto rounded-xl md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Autism Spectrum Disorder
          </h2>
          <p className="text-sm text-justify">
            For some children, navigating social aspects of life can be
            difficult. Making friends, understanding social norms and
            regulations can be confusing for them. Difficulties with
            communication can make it tough for them to express their needs,
            wants, answer or ask questions in a classroom setting. They can have
            issues with adjustment making it difficult for them to fit in with
            their classmates. Children with autism have different views about
            the world, the skills they possess have the power to create magic if
            given the proper atmosphere. International Schooling is committed to
            making the dreams of thousands of students who have Autism a
            reality. It offers individualized support and educational programs
            that incorporate social skills training to help them communicate,
            inculcate appropriate social behavior and teaches them to navigate
            social situations effectively. Our teachers focus on individual
            interests, strengths and skills and develop lesson plans that
            improve the efficiency of communication between them and the
            students. It enhances the learning, understanding and productivity
            of every student. We have over 500+ courses to cater to the diverse
            interests of our students.
          </p>
        </div>
      </div>
      <div className="r-w py-6 md:flex md:items-center md:gap-5 text-center md:text-left !mb-4">
        <Image
          priority
          width={200}
          height={200}
          src={"/ld_portrait.jpg"}
          alt="first-img"
          className="h-auto rounded-xl md:w-[300px] m-auto md:mx-0 mb-4 md:mb-0"
        />
        <div className="w-full">
          <h2 className="text-sm md:text-lg font-semibold mb-2">
            Learning Disabilities (Dyscalculia, Dysgraphia, Dyslexia)
          </h2>
          <p className="text-sm text-justify">
            Has reading and writing always been difficult for your child? Is
            your child’s homework full of mistakes encircled in red by the
            teacher? Is math your child’s greatest enemy? No matter how hard
            they try, they are never able to get their studies right! Learning
            disabilities can make it difficult for the child to think, speak,
            solve mathematical equations, write or read. To accommodate the
            needs of students facing such difficulties, International Schooling
            offers interactive and engaging learning plans that are customized
            to suit the distinctive needs of every student. The courses are full
            of immersive content that is taught through flashcards, colorful
            placards and videos that significantly enhance the understanding of
            students. Flexible deadlines and tailor-made curriculum enable our
            students with learning disabilities to learn at their own speed,
            which helps them build the necessary skills, step- by- step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
