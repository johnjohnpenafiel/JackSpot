'use client'

import React from 'react'

function SearchContent({ filteredSpots }) {

    if (filteredSpots.lenght === 0) {
        return <div className='flex flex-col gap-y-2 w-full px-6 text-neutral 500'>No spots found.</div>
    }

    return (
        <div className="p-4">
          {filteredSpots.length > 0 ? (
            filteredSpots.map((collection) => (
              <div key={collection.id} className="mb-4">
                <h2 className="text-xl font-bold">{collection.name}</h2>
                <div className="pl-4">
                  {collection.spots.map((spot) => (
                    <div key={spot.id} className="mb-2">
                      <h3 className="text-lg font-semibold">{spot.name}</h3>
                      <p className="text-sm text-gray-600">{spot.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No spots found</p>
          )}
        </div>
      )
}

export default SearchContent


// return (
//     <div>
//         {collections.map((collection) => (
//             <div
//                 key={collection.id}
//                 className='flex items-center gap-x-4 w-full'
//             >
//                 <div className='flex-1'>
//                     <CollectionItem title={collection.title} id={collection.id} />
//                 </div>
//             </div>
//         ))}
//     </div>
//   )
// }