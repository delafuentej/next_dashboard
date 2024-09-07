'use client';
import { useEffect } from "react";
import { useAppSelector } from "@/store";
import { useAppDispatch } from '../../store/index';
import { addOne, initCouterState, substractOne } from "@/store/counter/counterSlice";

interface Props {
    value?: number;
}

const CartCounter= ({value = 0}: Props)=> {

    const count = useAppSelector( state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(()=>{
      dispatch(initCouterState(value))
    },[dispatch, value])
   // const[count,  setCount] = useState(value);

    // const addOne = () =>{
    //  setCount( count +1);
    // }
    // const substOne = () => {
    //  setCount( count -1);
    // }
 
  return (
    <>
        <span className='text-7xl'>{count}</span>
        <div className='flex'>
            <button 
               // onClick={addOne}
               onClick={() => dispatch(addOne())}
                className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>+1
            </button>
            <button 
          //  onClick={substOne}
            onClick={()=> dispatch(substractOne())}
            className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>-1
            </button>
        </div>
    
    
    </>
   
  )
}

export default CartCounter;
