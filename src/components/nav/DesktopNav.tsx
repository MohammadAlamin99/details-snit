import React from 'react'
import CartIcon from '../svg/CartIcon'
import Image from 'next/image'
import Link from 'next/link'
export default function DesktopNav() {
    return (
        <div>
            <nav className="hidden lg:block bg-white sticky top-0 z-40">

                {/* Container */}
                <div className="max-w-[1720px] mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

                    {/* Logo */}
                    <Link href='/'>
                        <Image src="/images/logo.png" alt="Logo" width={222} height={48} />
                    </Link>

                    {/* Search */}
                    <div className='flex'>
                        <div className='bg-[#F1F5FF] p-2 rounded-lg'>
                            <Image src="/images/cameraIcon.svg" alt="Brand" width={32} height={32} className='cursor-pointer' />
                        </div>
                        <div className="flex items-center gap-2 bg-[#F1F5FF] rounded-xl pl-3 py-2 flex-1 mx-8 relative max-w-full w-[671px]">
                            <Image src="/images/mic-02.svg" alt="Brand" width={32} height={32} className='cursor-pointer' />
                            <input
                                className="flex-1 bg-transparent text-sm outline-none placeholder-[#6A717F] text-[16px] font-normal font-inter placeholder:font-inter"
                                placeholder="Search in Cart and Get"
                            />

                            <button className="
                            bg-gradient-to-r from-[#38BDF8] to-[#1E90FF]
                            bg-[length:200%_200%] bg-left
                            hover:bg-right
                            transition-all duration-500 ease-in-out
                            cursor-pointer h-full absolute right-0 top-0 px-[23px] py-3 rounded-r-lg
                            text-white text-sm font-poppins text-[16px] font-semibold
                            ">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-8">
                        <Image src="/images/translate.svg" alt="Brand" width={32} height={32} className='cursor-pointer' />
                        <Image src="/images/shopping-cart-02.svg" alt="Brand" width={32} height={32} className='cursor-pointer' />

                        <button className="flex items-center gap-2 cursor-pointer">
                            <Image src="/images/user-circle.svg" alt="Brand" width={32} height={32} className='cursor-pointer' />
                            <span className='font-poppins text-[16px] font-medium text-black'>
                                Sign in
                            </span>
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    )
}
