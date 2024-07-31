"use client"

import React from 'react'
import Input from './Input';

function SearchInput({ setSearchTerm }) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };
    

    return (
        
     <Input className='bg-neutral-500/75 text-white' type='text' placeholder="Search spots by name or type..." onChange={handleChange} />
       
  )
}

export default SearchInput