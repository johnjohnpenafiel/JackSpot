'use client';

import { useRouter } from 'next/navigation'
import React from 'react'


function CollectionList({ id, title, handleClick }) {

    const router = useRouter();

    // const onClick = () => {
    //     // add authentication before push
    //     router.push(href)
    // }
  
  return (
    <div onClick={() => handleClick(id)} className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default CollectionList;