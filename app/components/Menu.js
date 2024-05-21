import Link from 'next/link';
import React from 'react'

const Menu = ({ menu, items }) => {

    return (
        <div className='w-full flex flex-row-reverse md:flex-row gap-2 md:gap-12 items-center'>
            <div className='hidden  md:flex gap-5 items-center font-light'>
                {
                    items.map((item, index) => {
                        return <Link key={index} className='hover:text-blue-500' href={item.link}>{item.title}</Link>
                    })
                }
            </div >
            <label className="swap swap-rotate btn btn-square rounded p-2  md:hidden ">
                <input onClick={() => { menu(); }} type="checkbox" />
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
            <button className='btn'>Register Now</button>
        </div >
    )
}

export default Menu