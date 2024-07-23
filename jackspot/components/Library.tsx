'use client';

import React, { useEffect, useState } from 'react'
import { HiCollection } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai"

const Library = () => {
    const onClick= () => {
        // Handle upload later
    };

    const [collections, setCollections]= useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/1/collections')
        .then(r => r.json())
        .then(setCollections)
    }, [])



  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <HiCollection className='text-neutral-400' size={23} />
                <p className='text-neutral-400 font-medium text-md'>
                    Your Collections
                </p>
            </div>
            <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 cursor-pointer hover:text-white transition'/>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            List of collections
        </div>

    </div>
  )
}

export default Library