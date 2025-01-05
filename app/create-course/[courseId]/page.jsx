"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';


function CourseLayout() {
  const { user } = useUser();
  const params = useParams(); // Get params dynamically
  const [courseId, setCourseId] = useState(null);
  const [course,setCourse] = useState([])
  const [loading,setLoading] = useState(false);
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

  const GenerateChapterContent = async () => {
    setLoading(true);
    const chapters = course?.courseOutput?.Chapters;
  
    if (!chapters || chapters.length === 0) {
      console.log("No chapters found.");
      setLoading(false);
      return;
    }
  
    try {
      const promises = [];
      chapters.forEach((chapter, index) => {
        promises.push(
          (async () => {
            let videoId = '';
            
            // Generate video URL
            const resp = await service.getVideos(course?.name + ':' + chapter?.ChapterName);
            videoId = resp[0]?.id?.videoId;


            const PROMPT = `Explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.ChapterName}, in JSON Format with list of array field as title, explanation on given chapter in detail, Code Example (Code Field in <precode> format) if applicable`;
            console.log(PROMPT);
  
            // Generate content using AI
            const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
            console.log(result);
            const content = JSON.parse(await result.response?.text());
  
  
            // Save Chapter Content + URL
            try {
              await db.insert(Chapters).values({
                chapterId: index, // Using the index as the ID
                courseId: course?.courseId,
                content: content,
                videoId: videoId,
              }).returning({id:Chapters.id})
              console.log(`Chapter ${index} inserted successfully!`);
            } catch (error) {
              console.log(`Error inserting chapter ${index}:`, error);
            }
          })()
        );
      });
  
      await Promise.all(promises); // Ensure all async operations complete
    } catch (e) {
      console.log('Error generating chapter content:', e);
    } finally {
      setLoading(false);
    }
  
    await db.update(CourseList).set({
      publish:true
    })
    router.replace('/create-course/' + course?.courseId + '/finish');
  };
  
  

  return <div className='mt-10 px-7 md:px-20 lg:px-44'> 
    <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

    <LoadingDialog loading={loading} />

    {/* Basic Information */}
    <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>

    {/* Course Detail */}
    <CourseDetail course={course} refreshData={()=>GetCourse()}/>

    {/* List of Lesson */}
    <ChapterList course={course} refreshData={()=>GetCourse()}/>

    
    <Button onClick={GenerateChapterContent} className='text-white rounded-xxl my-10'>Generate Course Content</Button>
  </div>;
}

export default CourseLayout;
