'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CollectionsContext = createContext();

export const CollectionsProvider =  ({ children }) => {
    
    const [collections, setCollections] = useState([]);

    const fetchCollections = useCallback(async () => {
        console.log('Fetching collections...');
        try {
            const response = await fetch('http://127.0.0.1:5555/api/1/collections'); // USER_ID = 1 or any
            const data = await response.json();
            setCollections(data);
            console.log('Fetched collections:', data);
        } catch (error) {
            console.error('Error fetching collections:', error);
        }
    }, []);

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    const addCollection = (newCollection) => {
        setCollections((prevCollections) => [...prevCollections, newCollection]);
        fetchCollections();
    };

    return (

        <CollectionsContext.Provider value={{ collections, setCollections, addCollection, fetchCollections }}>
            {children}
        </CollectionsContext.Provider>

    );
};
