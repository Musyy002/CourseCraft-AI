"use client";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlinePower } from "react-icons/hi2";
import { Progress } from "@/components/ui/progress"
import UserCourseList from './UserCourseList';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';



function SideBar() {
    const {userCourseList,setUserCourseList} = useContext(UserCourseListContext)
    const menu = [
        {
            id:1,
            name:'Home',
            icon: <HiOutlineHome />,
            path:'/dashboard'
        },

        {
            id:2,
            name:'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path:'/dashboard/explore'
        },

        {
            id:3,
            name:'Upgrade',
            icon: <HiOutlineShieldCheck />,
            path:'/dashboard/upgrade'
        },

        {
            id:4,
            name:'Logout',
            icon: <HiOutlinePower />,
            path:'/dashboard/logout'
        },
    ]

    const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-lg'>
        <img src="/logo.png" 
            alt="AI Course Generator Logo" width={160} height={100}/>

        <hr className='my-5'/>

        <ul>
            {menu.map((item,index)=>(

                <div key={item.id} >
                <Link href={item.path}>
                <div
                  
                className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer
                 hover:bg-gray-100 hover:text-black rounded-lg mb-3
                 ${item.path==path&&'bg-gray-100 text-black'}
                 `}>
                    <div className='text-3xl'>
                        {item.icon}
                    </div>
                    <h2>{item.name}</h2>
                </div>
                </Link>
                </div>
            ))}
        </ul>

        <div className='absolute bottom-10 w-[80%]'> 
            <Progress value={(userCourseList?.length/5)*100}/>
            <h2 className='text-sm my-2'>{userCourseList?.length} Out of 5 courses created</h2>
            <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course generation</h2>
        </div>

    </div>
  )
}

export default SideBar