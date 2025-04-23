//import GluEffect from "@components/GluEffect";
import DemoForm from "@components/DemoForm";
//import PPCForm from "@components/PPCForm";
import ImagePath from "@constants/ImagePath";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact International Schooling Care+ for Special Needs Education",
  description:
    "Get in touch with International Schooling Care+ for inquiries, support, or to learn more about our special needs education programs.",
  robots: "index,follow",
};

const Contact = () => {
  return (
    <>
      {/* <GluEffect /> */}
      <div className="r-w flex flex-col lg:flex-row justify-center items-start pt-10 gap-10 !mb-8">
        <div className="text-[#5D5D5D] md:w-3/4 text-center md:text-left">
          <h1 className="text-2xl lg:text-6xl font-medium mb-4 md:mb-12">
            TALK TO US
          </h1>
          <p className="text-black mb-12 md:text-xl">
            {" "}
            Our counselors are trained and certified to create a safe space for
            you and your child. Their expertise and years of experience makes
            them the best at creating a special and customized learning plan for
            your child.
          </p>
          <Image
            src={"/contact-us-map-updated.webp"}
            className="h-auto"
            width={500}
            height={375}
            priority={true}
            alt="map-contact-us"
          />
        </div>
        <div className="md:w-2/3">
          <h2
            className=" text-sm md:text-2xl font-bold mb-4 text-center"
            id="formTitle"
          >
            Fill The Form To Meet Our Counselor
          </h2>
          <DemoForm folderName={"care"} />
        </div>
      </div>
    </>
  );
};

export default Contact;
