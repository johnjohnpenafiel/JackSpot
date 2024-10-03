'use client';

import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast, Toaster } from "react-hot-toast"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

import Modal from './Modal'
import usePostSpotModal from '@/hooks/usePostSpotModal'
import Input from './Input';
import Button from './Button';

function PostSModal({ onSpotAdded }) {

    const [isLoading, setIsLoading] = useState(false);

    const { collectionId } = useParams();
    const postSpotModal = usePostSpotModal();
    const router = useRouter();

    const { register, handleSubmit, reset} = useForm({
        defaultValues: {
            name: '',
            type: '',
            address: '',
            comment: '',
            review: '',
            image: ''
        }
    })

    function onChange(open) {
        if (!open) {
            reset();
            postSpotModal.onClose();
        }
    }

    const onSubmit = async (values) => {
        try {
            setIsLoading(true);

            const payload = {
                name: values.name,
                type: values.type,
                address: values.address,
                comment: values.comment,
                review: values.review,
                image: values.image,
                user_id: 1,
                collection_id: 1
            };

            const response = await fetch(`http://127.0.0.1:5555/api/collection/${collectionId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            };

            const responseData = await response.json();
            console.log('Response data:', responseData);

            if (onSpotAdded) {
                onSpotAdded(responseData);
            };


            router.refresh();
            setIsLoading(false);
            toast.success('Spot added');
            reset();
            postSpotModal.onClose();


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
            title='Add a Spot' 
            description='Complete the form' 
            isOpen={postSpotModal.isOpen} 
            onChange={onChange}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                <Input id='name' disabled={isLoading} {...register('name', { required: true })} placeholder='Name' />
                <Input id='type' disabled={isLoading} {...register('type', { required: true })} placeholder='Category'/>
                <Input id='address' disabled={isLoading} {...register('address', { required: false })} placeholder='Address'/>
                <Input id='comment' disabled={isLoading} {...register('comment', { required: false })} placeholder='Comment'/>
                <Input id='review' disabled={isLoading} {...register('review', { required: false })} placeholder='Review'/>
                <Input id='image' disabled={isLoading} {...register('image', { required: false })} placeholder='Image Link'/>
                <Button disabled={isLoading} type="submit">
                    Add
                </Button>
            </form>
        </ Modal>
    </div>  
  )
}

export default PostSModal;