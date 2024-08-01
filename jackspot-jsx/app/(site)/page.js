'use client'
import React from 'react';
import Header from "@/components/Header";

import { useCollections } from '@/hooks/useCollections';

import HomeContent from './components/HomeContent';

function Home() {
  const { collections } = useCollections();

  // Extract all spots from collections
  const allSpots = collections.flatMap(collection => collection.spots);

  // Sort spots by creation date in descending order
  const sortedSpots = allSpots.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Take the top 6 spots
  const latestSpots = sortedSpots.slice(0, 6);

  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className='mb-2'>
          <h1 className='text-neutral-200 text-5xl font-semibold mt-10'>
            Welcome back, John.
          </h1>
        </div>
      </Header>
      <div className='px-5 py-4'>
        <h1 className='font-medium text-neutral-600 text-lg'>Recent Spots</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
          {latestSpots.map(spot => (
            <HomeContent id={spot.id} name={spot.name}  type={spot.type} address={spot.address} review={spot.review}/>
          ))}
        </div>
      </div>
    </div> 
  );
}

export default Home;
