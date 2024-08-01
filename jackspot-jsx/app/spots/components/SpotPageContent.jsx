
import React from 'react'

function SpotPageContent({ address, review, comment }) {

  const generateStars = (review) => {
    return '⭐️'.repeat(review);
  };

  return (
    <div className=" flex-col p-6 bg-neutral-100/20 rounded-lg shadow-lg max-w-4xl ml-6 mr-6 mt-8">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-neutral-600 mb-3">Spot Rating</h1>
        <p className="text-xl text-yellow-500">{generateStars(review)}</p>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-neutral-600 mb-3">Address</h1>
        <p className="text-lg text-gray-600">{address}</p>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-neutral-600 mb-3">Comments</h1>
        <p className="text-lg text-gray-600">{comment}</p>
      </div>
    </div>
  )
}

export default SpotPageContent
