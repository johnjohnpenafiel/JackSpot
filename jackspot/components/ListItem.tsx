'use client';

import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

interface ListItemProps {
    id: number,
    title: string,
}

const ListItem: React.FC<ListItemProps> = ({ id, title }) => {

    const router = useRouter();

    const onClick = () => {
        // add authentication before push
        router.push(href)
    }

  return (
    <>
        <p className='flex flex-col gap-y-2 mt-4 px-3'>{title}</p>
    </>
  )
}

export default ListItem
