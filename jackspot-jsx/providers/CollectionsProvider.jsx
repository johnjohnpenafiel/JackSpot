'use client';

import React, { createContext, useState, useEffect } from 'react';

export const CollectionsContext = createContext();

export const CollectionsProvider =  ({ children }) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5555/api/1/collections'); // USER_ID = 1 or any
            const data = await response.json();
            setCollections(data);

        } catch (error) {
            console.error('Error fetching collections:', error);
        }
    };

    const addCollection = (newCollection) => {
        setCollections((prevCollections) => [...prevCollections, newCollection]);
        fetchCollections();
    };

    return (

        <CollectionsContext.Provider value={{ collections, addCollection }}>
            {children}
        </CollectionsContext.Provider>

    );
};
