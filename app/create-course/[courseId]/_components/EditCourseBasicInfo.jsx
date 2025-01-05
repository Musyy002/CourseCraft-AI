"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";

function EditCourseBasicInfo({ course,refreshData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(course?.courseOutput?.CourseName || "");
    setDescription(course?.courseOutput?.Description || "");
  }, [course]);

  const onUpdateHandler = async () => {
    const updatedCourseOutput = {
      ...course.courseOutput,
      CourseName: name,
      Description: description,
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

    refreshData(true)
  };

  return (
    <Dialog className="bg-white">
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Edit Course & Description</DialogTitle>
          <div className="mt-3">
            <label htmlFor="">Course Title</label>
            <Input
              value={name}
              onChange={(event) => setName(event?.target.value)}
            />
          </div>

          <div>
            <label>Description</label>
            <Textarea
              className="h-40"
              value={description}
              onChange={(event) => setDescription(event?.target.value)}
            />
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onUpdateHandler} className="text-white">
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
