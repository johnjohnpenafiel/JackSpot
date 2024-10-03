import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';


const Button = forwardRef(({ className, children, disabled, type='button', ...props}, ref) => {
    return (
        <button type={type} 
            className={twMerge('w-full rounded-full bg-white border border-transparent px-3 py-3 disabled:cursor-not-allowed disable:opacity-50 text-black font-bold hover:opacity-75 transition', className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';

export default Button