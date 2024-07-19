"use client";

"Notes"
"because our sidebar component is going to be dynamic"
"not all sidebar components need to be client components"
"not everything in the sidebar component is going to become a client component"
"but we need to pass server components as client components to make it dynamic"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    
    const pathname = usePathname();

    "define your project routes"
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname]);
    
    return (
        <div className="flex h-full">
            <div 
            className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-fullw-[300px]
                    p-2
                "
            >
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4

                    "
                >
                        {routes.map((item) => (
                            <SidebarItem 
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    Collections Library
                </Box>
            </div>
        </div>
    );
}

export default Sidebar;
