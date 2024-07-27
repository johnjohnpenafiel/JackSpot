import  { twMerge } from "tailwind-merge"


function Box ({ children, className}) {
    
    return (
        <div className={twMerge("bg-neutral-400 rounded-lg h-fit w-full", className)}>
            {children}
        </div>
    );
 }

 export default Box;