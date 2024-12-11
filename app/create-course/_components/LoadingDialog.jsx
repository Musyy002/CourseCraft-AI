import React from 'react'
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

import Image from 'next/image'
  

function LoadingDialog({loading}) {
  return (
    <AlertDialog open={loading}>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogContent className='bg-white rounded-lg'>
                <div className='flex flex-col items-center py-10 bg-white'>
                    <Image src={'/loader.gif'} width={100} height={100} alt='none'/>
                    <h2>Please Wait...AI Working on your Course..</h2>
                </div>

        </AlertDialogContent>
    </AlertDialog>

  )
}

export default LoadingDialog