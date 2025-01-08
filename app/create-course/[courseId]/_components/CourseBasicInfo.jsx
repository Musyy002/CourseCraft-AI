import React, { useState } from 'react'
import Image from 'next/image';
import { HiOutlinePuzzle } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { storage } from '@/configs/firebaseConfig';
import Link from 'next/link';

function CourseBasicInfo({course,refreshData,edit=true}) {

  const [imageUrl, setImageUrl] = useState('');

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result); // Set the image URL to display
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <h2 className='font-bold text-3xl'>{course?.courseOutput?.CourseName}
                {edit&& <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/>} </h2>
                <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.Description}</p>
                <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><HiOutlinePuzzle />{course?.category}</h2>
                {!edit && <Link href={'/course/'+course?.courseId+"/start"}>
                <Button className='w-full text-white mt-5'>Start</Button>
                </Link>}
            </div>

            <div>
              <label htmlFor="upload-image">
                <Image src={imageUrl?imageUrl:'/placeholder.png'} width={300} height={300} alt='none' className='pl-50 w-full h-[250px] rounded-xl object-contain cursor-pointer'/>
              </label>
              {edit&& <input type="file" name="" id="upload-image" className='opacity-0' onChange={onFileSelected}/> }
            </div>
        </div>

    </div>
  )
}

export default CourseBasicInfo