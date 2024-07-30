'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCollections } from '@/hooks/useCollections';

import { AiOutlinePlus } from "react-icons/ai";

import Header from '@/components/Header';
import SpotItem from '@/components/SpotItem';
import usePostSpotModal from "@/hooks/usePostSpotModal";
import ModalSProvider from '@/providers/ModalSProvider';
import Box from '@/components/Box';


function CollectionPage() {
  
  const { collectionId } = useParams();
  const { collections, fetchCollections } = useCollections();
  const postModal = usePostSpotModal();
  
  const [collection, setCollection] = useState(null);

  function handleModalCLick() {
    return postModal.onOpen()
  }

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  useEffect(() => {
    const fetchedCollection = collections.find((collection) => collection.id === parseInt(collectionId, 10));
    setCollection(fetchedCollection);
  }, [collectionId, collections]);

    // Callback function to add the new spot to the collection state
  const handleSpotAdded = (newSpot) => { setCollection((prevCollection) => ({...prevCollection, spots: [newSpot, ...prevCollection.spots]}))};

  if (!collection) {
    return ( 
      <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header />
      </div>
    )
  }

  const sortedSpots = collection.spots.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const spotList = sortedSpots.map((spot) => <SpotItem key={spot.id} name={spot.name} type={spot.type} id={spot.id} />)

  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <ModalSProvider onSpotAdded={handleSpotAdded} />
      <Header>
        <div className='inline-flex items-center justify-between gap-x-2'>
          <h1 className='text-white text-8xl sm:text-5xl lg:text-7xl font-bold mt-5' >
            {collection.title}
          </h1>
          <AiOutlinePlus onClick={handleModalCLick} size={60} className='text-neutral-500/60 cursor-pointer mt-6 hover:text-neutral-300 transition'/>
        </div>
        <h3 className='text-neutral-600/75 semi-bold text-xl mt-1 flex flex-col gap-y-2 px-3'>Collection</h3>
      </Header>
      <div className=" md:flex flex-col gap-y-2 w-[500px] h-[655px] ml-5 p-2" >
        <Box className='overflow-y-auto bg-neutral-500/25 px-2 py-3'>
          <div className='flex flex-col gap-y-2 px-3 text-2xl'>
            {(spotList.length < 1) ? <h1 className='text-neutral-500'>This Collection is empty</h1> : spotList}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default CollectionPage;
