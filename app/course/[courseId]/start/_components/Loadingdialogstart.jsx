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
import Link from 'next/link';

function Loadingdialogstart({loading,setLoading}) {
  return (
    <AlertDialog open={loading} onOpenChange={(open) => { if (!open) setLoading(true); }}>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogContent className='bg-white rounded-lg'>
                <div className='flex flex-col items-center py-10 bg-white'>
                    <Image src={'/confetti.gif'} width={600} height={450} alt='none'/>
                    <h2>Course Finished! Congratulations!!</h2>
                </div>
                <Link href={'/dashboard'}>
                <AlertDialogAction className='text-white' onClick={()=>setLoading(false)}>GO TO DASHBOARD
                </AlertDialogAction>
                </Link>
        </AlertDialogContent>
        
    </AlertDialog>
  )
}

export default Loadingdialogstart