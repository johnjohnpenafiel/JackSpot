'use client'

import React from 'react'

import SpotItem from '@/components/SpotItem'
import SpotItemSearch from '@/components/SpotItemSearch'


function SearchContent({ filteredSpots }) {


    return (
        <div className="p-4">
          {filteredSpots.length > 0 ? (
            filteredSpots.map((collection) => 
            ( 
                <div key={collection.id}>
                    <div className="">
                        {collection.spots.map((spot) => <SpotItemSearch id={spot.id} name={spot.name} type={spot.type}/>)}
                    </div>
                </div>
            ))
          ) : (
            <div className="text-center text-gray-600">No spots found</div>
          )}
        </div>
      )
}

export default SearchContent
