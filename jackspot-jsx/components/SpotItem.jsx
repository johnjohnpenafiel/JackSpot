'use client'

import React from 'react'
import Link from 'next/link';
import { FaMinus } from "react-icons/fa6";
 
function SpotItem({ id, name, type, deleteCollection }){


  function handleDelete(e) {
    e.stopPropagation();
    fetch(`http://localhost:5555/api/collection/spot/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
      }
     deleteCollection(id)
    });
  }


  return (
    
    
    <div className='relative group flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/25 w-full p-2 rounded-md'>
      <Link href={`/spots/${id}`} key={id} className='flex-grow flex flex-col gap-y-1 overflow-hidden'>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-neutral-600 truncate'> {name}</p>
        <p className='text-neutral-500 text-sm truncate'>{type}</p>
      </div>
      </Link>
      <div className='absolute transition text-neutral-500/65 opacity-0 rounded-full flex items-center p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-125'>
      <FaMinus title='Delete spot' onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default SpotItem;
