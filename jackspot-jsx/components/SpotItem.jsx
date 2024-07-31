'use client'

import React from 'react'
import Link from 'next/link';
 
function SpotItem({ id, name, type }){

  return (
    
    <Link href={`/spots/${id}`} key={id} >
    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/25 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-neutral-600 truncate'> {name}</p>
        <p className='text-neutral-500 text-sm truncate'>{type}</p>
      </div>
    </div>
    </Link>
  )
}

export default SpotItem;
