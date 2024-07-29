'use client';

import React from "react"
import { HiCollection } from "react-icons/hi";
import { RxCaretLeft } from 'react-icons/rx';
import { AiOutlinePlus } from "react-icons/ai";


import CollectionItem from './CollectionItem';
import usePostModal from "@/hooks/usePostModal";
import useCollections from '@/hooks/useCollections';

function Library() {

    const postModal = usePostModal();
    const { collections } = useCollections();


    function handleModalCLick() {
        return postModal.onOpen()
    }
   
    const collection_list = collections.map((collection) => (
        <CollectionItem key={collection.id} id={collection.id} title={collection.title} />
    ));


  return (
    
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4 sticky top-0 bg-neutral-400'>
            <div className='inline-flex items-center gap-x-2'>
                <HiCollection className='text-neutral-700' size={23} />
                <p className='text-neutral-700 font-medium text-md'>
                    Your Collections
                </p>
            </div>
            <RxCaretLeft onClick={() => {}} size={29} className='text-neutral-500 cursor-pointer hover:text-neutral-300 transition'/>
            <AiOutlinePlus onClick={handleModalCLick} size={20} className='text-neutral-500 cursor-pointer hover:text-neutral-300 transition'/>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3 text-2xl'>
            {collection_list}
        </div>
    </div>
  )
}

export default Library