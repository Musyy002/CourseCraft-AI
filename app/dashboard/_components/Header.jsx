import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
    <Link href="/dashboard">
    <Image src={'favicon.svg'} width={30} height={30} alt='image not available'/>
    </Link>
    <UserButton/>
    </div>
  )
}

export default Header