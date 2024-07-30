
import React from 'react'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'

function page() {


  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
            <div className='mb-2 flex flex-col gap-y-6'>
              <h1 className='text-neutral-600 text-3xl font-semibold'>
                Search
              </h1>
            </div>
        </Header>
        <SearchInput className="ml-4"/>
    </div>
  )
}

export default page
