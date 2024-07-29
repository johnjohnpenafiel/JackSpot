'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCollections } from '@/hooks/useCollections';

import { AiOutlinePlus } from "react-icons/ai";

import Header from '@/components/Header';
import SpotItem from '@/components/SpotItem';
import usePostSpotModal from "@/hooks/usePostSpotModal";
import ModalSProvider from '@/providers/ModalSProvider';


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
      <Header>
        <div className='inline-flex items-center justify-between gap-x-2'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-bold' >
            {collection.title}
          </h1>
          <ModalSProvider onSpotAdded={handleSpotAdded} />
          <AiOutlinePlus onClick={handleModalCLick} size={60} className='text-neutral-500/60 cursor-pointer mt-3 hover:text-neutral-300 transition'/>
        </div>
      </Header>
      <h1 className='text-neutral-700 font-medium text-base ml-2'>Spots:</h1>
      <div>
        {spotList}
      </div>
    </div>
  );
}

export default CollectionPage;
