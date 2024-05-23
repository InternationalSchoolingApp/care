"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImagePath from '@constants/ImagePath';
// import { ThemeChanger } from './ThemeChanger';
import Menu from './Menu';
import UrlPath from '@constants/UrlPath';

const CommonHeader = () => {


    const [isOpen, setIsOpen] = useState(false);

    const menu = () => {
        setIsOpen((prev) => !prev);
    }

    const menuItem = [
        {
            title: 'About us',
            link: UrlPath.ABOUT,
        },
        {
            title: 'Why us',
            link: UrlPath.WHY,
        },
        {
            title: 'Contact us',
            link: UrlPath.CONTACT,
        },
    ];

    return (
        <header className='w-full py-3 border-b  backdrop-blur sticky top-0 left-0 right-0 text-black bb'>
            <div className='r-w flex justify-between items-center gap-4'>
                <Link href={"/"}>
                    <Image src={ImagePath.LOGO} width={300} height={200} className='w-[80px] md:w-[140px] h-auto ' alt='care plus logo' />
                </Link>
                <div className='flex gap-2 items-center flex-row-reverse md:flex-row'>
                    <Menu menu={menu} items={menuItem} />
                </div>
            </div>
            {
                isOpen &&
                <div className='flex flex-col md:hidden w-full rounded px-2 py-6  '>
                    {
                        menuItem.map((item, index) => {
                            return <Link key={index} className='hover:text-blue-500 w-full mb-2  py-2 px-4 rounded hover:bg-base-200' href={item.link}>{item.title}</Link>
                        })
                    }
                </div>
            }

        </header>
    );
}

export default CommonHeader;
