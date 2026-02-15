'use client'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'

const Counter = () => {
  console.log('hello world')
  const [count,setCount] = useState(0)
  return (
    <>
      <div className='text-7xl gap-8'>
        <button onClick={()=>setCount(count-1)}>
          -
        </button>
        {count}
        <button onClick={()=>setCount(count+1)}>
          +
        </button>
      </div>
    </>
  )
}

export default Counter