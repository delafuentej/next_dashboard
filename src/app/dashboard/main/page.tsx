import { SimpleWidget } from '@/components';
import React from 'react';
import { Metadata } from 'next';
import WidgetsGrid from '@/components/dashboard/WidgetsGrid';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'General Info'
}

const Main = () => {
  return(
    <div className='text-black text-center'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Info</span>

     <WidgetsGrid />
    </div>
  )
  
}

export default Main;