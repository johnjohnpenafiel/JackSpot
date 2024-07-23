'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Button from './Button';

interface HeaderProps {
    children: React.ReactNode;  
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    
    const router = useRouter();

    const handleLogout = () => {
        // Handle logout in the future
    }

    return (
    <div className={twMerge('h-fit bg-gradient-to-b from-neutral-800 p-6', className)}>
        <div className='w-full mb-4 flex items-center justify-between'>
            <div className='hidden md:flex gap-x-2 items-center'>
                {/* Back button */}
                <button 
                    className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
                    onClick={()=> router.back()}
                >
                    <RxCaretLeft className='text-white' size={35} />
                </button>
                {/* Foward button */}
                <button
                    className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition' 
                    onClick={()=> router.forward()}
                >
                    <RxCaretRight className='text-white' size={35} />
                </button>
            </div>
            <div className= 'flex md:hidden gap-x-2 items-center'>
                {/* Home Mobil view */}
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <HiHome className='text-black' size={20} />
                </button>
                {/* Search Mobil view */}
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <BiSearch className='text-black' size={20} />
                </button>
            </div>
        </div>
        {children}
    </div>
  );
}

export default Header;
