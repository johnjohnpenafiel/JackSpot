'use client';

import { useRouter } from 'next/navigation'
import React from 'react'


function CollectionList({ title }) {

    const router = useRouter();
    
  return (
    <div onClick={() => {}} className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/50 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-neutral-600 truncate'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default CollectionList;