import { SimpleWidget } from '@/components';
import React from 'react'

const Main = () => {
  return(
    <div className='text-black text-center'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Info</span>

      <div className='flex flex-wrap items-center justify-center p-2'>
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
      </div>
    </div>
  )
  
}

export default Main;