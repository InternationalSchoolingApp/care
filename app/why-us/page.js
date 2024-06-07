//import GluEffect from "@components/GluEffect";
import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import React from "react";


export const metadata = {
  title: "Why Choose International Schooling Care+ | Changing lives for the best",
  description: "Find out why International Schooling Care+ is the best choice for children with special needs, we offer affordable education tailored to each child's unique needs",
};

const WhyUs = () => {

  const faq1 = [
    {
      question: "How do your special educators create a supporting learning environment for children with special needs?",
      answer: "Our trained special educators are internationally and nationally certified to cater to every need of your child in the schooling environment. Their expertise with creating different learning plans and employing new methods of teaching will make learning easy and fun for your children."
    },
    {
      question: "How do you provide emotional support to students?",
      answer: "Unlike any other school, International Schooling ensures that personalized attention is given to every student. Academic and emotional needs of our students are met by our special educators to ensure that they are able to flourish in their lives. "
    },
    {
      question: "How is the curriculum at International Schooling different from other schools?",
      answer: "At International Schooling students are not expected to follow a strict curriculum that does not interest them or challenge them, instead the curriculum is tailor-made according to their requirements. The curriculum ensures that the students are able to maximize their strengths and work on their weaknesses. International schooling offers a wide range of courses that will prepare our students for the future."
    },
    {
      question: "What if my child feels a burden at school?",
      answer: "We ensure that our students do not feel any pressure or burden while pursuing their schooling with us. Regular feedback is taken from the parents and the students for continuous improvement."
    },
    {
      question: "How does International Schooling support the unique talents of the students?",
      answer: "Our school values the unique talents of our special students. We create an atmosphere of positivity and support where the student can grow and experiment new things in order to understand where they shine. We offer our students with ample opportunities to showcase their talents and be the leaders of tomorrow."
    },

  ]

  const faq2 = [
    {
      question: "Can I contact International Schooling if my child requires support after normal hours?",
      answer: "Our team of administration works around the clock for our students and parents. We understand that all the needs of our students are important and we are here to offer unconditional support."
    },
    {
      question: "Will my child have flexibility in timings if they join International Schooling?",
      answer: "International Schooling offers its students immense flexibility which empowers them to be who they are. Our special educators are available day and night for our students. The classes can be scheduled according to your preferred time which ensures that your children are able to learn better and also engage in activities outside school."
    },
    {
      question: "How does International Schooling ensure student safety?",
      answer: "At International Schooling, student safety is of utmost importance. We ensure that our students thrive in a secure learning environment. Our special educators and administrators take proper care of our students' wellbeing."
    },
    {
      question: "How will my child interact with other students?",
      answer: "Your child will have the opportunity to interact with students from different countries and understand different cultures. It helps them see the world with a new perspective. Every week the students engage in a Meet Your Classmates activity where they can discuss and share aspects about their culture. It is an activity that fosters bonding and harmony among the students."
    },
    {
      question: "Does International Schooling offer counseling services?",
      answer: "We are proud to have a special team of counselors who offer our students with free personal and career counseling. Our counselors are trained to understand and empathize with our students."
    },
  ]



  return (
    <div className="w-full ">
      <div className="r-w flex flex-col-reverse md:flex-row md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="md:w-2/3 !mb-4 md:mb-0 ">
          <h1 className="g-t mb-4 font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#001FCF] to-[#007EFF] inline-block text-transparent bg-clip-text">
            CHANGING LIVES FOR THE BEST
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
      <div className="r-w text-center md:text-left  py-8 px-8 bg-gradient-to-r from-[#001FCF] to-[#007EFF] !mb-8 rounded-2xl">
        <h2 className="text-white text-2xl font-bold mb-2">We Understand</h2>
        <p className="text-white md:text-justify text-sm">
          As parents we want our children to have the best education. However children with special needs are left behind by their peers and are unable to reach their full potential because of the rules and regulations. Thousands of children worldwide do not have access to quality education because of their special needs and learning differences.
        </p>
        <p className="text-white md:text-justify text-sm">
          This is why International Schooling is the best choice for your child. We are home to thousands of children from all around the world. We value and appreciate every student and are committed to providing them with unconditional support. Our curriculum is tailor-made for each child keeping in mind their strengths, uniqueness and limitations. We do not expect our students to conform to strict curriculum that will hamper their skills. Instead we give them the resources and opportunity to explore their skills and work on their strengths. We support them in becoming the leaders of tomorrow. Our internationally and nationally trained teachers will take care of academic as well as emotional needs of your child. They provide unconditional positive regard to all our students. They cater to the special needs of your child to ensure great academic as well as personal growth.
        </p>
      </div>
      {/* <div className="r-w md:flex md:items-center md:gap-12 py-6 md:py-16 text-center md:text-left">
        <div className="mb-6  text-left md:mb-0">
          <Image width={300} height={300} src={ImagePath.EXTRA_IMG} alt="why-us" className="h-auto" />

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
      </div> */}
      <div className="!mb-8 r-w ">
        <h2 className="mb-4 text-xl md:text-2xl font-black text-blue-600 text-center md:text-left">Frequently Asked Questions -</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            {
              faq1.map((item, index) => {
                return (
                  <div className="collapse collapse-arrow bg-base-200 mb-2" key={index}>
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title  font-medium">
                      {item.question}
                    </div>
                    <div className="collapse-content text-sm">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                  // <div tabIndex={index} key={index} className="collapse text-blue-900 mb-2 bg-base-200 shadow h-max !rounded ">

                )
              })
            }
          </div>
          <div>
            {
              faq2.map((item, index) => {
                return (
                  <div className="collapse collapse-arrow bg-base-200 mb-2" key={index}>
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title  font-medium">
                      {item.question}
                    </div>
                    <div className="collapse-content text-sm">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyUs;
