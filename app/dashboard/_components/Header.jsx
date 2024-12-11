import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
    <Image src={'favicon.svg'} width={30} height={30} alt='image not available'/>
    <UserButton/>
    </div>
  )
}

export default Header