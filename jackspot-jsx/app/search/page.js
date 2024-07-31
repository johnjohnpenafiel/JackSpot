"use client"

import React from 'react'
import { useState, useEffect } from 'react'

import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import { useCollections } from '@/hooks/useCollections'

import SearchContent from './components/SearchContent'


function Search() {

  const { collections, fetchCollections } = useCollections();
  const [searchTerm,  setSearchTerm] = useState('');

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  const filteredCollections = collections.map(collection => ({
    ...collection,
    spots: collection.spots.filter(spot => 
      spot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      spot.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(collection => collection.spots.length > 0);

  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
            <div className='mb-2 flex flex-col gap-y-6'>
              <h1 className='text-neutral-600 text-3xl font-semibold'>
                Search
              </h1>
              <SearchInput setSearchTerm={setSearchTerm}/>
            </div>
        </Header>
        <div>
          <SearchContent filteredSpots={filteredCollections}/>
        </div>
    </div>
  )
}

export default Search;
