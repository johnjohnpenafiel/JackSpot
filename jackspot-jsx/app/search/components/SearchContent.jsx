'use client'

import React from 'react'

import SpotItem from '@/components/SpotItem'



function SearchContent({ filteredSpots }) {


    return (
        <div className="p-4">
          {filteredSpots.length > 0 ? (
            filteredSpots.map((collection) => 
            ( 
                <div key={collection.id}>
                    <div className="">
                        {collection.spots.map((spot) => <SpotItem id={spot.id} name={spot.name} type={spot.type}/>)}
                    </div>
                </div>
            ))
          ) : (
            <div className="text-center ml-10 text-gray-600">No spots found</div>
          )}
        </div>
      )
}

export default SearchContent
