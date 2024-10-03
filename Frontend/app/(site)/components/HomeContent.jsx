import React from 'react'
import Link from 'next/link';

function HomeContent({ id, name, type, address, review}) {

  const generateStars = (review) => {
    if (!review){
      review = 1
    }
    return '★'.repeat(review);
  };

  function check(data){
    if (!data) {
      data = `not available.`
    }
    return data
  }

  return (
    <Link href={`/spots/${id}`} key={id} className='p-4 bg-neutral-200/20 hover:bg-neutral-100/40 hover:scale-[1.05] rounded-lg shadow-md transition'>
      <div>
        <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>
        <p className='text-gray-600'>{type}</p>
        <p className='text-gray-500 text-sm'>{check(address)}</p>
        <p className='text-yellow-500'>{generateStars(review)}</p>
      </div>
     </Link>
  )
}

export default HomeContent;