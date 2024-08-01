'use client';

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';

import { FaMinus } from "react-icons/fa6";


function CollectionItem({ title, id, deleteCollection }) {

  const router = useRouter();
  const pathname = usePathname();

  function handleDelete(e) {
    e.stopPropagation();
    console.log('Current Route:', pathname);
    console.log('Collection ID:', id);

    fetch(`http://localhost:5555/api/collection/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log('Delete Successful');
        deleteCollection();
        if (pathname === `/collection/${id}`) {
          console.log('Navigating to home');
          router.push('/');
        }
      } else {
        console.log('Delete Failed');
      }
    }).catch((error) => {
      console.error('Fetch Error:', error);
    });
  }



  return (
    <div className='relative group flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300/35 w-full p-2 rounded-md '>
      <Link href={`/collection/${id}`} key={id} className='flex-grow'>
        <div className='flex gap-y-1 overflow-hidden items-center'>
          <p className='text-neutral-600/90 text-wrap font-light font-sans'>
            {title}
          </p>
        </div>
      </Link>
      <div className='absolute transition text-neutral-500/75 opacity-0 rounded-full items-center drop-shadow-md right-8 group-hover:opacity-100 hover:scale-125 hover:text-neutral-300/80'>
          <FaMinus title='Delete Collection' size={20} onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default CollectionItem;

// border-b-2 border-neutral-500/10

/*

function handleDelete(e) {
    e.stopPropagation();
    const currentRoute = router.pathname;
    fetch(`http://localhost:5555/api/collection/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        deleteCollection();
        if (currentRoute === `/collection/${id}`) {
          router.push('/');
        }
      }
    });
  }

*/