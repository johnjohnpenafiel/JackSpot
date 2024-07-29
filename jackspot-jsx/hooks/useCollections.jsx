
import { useContext } from 'react';
import { CollectionsContext } from '@/providers/CollectionsProvider';

export const useCollections = () => {
    return useContext(CollectionsContext);
};

