"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImagePath from "@constants/ImagePath";
import Menu from "./Menu";
import UrlPath from "@constants/UrlPath";
import dynamic from "next/dynamic";

const DynamicModal = dynamic(() => import("./MobileMenu.js"), {
  ssr: false,
});

const CommonHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuItem = [
    {
      title: "Home",
      link: UrlPath.HOME,
    },
    {
      title: "About Care+",
      link: UrlPath.EXTRA,
    },
    {
      title: "Why IS",
      link: UrlPath.WHY,
    },
    {
      title: "Posts",
      link: UrlPath.POST,
    },
    {
      title: "Talk to us",
      link: UrlPath.CONTACT,
    },
  ];

  return (
    <header className="z-[999999] w-full py-3 border-b sticky top-0 left-0 right-0 text-black bg-[#F7FBFF]/70 bb shadow ">
      <div className="r-w flex justify-between items-center gap-4">
        <Link href={"/"}>
          <Image
            src={ImagePath.IS_LOGO}
            width={300}
            height={100}
            priority
            className="w-[170px] md:w-[300px] h-auto "
            alt="care plus logo"
          />
        </Link>
        <div className="flex gap-2 items-center flex-row-reverse md:flex-row">
          <Menu menu={menu} items={menuItem} />
        </div>
      </div>
      {isOpen && <DynamicModal menuItem={menuItem} />}
    </header>
  );
};

export default CommonHeader;
