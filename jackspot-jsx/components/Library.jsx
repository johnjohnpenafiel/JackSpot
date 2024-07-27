'use client';

import React, { useEffect, useState } from "react"
import { HiCollection } from "react-icons/hi";
import { RxCaretLeft } from 'react-icons/rx';

import CollectionItem from './CollectionItem';
import SpotItem from './SpotItem';

function Library() {

    const [collections, setCollections]= useState([])
    const [spots, setSpots]= useState([])
    const [viewSpots, setViewSpots] = useState(false)

    useEffect(() => {
        // UPDATE with user id param
        fetch('http://127.0.0.1:5555/api/1/collections')
        .then(r => r.json())
        .then(setCollections)
    }, [])

    function handleClick(id) {
        event.preventDefault();
        fetch(`http://localhost:5555/api/${id}/spots`)
        .then(r => r.json())
        .then(setSpots) 
        setViewSpots(true)
    };

    function handleBack() {
        setViewSpots(false)
        setSpots([])
    };
   
    const collection_list = collections.map((collection) => (
        <CollectionItem key={collection.id} id={collection.id} title={collection.title} handleClick={handleClick} />
    ));

    const spotsList = spots.map((spot) => (
        <SpotItem key={spot.id} id={spot.id} name={spot.name} type={spot.type}/>
    ));


  return (
    
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4 sticky top-0 bg-neutral-400 z-10'>
            <div className='inline-flex items-center gap-x-2'>
                <HiCollection className='text-neutral-700' size={23} />
                <p className='text-neutral-700 font-medium text-md'>
                    Your Collections
                </p>
            </div>
            <RxCaretLeft onClick={handleBack} size={30} className='text-neutral-600 cursor-pointer hover:text-neutral-300 transition'/>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3 text-2xl'>
            {viewSpots ? spotsList : collection_list}
        </div>
    </div>
  )
}

export default Library