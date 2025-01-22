import React from 'react'
import { CiLock } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
        <div className='w-[417px] h-[746px]'>
            <div className='w-[382px] h-[209px]'>
        <div className='flex justify-between mt-10'>
            <div className='w-[193.18px] h-[36px] text-2xl font-semibold'><h1>Shopping Cart</h1></div>
            <div className='w-[20px] h-[19px] text-xl text-[#9F9F9F]'><CiLock /></div>
        </div>
        <div className='w-[313.24px] border-t-2 border-[#9F9F9F] mt-10 '></div>
        <div className='w-[382px] h-[105px] flex justify-around mt-10'>
            <div className='w-[118px] h-[105px] bg-[#FBEBB5]'>
                <Image src="/Asgaardsofa3.png" alt="image" width={118} height={105} />
            </div>
            <div className='w-[142px] h-[56px] text-base px-2 py-4 pt-4 mt-2'>Asgaard sofa <br/> <span className='text-xs text-[#9F9F9F] pt-4'>1  x </span>
             <span className='text-[#B88E2F] mx-2 text-xs mt-4 ml-4'> Rs. 250,000.00</span></div>
             <div className='mt-6'><Image src="/Vector.png" alt="image" width={21} height={20} /></div>
        </div>
        <div className='w-[382px] h-[24px] flex justify-around items-center mt-72'>
            <div className='text-base'>Subtotal</div>
            <div className='text-[#B88E2F] text-base font-semibold'>Rs. 250,000.00</div>
        </div>
        <div className='w-[290px] h-[31px] flex justify-around items-center mt-10 ml-5'>
            <div className='w-[131px] h-[31px] border-2 border-black rounded-[20px] text-xs text-center p-2'><Link href="/shopnow"><button>View Cart</button></Link></div>
            <div className='w-[131px] h-[31px] border-2 border-black rounded-[20px] text-xs text-center p-2 ml-20'><Link href="/checkout"><button>CheckOut</button></Link></div>
        </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar