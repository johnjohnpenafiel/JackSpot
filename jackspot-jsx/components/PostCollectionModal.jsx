'use client';

import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast, Toaster } from "react-hot-toast"
import { useRouter } from 'next/navigation';

import Modal from './Modal'
import usePostModal from '@/hooks/usePostModal'
import Input from './Input';
import Button from './Button';
import { useCollections } from '@/hooks/useCollections';

function PostCollectionModal() {

    const [isLoading, setIsLoading] = useState(false);

    const postCollectionModal = usePostModal();
    const { addCollection } = useCollections();
    const router = useRouter();

    const { register, handleSubmit, reset} = useForm({
        defaultValues: {
            title: ''
        }
    })

    function onChange(open) {
        if (!open) {
            reset();
            postCollectionModal.onClose();
        }
    }

    const onSubmit = async (values) => {
        try {
            setIsLoading(true);

            const payload = {
                title: values.title,
                user_id: 1
            };

            const response = await fetch('http://127.0.0.1:5555/api/1/collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const newCollection = await response.json();
            addCollection(newCollection);


            
            router.refresh();
            setIsLoading(false);
            toast.success('Collection created');
            reset();
            postCollectionModal.onClose();


        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }
  
    return (
    <div> 
    <Toaster 
        toastOptions={{ success: { iconTheme: { primary: '#D0D0D0', secondary: '#03C03C'}, style: {background: '#C8C8C8'}}}}
    />
        <Modal 
            title='Add a Collection' 
            description='Name your collection' 
            isOpen={postCollectionModal.isOpen} 
            onChange={onChange}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                <Input id='title' disabled={isLoading} {...register('title', { required: true })} placeholder='Collection Title' />
                <Button disabled={isLoading} type="submit">
                    Add
                </Button>
            </form>
        </ Modal>
    </div>  
  )
}

export default PostCollectionModal;