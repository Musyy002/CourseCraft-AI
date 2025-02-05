"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Dashboard from '@/app/dashboard/page';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Loadingdialogstart from './_components/Loadingdialogstart';

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params; // Unwrap the params Promise
      GetCourse(resolvedParams); // Pass resolved params to the function
    };

    fetchData();
  }, []);

  const GetCourse = async (resolvedParams) => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.courseId, resolvedParams?.courseId));
      console.log("Course Data:", result);
      setCourse(result[0]);

      // Load first chapter by default
      if (result[0]?.courseOutput?.Chapters?.length > 0) {
        const chapters = result[0].courseOutput.Chapters;
        // Mark the last chapter
        chapters[chapters.length - 1].isLastChapter = true;

        const firstChapter = chapters[0];
        setSelectedChapter(firstChapter);
        GetSelectedChapterContent(0, result[0]?.courseId); // Pass courseId
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GetSelectedChapterContent = async (chapterId, courseId) => {
    try {
      const result = await db
        .select()
        .from(Chapters)
        .where(
          and(
            eq(Chapters.chapterId, chapterId),
            eq(Chapters.courseId, courseId)
          )
        );
      console.log("Chapter Content:", result);
      setChapterContent(result[0]); // Update chapterContent state
    } catch (error) {
      console.error("Error fetching chapter content:", error);
    }
  };

  const handleNextChapter = () => {
    if (course?.courseOutput?.Chapters) {
      const currentIndex = course.courseOutput.Chapters.findIndex(
        (chapter) => chapter.ChapterName === selectedChapter?.ChapterName
      );

      if (currentIndex < course.courseOutput.Chapters.length - 1) {
        const nextChapter = course.courseOutput.Chapters[currentIndex + 1];
        setSelectedChapter(nextChapter);
        GetSelectedChapterContent(currentIndex + 1, course.courseId);
      }
    }
  };

  const handleFinish = () => { 
    setLoading(true);
  };

  

  return (
    <div>
      {/* Chapter List Side Bar */}
      <div className="fixed md:w-64 hidden md:block h-screen border-r shadow-sm">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.CourseName}
        </h2>

        <div>
          {course?.courseOutput?.Chapters?.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.ChapterName === chapter?.ChapterName &&
                "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index, course?.courseId); // Pass courseId
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* Content Div */}
      <div className="md:ml-64">
        <ChapterContent
          chapter={selectedChapter}
          content={chapterContent}
          onNext={handleNextChapter}
          onFinish={handleFinish}
          isLastChapter={selectedChapter?.isLastChapter}
        />
      </div>

      <Loadingdialogstart loading={loading} setLoading={setLoading}/>
    </div>

  
  );
}

export default CourseStart;