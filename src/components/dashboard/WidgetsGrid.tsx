'use client';

import React from 'react'
import { SimpleWidget } from './SimpleWidget';
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '../../store/index';

const WidgetsGrid = () => {
    const isCart = useAppSelector( state => state.counter.count)
  return (
        <div className='flex flex-wrap items-center justify-center p-2'>
        <SimpleWidget 
            title={`${isCart}`}
            subTitle='Products added'
            label='Counter'
            icon ={<IoCartOutline size={70} className='text-blue-600'/>}
            href='/dashboard/counter'
            />
        {/* <SimpleWidget  title=''/> */}
      
      </div>
  )
}

export default WidgetsGrid