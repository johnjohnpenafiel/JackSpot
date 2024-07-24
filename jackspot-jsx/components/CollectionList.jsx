'use client';

import { useRouter } from 'next/navigation'
import React from 'react'


function CollectionList({ id, title, handleClick }) {

    const router = useRouter();

    const onClick = () => {
        // add authentication before push
        router.push(href)
    }

  return (
    <>
        <p onClick={handleClick} className='hover:text-slate-500'>{title}</p>
    </>
  )
}

export default CollectionList;