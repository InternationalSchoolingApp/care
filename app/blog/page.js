import BlogCards from "@components/BlogCards";
import ImagePath from "@constants/ImagePath";
import React from "react";

export const metadata = {
  title: "Find CARE+ resources, reviews, tools, and much more",
  description:
    "Find Homeschooling CARE+ resources, curriculum, advice, reviews, tools, and much more",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

const page = () => {
  return (
    <>
      <div
        className="w-full md:h-[90svh] bg-cover relative z-10"
        style={{ backgroundImage: `url('${ImagePath.BLOG_COVER}')` }}
      >
        <div className="absolute bg-[#0C0055]/70 z-20 w-full md:h-[90svh] h-full"></div>
        <div className="relative text-center r-w z-20 text-white py-10 flex justify-center items-center h-full flex-col">
          <h1 className="md:text-5xl text-3xl font-semibold mb-2">
            A HUB FOR CARE+ RESOURCE
          </h1>
          <div className="md:text-xl text-lg font-medium mb-5">
            MOST EXTENSIVE RESOURCE LIBRARY
          </div>
          <div className="">
            Our regular blog posts keep you updated on the latest trends and
            ideas in education and much more about digital schooling. Experts at
            International Schooling, understand the dynamism associated with
            education, and record the same in the form of crisp blogs.
            Irrespective of you being a part of our family, these blogs are
            assured to guide and serve you in all aspects of life, particularly
            academics.
          </div>
        </div>
      </div>

      <div className="r-w">
        <BlogCards />
      </div>
    </>
  );
};

export default page;
