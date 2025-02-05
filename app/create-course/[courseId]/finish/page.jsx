"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { and, eq } from 'drizzle-orm';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import CourseDetail from '../_components/CourseDetail';
import ChapterList from '../_components/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../../_components/LoadingDialog';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import React, { useEffect, useState } from 'react';

function FinishScreen() {
  const { user } = useUser();
  const params = useParams(); // Get params dynamically
  const [courseId, setCourseId] = useState(null);
  const [course,setCourse] = useState([])
  const router = useRouter();
 
  useEffect(() => {
    if (params?.courseId && user?.primaryEmailAddress?.emailAddress) {
      setCourseId(params.courseId);
      GetCourse(params.courseId);
    }
  }, [params, user]);

  const GetCourse = async (id) => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, id),
            eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress)
          )
        );

      setCourse(result[0])
      console.log(result);
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  };
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! Your Course is Ready</h2>

        <CourseBasicInfo course={course} refreshData={()=>console.log} />
        <h2 className='mt-3'>Course URL:</h2>
        <h2 className='text-center text-gray-400 border p-2 round flex gap-5 items-center'>{process.env.NEXT_PUBLIC_VERCEL_HOST_NAME}/course/{course?.courseId}
        <HiOutlineClipboardDocumentCheck className='h-5 w-5 cursor-pointer' onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_VERCEL_HOST_NAME+"/course/"+course?.courseId)} /></h2>

    </div>
  )
}

export default FinishScreen