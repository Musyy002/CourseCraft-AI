import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm' >
        <img src="/logo.png" // Replace with the actual path to your logo file
            alt="AI Course Generator Logo"
            className="mx-auto lg:mx-0 w-32 sm:w-40 mb-26"/>

        <Button>Get Started</Button>
    </div>
  )
}

export default Header