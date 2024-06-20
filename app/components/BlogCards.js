"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FallbackLoading from "@components/FallbackLoading";

const BlogCards = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countPerPage, setCountPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          count: countPerPage,
          type: "care"
        };
        const response = await fetch("/api/getPostsByNumbers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.status === "success") {
          setContent(data.data || []);
          // console.log("Blog Content: ", data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countPerPage]);

  const handleLoadMore = () => {
    setCountPerPage((prevVisibleCards) => prevVisibleCards + 3);
  };
  return (
    <>
      {loading ? (
        <FallbackLoading />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:pt-10 pt-5 r-w !mb-10">
            {content.slice(0, countPerPage).map((item, index) => (
              <Link
                key={index}
                className="flex"
                target="_blank"
                href={`/blog/${item.postName}`}
              >
                <div className="card shadow-md hover:shadow-xl duration-150 bg-white w-full">
                  <div className="card-body pt-0 px-0 relative">
                    <div className="absolute right-0 left-0 w-max text-sm font-medium top-0 m-auto p-2 rounded-b-lg bg-gradient-to-r from-[#007EFF] to-[#1F00E1] text-white">
                      {item.mainCategory}
                    </div>
                    <Image
                      width={500}
                      height={500}
                      src={item.featuredImg.includes("data:image") ? item.featuredImg : `https://is-website-fawn.vercel.app/${item.featuredImg}`}
                      // src={item.featuredImg}
                      priority
                      alt={item.postName}
                      className="bg-white rounded-t-2xl w-full mb-2 h-56 object-cover"
                    />
                    <h2 className="card-title text-[#5D5D5D] justify-center text-center mx-2 md:mx-3 mb-2 text-lg">
                      {item.title}
                    </h2>
                    <p className="text-[#5D5D5D] text-center mx-2 md:mx-3 text-xs capitalize px-4 mb-4">
                      {item.miniContent}
                    </p>
                    <div className="card-actions mx-auto">
                      <button className="btn bg-gradient-to-r from-[#007EFF] to-[#1F00E1] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {countPerPage && (
            <button
              onClick={handleLoadMore}
              className={`text-white bg-gradient-to-r from-[#007EFF] to-[#1F00E1] px-8 py-2 rounded-full mx-auto flex mt-5 hover:scale-105 duration-150 mb-10`}
            >
              Load More
            </button>
          )}
        </>
      )}
    </>
  );
};

export default BlogCards;
