'use client'

import React from 'react'
import Link from 'next/link';
 
function SpotItemSearch({ id, name, type }){


  return (
    
    
    <div className='relative group flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/25 w-full p-2 rounded-md'>
      <Link href={`/spots/${id}`} key={id} className='flex-grow flex flex-col gap-y-1 overflow-hidden'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-neutral-600 truncate'> {name}</p>
        <p className='text-neutral-500 text-sm truncate'>{type}</p>
      </div>
      </Link>
      <div className='absolute transition text-neutral-500/75 opacity-0 rounded-full flex items-center p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-125 hover:text-neutral-300/80'>
      </div>
    </div>
  )
}

export default SpotItemSearch;
