import Link from "next/link";
import React from "react";

const MobileMenu = ({ menuItem }) => {
  return (
    <div className="flex flex-col lg:hidden w-full rounded px-2 py-6  ">
      {menuItem.map((item, index) => {
        return (
          <Link
            key={index}
            className="hover:text-blue-500 font-medium w-full mb-2  py-2 px-4 rounded hover:bg-base-200"
            href={item.link}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
