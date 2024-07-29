'use client';

import React from 'react'
import Link from 'next/link'


function CollectionItem({ title, id }) {
  return (
    <Link href={`/collection/${id}`} key={id}>
    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/50 w-full p-2 rounded-md'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-neutral-600 truncate'>
          {title}
        </p>
      </div>
    </div>
    </Link>
  )
}

export default CollectionItem;