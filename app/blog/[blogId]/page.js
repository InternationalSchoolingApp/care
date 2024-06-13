import FallbackLoading from "@components/FallbackLoading";
import React from "react";
import { notFound } from "next/navigation";
import Pathname from "./Pathname";
import styles from "./BlogPostStyles.module.css";

export async function generateMetadata({ params }) {
  const baseUrl = process.env.BASEURL;
  const postUrl = params.blogId;
  try {
    const requestBody = { url: postUrl };
    const response = await fetch(`${baseUrl}/api/getPost`, {
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
      const postData = data.data;
      return {
        title: postData.title || "Default Title",
        description: postData.description || "Default Description",
        metadataBase: new URL(process.env.BASEURL),
        openGraph: {
          images: [postData.featuredImg || "/default-image.png"],
        },
      };
    } else {
      return {
        title: "Not Found",
        description: "Post not found",
        metadataBase: new URL(process.env.BASEURL),
        openGraph: {
          images: ["/not-found.png"],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      title: "Error",
      description: "There was an error fetching the post data",
      metadataBase: new URL(process.env.BASEURL),
      openGraph: {
        images: ["/error.png"],
      },
    };
  }
}

async function page({ params }) {
  const baseUrl = process.env.BASEURL;
  const postUrl = params.blogId;
  let post = null;
  let error = null;

  try {
    const requestBody = { url: postUrl };
    const response = await fetch(`${baseUrl}/api/getPost`, {
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
      post = data.data;
    } else {
      return notFound();
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error = "Failed to load post data";
    return notFound();
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <FallbackLoading />;
  }

  return (
    <>
      <div className={styles["blog-post"]}>
        <div className="r-w space-y-5">
          <div className="absolute md:z-20 top-0 left-0">
            <svg
              className="absolute md:w-[33vw] w-[50vw]"
              viewBox="0 0 641 668"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.05"
                d="M553.782 145.072C502.396 94.6647 509.941 27.8215 520.136 0.700836H0.765481V650.985C152.967 702.861 238.734 622.029 262.592 575.129C277.763 468.44 377.396 447.886 425.316 450.945C487.469 454.37 536.857 442.176 553.782 435.651C710.389 368.604 619.035 213.996 553.782 145.072Z"
                fill="#1F00E1"
              />
            </svg>

            <svg
              className="absolute md:w-[52vw] w-[80vw]"
              viewBox="0 0 1023 956"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.05"
                d="M857.607 198.79C1061.93 186.991 1034.72 61.347 995.574 0H0.283418V735.523C37.2459 753.478 58.8929 794.733 65.096 813.115C94.358 890.579 158.144 931.321 186.379 942.008C358.357 991.77 438.571 896.907 457.18 843.255C484.389 732.958 613.116 719.492 674.078 726.546C924.088 719.364 839.425 512.793 765.842 410.405C636.474 272.406 773.115 211.829 857.607 198.79Z"
                fill="#1F00E1"
              />
            </svg>
          </div>

          <div className="!mt-10 r-w text-[#3E3E3E] relative z-20">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
              <div className="w-full">
                <h1 className="text-2xl md:text-6xl font-medium mb-2 text-center md:text-left">
                  {post.title}
                </h1>
                <Pathname />
              </div>

              {post.featuredImg && (
                <div className="md:w-3/4 w-full">
                  <img
                    src={`https://is-website-fawn.vercel.app/${post.featuredImg}`}
                    width={500}
                    height={500}
                    alt="blog-banner"
                    className="w-full rounded-2xl"
                  />
                </div>
              )}
            </div>
            <div
              className="w-full !my-6 !space-y-4"
              dangerouslySetInnerHTML={{ __html: post.contentEncoded }}
            />
          </div>

          <div className="r-w flex justify-start items-center gap-5 !mb-10">
            <div className="flex justify-center gap-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p className="m-auto mt-2 text-lg">{post.creator}</p>
            </div>

            <div className="flex justify-center gap-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <p className="m-auto mt-2 text-lg">
                {new Date(post.pubDate.seconds * 1000).toLocaleDateString(
                  "en-US",
                  {
                    month: "short", // Abbreviated month name (e.g., Jan, Feb)
                    day: "2-digit", // Two-digit day (e.g., 01, 02)
                    year: "numeric", // Full year (e.g., 2024)
                  }
                )}
              </p>
            </div>

            <div className="flex justify-center gap-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="m-auto mt-2 text-lg">
                {new Date(post.pubDate.seconds * 1000).getHours() % 12 || 12}:
                {new Date(post.pubDate.seconds * 1000)
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}{" "}
                {new Date(post.pubDate.seconds * 1000).getHours() >= 12
                  ? "PM"
                  : "AM"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
