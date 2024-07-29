
import { useContext } from 'react';
import { CollectionsContext } from '@/providers/CollectionsProvider';

const useCollections = () => {
    return useContext(CollectionsContext);
};

export default useCollections;