"use client";
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { HiPencilSquare } from 'react-icons/hi2';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DialogClose } from '@radix-ui/react-dialog';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';

function EditCourseBasicInfo({ course }) {

    const [name,setName] = useState();
    const [description,setDescription] = useState();

    useEffect(()=>{
      setName(course?.courseOutput?.CourseName);
      setDescription(course?.courseOutput?.Description);
    })

    const onUpdateHandler=async()=>{
        course.courseOutput.CourseName=name;
        course.courseOutput.Description=description;
        const result = await db.update(CourseList).set({
          courseOutput:course?.courseOutput
        }
        )
        .where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});

        console.log(result);
    }

  return (
    <Dialog classname='bg-white'>
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle>Edit Course & Description</DialogTitle>
          <div className='mt-3'>
            <label htmlFor=''>Course Title</label>
            <Input defaultValue={course?.courseOutput?.CourseName}
            onChange={(event)=>setName(event?.target.value)}
            />
          </div>

          <div>
            <label>Description</label>
            <Textarea className='h-40' defaultValue={course?.courseOutput?.Description}
            onChange={(event)=>setDescription(event?.target.value)}
            />
          </div>
        </DialogHeader>

        <DialogFooter>
          {/* Use asChild to avoid nesting button elements */}
          <DialogClose asChild>
            <Button onClick={onUpdateHandler} className='text-white'>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
