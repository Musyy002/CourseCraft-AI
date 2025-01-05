"use client";

import Header from "@/app/_components/Header";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

function Course({ params }) {
  const [course,setCourse] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Resolve the `params` Promise
        const resolvedParams = await params;
        
        // Proceed with fetching the course
        await GetCourse(resolvedParams);
      } catch (error) {
        console.error("Error resolving params:", error);
      }
    };

    fetchData();
  }, [params]);

  const GetCourse = async (resolvedParams) => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.courseId, resolvedParams?.courseId));

      setCourse(result[0])
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (

  <div>
      <Header/>
      <div className="px-10 p-10 md:p-20 lg:p-43">
        <CourseBasicInfo course={course} edit={false}/>

        <CourseDetail course={course} />

        <ChapterList course={course} edit={false}/>
      </div>
      
  </div>

    )
}

export default Course;
