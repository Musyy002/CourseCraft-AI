"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import ReactMarkdown from 'react-markdown'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Dashboard from "@/app/dashboard/page";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0, // Prevent autoplay
  },
};

function ChapterContent({ chapter, content, onNext, onFinish, isLastChapter }) {
  

  // If content is still loading or not available


  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.ChapterName}</h2>
      <p className="text-gray-500">{chapter?.About}</p>

      {/* Video */}
      <div className="flex justify-center my-5">
        {content?.videoId ? (
          <YouTube videoId={content.videoId} opts={opts} />
        ) : (
          <p>No video available for this chapter.</p>
        )}
      </div>

      {/* Content */}
      <div>
        {
          content?.content?.map((item,index)=>(
            <div key={index} className="p-5 bg-sky-50 mb-3 rounded-lg">
              <h2 className="font-medium text-lg">{item.title}</h2>
              <ReactMarkdown>{item?.explanation}</ReactMarkdown>
          { item.code_example&& <div className="p-4 bg-black text-white rounded-md mt-3">
                <pre>
                  <code>
                    {item.code_example}
                  </code>
                </pre>
              </div>
          }
            </div>
          ))

        }
      </div>

      {/* Add Next/Finish Button */}
      <div className="mt-8">
          {isLastChapter ? (
            <Button onClick={onFinish} className="bg-green-500 hover:bg-green-600 text-white">
              Finish
            </Button>
          ) : (
            <Button onClick={onNext} className="bg-blue-500 hover:bg-blue-600 text-white">
              Next
            </Button>
          )}
      </div>
    </div>
  );
}

export default ChapterContent;
