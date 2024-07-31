'use client';

import React from "react"
import { HiCollection } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";


import CollectionItem from './CollectionItem';
import usePostModal from "@/hooks/usePostCollectionModal";
import { useCollections } from '@/hooks/useCollections';

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
        <div className='flex items-center justify-between px-5 pt-4 sticky top-0 bg-neutral-400 z-10'>
            <div className='inline-flex items-center gap-x-2'>
                <HiCollection className='text-neutral-700' size={23} />
                <p className='text-neutral-700 font-normal text-base'>
                    Your Collections
                </p>
            </div>
            <AiOutlinePlus title='Add a Collection' onClick={handleModalCLick} size={20} className='text-neutral-500 cursor-pointer hover:text-neutral-300 transition'/>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 ml-2 px-3 text-2xl divide-y-2 divide-neutral-500/20'>
            {collection_list}
        </div>
    </div>
  )
}

export default Library


/*
Back button
<RxCaretLeft onClick={() => {}} size={29} className='text-neutral-500 cursor-pointer hover:text-neutral-300 transition'/>
*/