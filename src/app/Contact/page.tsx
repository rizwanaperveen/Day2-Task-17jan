'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const Contact = () => {


  return (
    <div>
        <div className='w-full lg:w-[1440px] h-full lg:h-[316px] flex justify-center items-center mt-2 ml-6 mb-8'>
            <Image src="/Group78(1).png" alt="image" width={1440} height={450} />
        </div>
        <div className='w-full lg:w-[1440px] h-full lg:h-[1144px]'>
          <div>
          <h1 className='text-2xl lg:text-4xl font-semibold text-center'>Get In Touch With Us</h1>
          <p className='w-full lg:w-[644px] h-[48px] text-sm lg:text-base text-left lg:text-center text-[#9F9F9F] lg:ml-96 mt-5'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <div className='w-full lg:w-[1058px] h-[923px] flex flex-col md:flex-row justify-around lg:ml-48'>
          {/*left side*/}
          <div className='w-full lg:w-[393px] h-[537px] flex flex-col justify-center items-center'>
           {/*location*/}
            <div className='flex justify-around gap-4'>
              <div className='w-6 h-8'><FaLocationDot size={20}/>
              </div>
              <div><h1 className='text-lg lg:text-2xl'>Address</h1>
              <p className='text-[#9F9F9F] text-sm lg:text-base w-full lg:w-[212px] h-[72px]'>236 5th SE Avenue, New York NY10000, United States</p></div>
            </div>
            {/*phone*/}
            <div className='flex justify-around gap-4'>
              <div className='w-6 h-8'><FaPhone size={20} /></div>
              <div><h1 className='text-lg lg:text-2xl'>Phone</h1>
              <p className='text-[#9F9F9F] text-base w-[212px] h-[72px]'>Mobile: +(84) 546-6789
              Hotline: +(84) 456-6789</p></div>
            </div>
         
          {/*time*/}
          <div className='flex justify-around gap-4'>
            <div className='w-6 h-8'><GoClockFill size={20} />
            </div>
            <div><h1 className='text-lg lg:text-2xl'>Working Time</h1>
            <p className='text-[#9F9F9F] text-base w-[212px] h-[96px]'>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</p></div>
          </div>
          </div>
          {/*right side*/}
          <div className='w-fulllg:w-[635px] h-full lg:h-[923px] flex justify-center items-center'>
            <div className='w-full lg:w-[531px] h-[734px] text-center'>
              <div className='w-full lg:w-[530px] h-[121px] text-left'>
                <label htmlFor="name">Your name</label>
                <br/>
                <input type="text" id="name" placeholder='Abc' width={530} height={121} className='w-full lg:w-[528px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-full lg:w-[530px] h-[121px] text-left mt-6'>
              <label htmlFor="email">Email Address</label>
                <br/>
                <input type="text" id="email" placeholder='Abc@def.com' width={530} height={121} className='w-full lg:w-[528px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-full lg:w-[528px] h-[121px] text-left mt-6'>
              <label htmlFor="subject">Subject</label>
                <br/>
                <input type="text" id="subject" placeholder='This is an optional field' width={528} height={121} className='w-full lg:w-[528px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-full lg:w-[528px] h-[166px] text-left mt-6'>
              <label htmlFor="message">Message</label>
                <br/>
                <input type="text" id="message" placeholder='Hi! i’d like to ask about' width={528} height={166} className='w-full lg:w-[528px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <button className='w-full lg:w-[237px] h-[48px] mt-6 border-2 border-[#9F9F9F] rounded-lg hover:bg-slate-500 hover:text-white'>Submit</button>
            </div>
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
  )
}

export default Contact