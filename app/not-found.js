import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page not found - International Schooling",
  description:
    "International Schooling, trusted by 14000+ students & parents in 135+ countries, is an accredited online school, offering Elementary, Middle & Online High School programs.",
  robots: "noindex, follow",
  referrer: "no-referrer-when-downgrade",
};

const Page = () => {
  return (
    <div className="min-h-[80svh] r-w flex items-center justify-center !mb-10">
      <svg
        width="700"
        height="800"
        className="w-[300px] md:w-[700px] h-auto absolute top-0 right-0"
        viewBox="0 0 1047 987"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.05">
          <path
            d="M171.4 205.82C-39.1056 193.663 -11.0735 64.208 29.2559 1H1054.68V758.835C1016.6 777.335 994.294 819.841 987.903 838.781C957.755 918.595 892.038 960.572 862.948 971.584C685.764 1022.86 603.122 925.114 583.949 869.835C555.917 756.192 423.293 742.317 360.485 749.585C102.906 742.185 190.132 529.348 265.943 423.855C399.228 281.67 258.45 219.255 171.4 205.82Z"
            fill="#1F00E1"
          />
          <path
            d="M1056 1H1054.68M1054.68 1H29.2558C-11.0735 64.208 -39.1056 193.663 171.4 205.82C258.45 219.255 399.228 281.67 265.943 423.855C190.132 529.348 102.906 742.185 360.485 749.585C423.293 742.317 555.917 756.192 583.949 869.835C603.122 925.114 685.764 1022.86 862.948 971.584C892.038 960.572 957.755 918.595 987.903 838.781C994.294 819.841 1016.6 777.335 1054.68 758.835V1Z"
            stroke="black"
          />
        </g>
      </svg>
      <div className="w-full h-max flex flex-col-reverse items-center gap-12 md:justify-between space-y-12 md:flex-row ">
        <div className="space-y-4 text-center md:text-left ">
          <h2 className="text-3xl md:text-6xl font-black bg-gradient-to-r from-[#007EFF] to-[#1F00E1] inline-block text-transparent bg-clip-text">
            Oh No!
          </h2>
          <p className=" px-4 md:px-0 md:text-lg">
            Oops! That page seems to have taken a detour. Let us guide you back
            to your destination.
          </p>
          <Link href={"/"}>
            <button className="btn rounded-full border-none bg-gradient-to-r from-[#007EFF] to-[#1F00E1] text-white px-6 !my-8">
              Back to Homepage
            </button>
          </Link>
        </div>
        <Image
          width={400}
          height={400}
          alt="not-found"
          priority
          src={"/not-found-image.png"}
          className="w-[200px] md:w-[600px] h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
