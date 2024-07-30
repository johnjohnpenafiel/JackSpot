'use client'

import qs from 'query-string'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react'

import useDebounce from '@/hooks/useDebounce';
import Input from './Input';

function SearchInput() {

    const router = useRouter();
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)
    
    useEffect(() => {

        const query = {
            title: debouncedValue, 
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })

        router.push(url)
    }, [debouncedValue, router])

    return (
        
     <Input placeholder="Find a spot" value={value} onChange={(e) => setValue(e.target.value)} />
       
  )
}

export default SearchInput