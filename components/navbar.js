import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="flex justify-between text-2xl">
                <div className="flex gap-4 ">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>about</Link>
                    <Link href='/info'>info</Link>
                </div>

                <div className='flex'>
                    <Link href='/login'>login</Link>
                </div>
        </nav>
        <hr className='mb-4'/>
    </>
  )
}

export default Navbar