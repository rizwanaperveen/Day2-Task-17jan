import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div>
        <div className='text center mt-2'>
            <div className='flex justify-center items-center '>
               {/*hero image*/}
                <Image src="/Group78.png" alt="image" width={1440} height={440}/>
            </div>
            <div className='bg-[#FAF4F4] flex justify-center items-center'>
                <Image src="/Group63.png" alt="image" width={1440} height={100} />
            </div>
           {/* <div className='w-full lg:w-[1440px] h-[828px] flex flex-col md:flex-cols-2 justify-around items-center flex-wrap'>*/}
                <div className='flex flex-col md:flex-row flex-wrap justify-around items-center'>
                <div className='w-full lg:w-[287px] h-[372px]'>
                    <Image src="/Group18.png" alt="image" width={287} height={372} />
                </div>
                <div className='w-full lg:w-[287px] h-[397px]'>
                <Image src="/Group15.png" alt="image" width={287} height={397} />
                </div>
                <div className='w-full lg:w-[287px] h-[397px]'>
                <Image src="/Group16.png" alt="image" width={287} height={372} />
                </div>
                <div className='w-full lg:w-[287px] h-[397px]'>
                <Image src="/Group17.png" alt="image" width={287} height={372} />
                </div>
            
                {/*<div className='flex flex-col md:flex-cols-2 lg:flex-cols-3 xl:flex-cols-4 justify-around items-center'>*/}
                <div className='w-full lg:w-[287px] h-[287px]'>
                <Image src="/Maskgroup(2).png" alt="image" width={287} height={287} />
                <div className='w-full lg:w-[152px] h-[71px]'><p>Grain coffee table</p>
                <p>Rs. 15,000.00</p>
                </div>
                </div>
                <div className='w-full lg:w-[287px] h-[287px]'>
                <Image src="/Maskgroup(3).png" alt="image" width={287} height={287} />
                <div className='w-full lg:w-[152px] h-[71px]'><p>Kent coffee table</p>
                <p>Rs. 225,000.00</p>
                </div>
                </div>
                <div className='w-[287px] h-[287px]'>
                <Image src="/Maskgroup(4).png" alt="image" width={287} height={287} />
                <div className='w-[152px] h-[71px]'><p>Round coffee table</p>
                <p>Rs. 251,000.00</p>
                </div>
                </div>
                <div className='w-[287px] h-[287px]'>
                    <Image src="/Maskgroup(5).png" alt="image" width={287} height={287} />
                    <div className='w-[152px] h-[71px]'><p>Reclaimed teak coffee table</p>
                    <p>Rs. 25,200.00</p>
                    </div>
                </div>
               </div>
            
               <div className='w-full md:w-full lg:w-[1440px] h-[300px] flex flex-col md:flex-row justify-around items-center bg-[#F4F4F4] mt-20 mb-20'>
            <div className='w-full lg:w-[376px] h-[108px]'>
                <div className='w-full lg:w-[205px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Free Delivery</h1></div>
                <div className='w-full lg:w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-full lg:w-[376px] h-[108px]'>
            <div className='w-full lg:w-[244px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>90 Days Return</h1></div>
                <div className='w-full lg:w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>If goods have problems, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-full lg:w-[376px] h-[108px]'>
            <div className='w-full lg:w-[265px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Secure Payment</h1></div>
                <div className='w-full lg:w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
        </div>
    
        </div>
    </div>
  )
}

export default Shop