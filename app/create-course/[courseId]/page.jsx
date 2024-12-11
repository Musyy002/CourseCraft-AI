"use client";
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';

function CourseLayout() {
  const { user } = useUser();
  const params = useParams(); // Get params dynamically
  const [courseId, setCourseId] = useState(null);
  const [course,setCourse] = useState([])
 
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

  return <div className='mt-10 px-7 md:px-20 lg:px-44'> 
    <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

    {/* Basic Information */}
    <CourseBasicInfo course={course}/>

    {/* Course Detail */}
    <CourseDetail course={course}/>

    {/* List of Lesson */}
    <ChapterList course={course}/>
  </div>;
}

export default CourseLayout;
