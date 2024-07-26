"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use next/navigation for useParams
import Header from '@/components/Header';

const SpotPage = () => {
  const { spotId } = useParams(); // Get the spotId from the URL params
  const [spot, setSpot] = useState('');
  

  useEffect(() => {
    if (spotId) {
      fetch(`http://127.0.0.1:5555/api/collection/spot/${spotId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setSpot(data);
        })
    }
  }, [spotId]);


  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
      </Header>
      <div>
        <h1>{spot.name}</h1>
      </div>
    </div>
  );
};

export default SpotPage;
