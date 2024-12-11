import { Item } from '@radix-ui/react-select'
import { index } from 'drizzle-orm/mysql-core'
import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi2";
import React from 'react'

function ChapterList({course}) {
  return (
    <div className='mt-3'>
        <h2 className='font-medium text-lg'>Chapters</h2>
        <div className='mt-2' key={index}>
            {course?.courseOutput?.Chapters.map((chapter,index)=>(
                <div key={index} className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                <div className='flex mt-3 gap-5 items-center'>
                    <h2 className='bg-primary flex-none h-10 w-10 text-white rounded-2xl text-center p-2'>{index+1}</h2>
                    <div>
                        <h2 className='font-medium text-lg'>{chapter?.ChapterName}</h2>
                        <p className='text-sm text-gray-500'>{chapter?.About}</p>
                        <p className='flex gap-2 text-primary items-center'> <HiOutlineClock /> {chapter?.Duration}</p>
                    </div>
                </div>
                    <HiOutlineCheckCircle className='text-4xl text-gray-200 flex-none'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList