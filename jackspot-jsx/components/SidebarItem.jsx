import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function SidebarItem({ icon: Icon, label, active, href}) {
    
    return (
        <Link href={href} className={twMerge("flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-neutral-300/75 transition text-neutral-700 py-1")}>
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem;