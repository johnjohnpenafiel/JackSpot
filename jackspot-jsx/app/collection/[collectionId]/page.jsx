// src/app/collection/[collectionId]/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCollections } from '@/hooks/useCollections';
import Header from '@/components/Header';
import SpotItem from '@/components/SpotItem';

function CollectionPage() {
  const { collectionId } = useParams();
  const { collections } = useCollections();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchedCollection = collections.find((collection) => collection.id === parseInt(collectionId, 10));
    setCollection(fetchedCollection);
  }, [collectionId, collections]);

  if (!collection) {
    return ( 
      <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header />
      </div>
    )
  }

  const spotList = collection.spots.map((spot) => <SpotItem key={spot.id} name={spot.name} type={spot.type} id={spot.id} />)

  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className='text-neutral -900 text-4xl sm:text-5xl lg:text-7xl font-bold' >
          {collection.title}
        </h1>
      </Header>
      <div>
        {spotList}
      </div>
    </div>
  );
}

export default CollectionPage;
