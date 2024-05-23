import ImagePath from "@constants/ImagePath";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="r-w flex flex-col md:flex-row justify-center items-center pt-10 gap-10">
        <div className="text-[#5D5D5D] w-3/4">
          <h1 className="text-2xl md:text-6xl font-medium md:text-left text-center mb-4">
            CONTACT US
          </h1>
        </div>
        <Image
          src={ImagePath.CONTACT_MAP}
          className="w-full h-auto"
          width={500}
          height={500}
          priority
          alt="map-contact-us"
        />
      </div>

      <div className="r-w !mt-10">
        <div className="card shadow-xl border border-gray-300 rounded-2xl w-full">
          <div className="card-body">
            <h2 className="card-title justify-center bg-gradient-to-r from-[#007EFF] to-[#1F00E1] text-white w-max px-5 py-2 rounded-2xl mb-5 mx-auto">
              Enrollment & Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-full border-[#5D5D5D] md:border-r border-b md:border-b-0 md:py-7 py-10 mb-5 flex justify-center flex-col items-center">
                <div className="flex gap-4 mb-3">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.619189 14.4468C0.618509 16.9039 1.26051 19.303 2.48126 21.4176L0.502441 28.6426L7.89633 26.7039C9.94139 27.8172 12.2327 28.4006 14.5612 28.4007H14.5673C22.254 28.4007 28.5111 22.1459 28.5144 14.4578C28.5159 10.7324 27.0664 7.22933 24.4328 4.59377C21.7998 1.95844 18.2979 0.506339 14.5667 0.504639C6.87915 0.504639 0.622477 6.75916 0.619303 14.4468"
                      fill="url(#paint0_linear_187_2718)"
                    />
                    <path
                      d="M0.121282 14.4423C0.120489 16.9877 0.785499 19.4727 2.04978 21.663L0 29.147L7.65901 27.1388C9.76932 28.2894 12.1453 28.896 14.563 28.897H14.5693C22.5317 28.897 29.0136 22.4171 29.017 14.4539C29.0184 10.5946 27.5167 6.96555 24.7891 4.23557C22.0612 1.50594 18.4341 0.00158687 14.5693 0C6.60545 0 0.124456 6.47895 0.121282 14.4423ZM4.6825 21.2858L4.39653 20.8318C3.19436 18.9203 2.55984 16.7114 2.56075 14.4432C2.56324 7.82427 7.94998 2.43924 14.5738 2.43924C17.7815 2.4406 20.7961 3.69105 23.0635 5.95982C25.3308 8.22881 26.5784 11.245 26.5776 14.453C26.5747 21.0719 21.1878 26.4576 14.5693 26.4576H14.5645C12.4094 26.4565 10.2958 25.8777 8.45256 24.784L8.0139 24.5239L3.46889 25.7155L4.6825 21.2858Z"
                      fill="url(#paint1_linear_187_2718)"
                    />
                    <path
                      d="M10.9582 8.40449C10.6877 7.80341 10.4031 7.79128 10.1459 7.78074C9.93533 7.77167 9.69458 7.77235 9.45405 7.77235C9.2133 7.77235 8.82214 7.86292 8.4915 8.22393C8.16053 8.58528 7.22791 9.45851 7.22791 11.2346C7.22791 13.0107 8.52154 14.7271 8.70188 14.9682C8.88244 15.2089 11.1993 18.9702 14.8686 20.4172C17.9181 21.6197 18.5386 21.3805 19.2005 21.3202C19.8624 21.2601 21.3364 20.4472 21.6371 19.6043C21.938 18.7614 21.938 18.0389 21.8478 17.8879C21.7576 17.7375 21.5168 17.6472 21.1558 17.4667C20.7947 17.2862 19.0199 16.4128 18.689 16.2924C18.3581 16.172 18.1174 16.1119 17.8767 16.4734C17.6359 16.8343 16.9446 17.6472 16.7339 17.8879C16.5234 18.1293 16.3127 18.1593 15.9518 17.9787C15.5906 17.7976 14.428 17.4169 13.0486 16.1872C11.9755 15.2303 11.251 14.0486 11.0404 13.6872C10.8298 13.3263 11.0178 13.1306 11.1988 12.9508C11.361 12.789 11.5599 12.5292 11.7406 12.3185C11.9206 12.1077 11.9807 11.9573 12.1011 11.7165C12.2215 11.4755 12.1612 11.2647 12.0711 11.0841C11.9807 10.9036 11.2792 9.11824 10.9582 8.40449Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_187_2718"
                        x1="1401.1"
                        y1="2814.3"
                        x2="1401.1"
                        y2="0.504639"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1FAF38" />
                        <stop offset="1" stopColor="#60D669" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_187_2718"
                        x1="1450.85"
                        y1="2914.7"
                        x2="1450.85"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#F3F3F3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="font-medium text-lg">CHAT WITH US</p>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    className="hover:text-[#007AFE] duration-150 text-center md:text-left"
                    href={"https://wa.me/+17273902419"}
                    target="_blank"
                  >
                    +1 (727) 390-2419
                  </Link>
                </div>
              </div>

              <div className="w-full flex justify-center flex-col items-center md:py-5 py-10">
                <div className="flex gap-4 mb-2">
                  <svg
                    width="28"
                    height="21"
                    viewBox="0 0 28 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0408 12.3676L14.0028 15.0766L17.822 12.4418L26.383 20.888C26.1576 20.9608 25.9168 21 25.6662 21H2.3338C2.0258 21 1.7318 20.9398 1.4616 20.832L10.0408 12.3676ZM28 5.4264V18.6662C28 19.012 27.9244 19.3396 27.79 19.635L19.3984 11.3554L28 5.4264ZM1.32104e-06 5.5006L8.4588 11.2854L0.148401 19.4866C0.0499754 19.2243 -0.000297127 18.9464 1.32104e-06 18.6662V5.5006ZM25.6662 0C26.9542 0 28 1.0444 28 2.3338V3.1542L13.9972 12.8072L1.32104e-06 3.234V2.3338C1.32104e-06 1.0458 1.0444 0 2.3338 0H25.6662Z"
                      fill="url(#paint0_linear_187_2724)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_187_2724"
                        x1="14"
                        y1="0"
                        x2="14"
                        y2="21"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#007EFF" />
                        <stop offset="1" stopColor="#1F00E1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="font-medium text-lg">EMAIL US</p>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    className="hover:text-[#007AFE] duration-150"
                    href={"mailto:info@internationalschooling.org"}
                    target="_blank"
                  >
                    info@internationalschooling.org
                  </Link>
                  <Link
                    className="hover:text-[#007AFE] duration-150"
                    href={"mailto:support@internationalschooling.org"}
                    target="_blank"
                  >
                    support@internationalschooling.org
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="r-w bg-gradient-to-r from-[#007EFF] to-[#1F00E1] mx-auto rounded-2xl py-10 !my-10">
        <div className="bg-white w-max mx-auto rounded-xl">
          <h3 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-[#007EFF] to-[#1F00E1] md:text-2xl text-xl font-semibold mb-10 py-1 px-4">
            Addresses
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 px-16">
          <div className="w-full border-b md:border-b-0 md:border-r border-r-0 pb-5 md:pb-0 border-white md:ml-14 ml-0">
            <div className="text-white mb-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.363 38.3128L16.7972 36.6969C18.4245 34.8331 19.8882 33.0649 21.1906 31.383L22.2656 29.9647C26.7544 23.9167 29 19.1165 29 15.5687C29 7.9956 22.8952 1.85669 15.363 1.85669C7.83089 1.85669 1.72607 7.9956 1.72607 15.5687C1.72607 19.1165 3.97163 23.9167 8.46046 29.9647L9.53551 31.383C11.3934 33.7635 13.3372 36.0735 15.363 38.3128Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.363 21.1757C18.5012 21.1757 21.0451 18.6318 21.0451 15.4937C21.0451 12.3555 18.5012 9.81158 15.363 9.81158C12.2249 9.81158 9.68097 12.3555 9.68097 15.4937C9.68097 18.6318 12.2249 21.1757 15.363 21.1757Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-medium">SINGAPORE</h3>
              </div>
              <p className="">
                111 SOMERSET ROAD, LEVEL 13,
                <br />
                TRIPLEONE SOMERSET, SINGAPORE - 238164
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="text-white mb-5 flex flex-col justify-center items-start">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.363 38.3128L16.7972 36.6969C18.4245 34.8331 19.8882 33.0649 21.1906 31.383L22.2656 29.9647C26.7544 23.9167 29 19.1165 29 15.5687C29 7.9956 22.8952 1.85669 15.363 1.85669C7.83089 1.85669 1.72607 7.9956 1.72607 15.5687C1.72607 19.1165 3.97163 23.9167 8.46046 29.9647L9.53551 31.383C11.3934 33.7635 13.3372 36.0735 15.363 38.3128Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.363 21.1757C18.5012 21.1757 21.0451 18.6318 21.0451 15.4937C21.0451 12.3555 18.5012 9.81158 15.363 9.81158C12.2249 9.81158 9.68097 12.3555 9.68097 15.4937C9.68097 18.6318 12.2249 21.1757 15.363 21.1757Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-medium">USA</h3>
              </div>
              <p className="">
                3710 RAWLINS ST. 1412/SUITE 1420 DALLAS,
                <br />
                TEXAS 75219
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
