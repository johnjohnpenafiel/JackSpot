'use client'

import React from 'react'
import Link from 'next/link';
 
function SpotItem({ id, name, type }){

  return (

    <Link href={`/spots/${id}`} key={id} >
    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'> {name}</p>
        <p className='text-neutral-400 text-sm truncate'>{type}</p>
      </div>
    </div>
    </Link>

  )
}

export default SpotItem;
