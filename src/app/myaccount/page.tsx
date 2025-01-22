import React from 'react';
import Image from 'next/image';

const Myaccount = () => {
  return (
    <div>
    <div className='w-full lg:w-[1440px] h-[316px] flex flex-col md:flex-row justify-center items-center ml-10'>
        <Image src="/Group78(2).png" alt="image" width={1440} height={316} />
    </div>
    <div className='w-full lg:w-[1440px] h-[760px] flex flex-col md:flex-row justify-around items-center'>
        {/*left*/}
        <div className='w-full lg:w-[608px] h-[630px]'>
            <h1 className='font-semibold text-4xl'>Log In</h1>
            <div className='w-full lg:w-[424px] h-[121px] text-left text-base mt-4'>
                <label htmlFor="name">Username or email address</label>
                <br/>
                <input type="text" id="name" width={423} height={121} className='w-[423px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-full lg:w-[424px] h-[121px] text-left text-base mt-4'>
                <label htmlFor="password">Password</label>
                <br/>
                <input type="text" id="password" width={423} height={121} className='w-[423px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='flex justify-items-start mt-10'>
                <div className='w-full lg:w-[30px] h-[27px] border-2 rounded-lg border-[#9F9F9F]'></div>
                <div className='text-base text-[#9F9F9F] ml-4'>Remember me</div>
              </div>
              <div className='flex justify-items-start mt-6'>
                <div><button className='w-full lg:w-[215px] h-[64px] border-2 border-[#9F9F9F] rounded-lg'>Log In</button></div>
                <div className='text-base text-[#9F9F9F] ml-5 flex items-center'>Lost Your Password?</div>
              </div>
        </div>
        {/*right*/}
        <div className='w-full lg:w-[608px] h-[630px]'>
            <h1 className='font-semibold text-4xl'>Register</h1>
            <div className='w-full lg:w-[424px] h-[121px] text-left text-base mt-4'>
                <label htmlFor="email">Email Address</label>
                <br/>
                <input type="text" id="email" width={423} height={121} className='w-[423px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-full lg:w-[430px] h-[143px] text-base text-left mt-4 pt-2'>
                <p>A link to set a new password will be sent to your email address.</p>
                <p className='mt-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>
              <div><button className='w-full lg:w-[215px] h-[64px] border-2 border-[#9F9F9F] rounded-lg mt-16'>Register</button></div>
        </div>
    </div>
    <div className='w-full md:w-full lg:w-[1440px] h-[300px] flex flex-col md:flex-row justify-around items-center bg-[#F4F4F4] mt-56 mb-20'>
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
  )
}

export default Myaccount