"use client";
import React, { useEffect, useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EditChapters({course,index}) {

    const Chapters  = course?.courseOutput?.Chapters;

    const [name,setName] = useState("");
    const [about,setAbout] = useState("");

    useEffect(()=>{
        setName(Chapters[index].ChapterName || "");
        setAbout(Chapters[index].About || "")
    },[course])

    const onUpdateHandler=async()=>{
      const updatedCourseOutput = {
            ...course.courseOutput,
            ChapterName: name,
            About: about,
          };
      
          try {
            const result = await db
              .update(CourseList)
              .set({
                courseOutput: updatedCourseOutput,
              })
              .where(eq(CourseList.id, course.id))
              .returning({ id: CourseList.id });
      
            console.log("Update Result:", result);
          } catch (error) {
            console.error("Error updating course:", error);
          }

      // course.courseOutput.Chapters[index].name=name;
      // course.courseOutput.Chapters[index].about=about;

      // console.log(course);
    }

  return (
    <Dialog className="bg-white">
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Edit Chapter</DialogTitle>

          <div className="mt-3">
            <label htmlFor="">Course Title</label>
            <Input
              value={Chapters[index].ChapterName}
              onChange={(event) => setName(event?.target.value)}
            />
          </div>

          <div>
            <label>Description</label>
            <Textarea
              className="h-40"
              value={Chapters[index].About}
              onChange={(event) => setAbout(event?.target.value)}
            />
          </div>
          
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button  className="text-white">
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditChapters