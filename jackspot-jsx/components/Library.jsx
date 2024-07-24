'use client';

import React, { useEffect, useState } from 'react'
import { HiCollection } from "react-icons/hi";
import { RxCaretLeft } from 'react-icons/rx';

import CollectionList from './CollectionList';
import SpotsList from './SpotsList';

function Library() {

    const [collections, setCollections]= useState([])
    const [spots, setSpots]= useState([])
    const [viewSpots, setViewSpots] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:5555/1/collections')
        .then(r => r.json())
        .then(setCollections)
    }, [])

    function handleClick(id) {
        setViewSpots(true)
        console.log(id)
        event.preventDefault();
        fetch(`http://localhost:5555/spots/1`)
          .then(r => r.json())
          .then(setSpots) 

      }
   
    const collection_list = collections.map((collection) => (
        <CollectionList key={collection.id} id={collection.id} title={collection.title} handleClick={handleClick} />
    ))

    const spotsList = spots.map((spot) => (
        <SpotsList key={spot.id} name={spot.name}/>
      ));

    function handleBack() {
        setViewSpots(false)
    }

  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <HiCollection className='text-neutral-400' size={23} />
                <p className='text-neutral-400 font-medium text-md'>
                    Your Collections
                </p>
            </div>
            <RxCaretLeft onClick={handleBack} size={30} className='text-neutral-400 cursor-pointer hover:text-white transition'/>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3 text-2xl'>
            {viewSpots ? spotsList : collection_list}
        </div>
    </div>
  )
}

export default Library