'use client'


import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use next/navigation for useParams

import Header from '@/components/Header';

import SpotPageContent from '../components/SpotPageContent';

function SpotPage() {
  
  const { spotId } = useParams(); // Get the spotId from the URL params
  const [spot, setSpot] = useState(undefined);


  useEffect(() => {
    if (spotId) {

      fetch(`http://127.0.0.1:5555/api/collection/spot/${spotId}`)
        .then(response => response.json())
        .then(setSpot)
   
        } 
  }, [spotId]);

  if (!spot) {
    return (
      <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header />
      </div>
    )
  }


  return (

    <div className="bg-neutral-400 rounded-lg h-full w-full  overflow-hidden overflow-y-auto transition">
      <Header>
        <div className='mt-10'>
          <div className='flex flex-col md:flex-row items-center gap-x-5'>
            <div className='lg:h-60 lg:w-60 flex-shrink-0'>
              {(!spot.image ? null : 
                <img alt='Spot' className='object-cover h-60 w-60 rounded-lg' src={spot.image}/>
              )}
            </div>
            <div className='flex flex-col gap-y-2 mt-4 md:mt-0'>
              <p className='hidden md:block font-semibold text-neutral-600 text-xl'>
                {spot.type}
              </p>
              <h1 className=' flex flex-col text-white text-4xl sm:text-5xl lg:text-7xl font-semibold' >
                {spot.name}
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <SpotPageContent address={spot.address} review={spot.review} comment={spot.comment}/>         
    </div>
  );
};

export default SpotPage;
