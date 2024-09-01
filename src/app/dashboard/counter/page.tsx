


import CartCounter from '@/shopping-cart/components/CartCounter';
import { Metadata } from 'next';
import React, { useState } from 'react';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description:'Counter State',
}

const Counter = () =>{
  
  return (
    <>
       <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products in shopping cart</span>
      {/* 'use client' => useState*/}
      <CartCounter value={30}/>
     
    </div>
   
    
    </>
   
  )
};

export default Counter;