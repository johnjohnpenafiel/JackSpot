'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

function SpotsList({ name }){

  const router = useRouter();

    // const onClick = () => {
    //     // add authentication before push
    //     router.push(href)
    // }


  return (
    <Link href='/spot'>
    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'> {name}</p>
      </div>
    </div>
    </Link>
  )
}

export default SpotsList
