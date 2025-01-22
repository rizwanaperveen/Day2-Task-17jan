'use client';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const SingleSofa = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
     setCounter(counter+1)
      console.log('added value ==>', counter)
     }
     const handledecrement = () => {
       setCounter(counter-1)
        console.log('added value ==>', counter)
       }
  return (
    <div>
    <div className='w-full lg:w-[1440px] h-[100px] flex items-center text-center gap-4'>
        <div>Home</div>
        <div ><MdKeyboardArrowRight size={20}/></div>
        <div>Shop</div>
        <div><MdKeyboardArrowRight size={20}/></div>
        <div className='w-full lg:w-[142px] h-[37px] text-4 border-l-[2px] border-[#9F9F9F] mt-3'>Asgaard Sofa</div>
    </div>
    <div className='w-full lg:w[1440px] h-[820px] flex justify-center items-center'>
      <div className='w-full lg:w-[1261px] h-[735.87px] flex justify-center'>
        {/*left side*/}
        <div className='w-full lg:w-[574px] h-[505px] flex justify-around'>
        <div className='w-[100px] h-[421px] items-center'>
          <Image src="/Group94.png" alt="image" width={80} height={100} />
          <Image src="/Group98.png" alt="image" width={76} height={80} />
          <Image src="/Group97.png" alt="image" width={76} height={80} />
          <Image src="/Group96.png" alt="image" width={76} height={80} />
        </div>
        <div className='w-[423px] h-[500px] bg-[#FFF9E5]'>
          <Image src="/Asgaardsofa3.png" alt="image" width={481} height={391} /></div>
      </div>
      </div>
      {/*right side*/}
      <div className='w-full lgw-[606px] h-[730px] mr-40'>
        <h1 className='w-full lg:w-[282px] h-[63px] text-4xl'>Asgaard Sofa</h1>
        <h2 className='w-full lg:w-[173px] h-[36px] text-xl text-[#9F9F9F]'>Rs. 250,000.00</h2>
        <div className='flex'>
        <p className='w-[124px] h-[20px] text-center'><Image src="/Group88.png" alt="image" width={124} height={20} /></p>
        <p className='w-[125px] h-[20px] text-[#9F9F9F] text-xs border-l-[2px] border-[#9F9F9F] text-center'>5 Customer Review</p>
        </div>
        <p className='w-[424px] h-[80px] text-xs mt-4'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        <div className='p-2'>
        <p className='h-[21px] w-[27px] text-sm text-[#9F9F9F] mt-3'>Size</p>
          <ul className='flex space-x-3 mt-2'>
            <li className='bg-[#FBEBB5] h-[30px] w-[30px] rounded-lg text-center text-xs p-2'>L</li>
            <li className='bg-slate-200 h-[30px] w-[30px] rounded-lg text-center text-xs p-2'>XL</li>
            <li className='bg-slate-200 h-[30px] w-[30px] rounded-lg text-center text-xs p-2'>XS</li>
            </ul>
            </div>
            <div className='p-2'>
            <p className='w-[38px] h-[21px] text-sm text-[#9F9F9F] mt-3'>Color</p>
            <ul className='flex space-x-3 mt-3'>
            <li className='w-[30px] h-[30px] bg-[#816DFA] rounded-full'></li>
            <li className='w-[30px] h-[30px] bg-black rounded-full'></li>
            <li className='w-[30px] h-[30px] bg-[#CDBA7B] rounded-full'></li>
            </ul>
            <div className='flex mt-8'>
              <div className='flex w-full lg:w-[123px] h-[64px] space-x-6 border-[#9F9F9F] border-2 rounded-lg items-center p-5 text-base'>
                <button onClick={handledecrement}>-</button>
                <div>{counter}</div>
                <button onClick={handleIncrement}>+</button>
              </div>
              <div className='w-[215px] h-[64px] border-[#9F9F9F] border-2 rounded-lg items-center p-4 text-base ml-4 hover:bg-[#9F9F9F] hover:text-white'><button className='w-[119px] h-[30px] text-center ml-6 text-xl' onClick={handleIncrement}>Add To Cart</button></div>
            </div>
            <div className='w-[630px] border-t-slate-400 border-2 mt-8 flex text-[#9F9F9F]'>
              <div className='p-5'>
                <ul>
                <li>SKU</li>
                <li>Category</li>
                <li>Tags</li>
                <li>Share  : </li>
                </ul>
              </div>
              <div className='p-5'>
                <ul>
                <li>:  SS001</li>
                <li>:  Sofas</li>
                <li>:  Sofa, Chair, Home, Shop</li>
                <li className='flex justify-evenly text-black text-xl'>  <FaFacebook /><FaLinkedin /><AiFillTwitterCircle />
                </li>
                </ul>
              </div>
            </div>
          
        </div>
      
      </div>
      
    </div>
    <div className='w-full lg:w-[1440px] h-auto lg:h-[744px]'>
      <div className='w-full lg:w-[649px] h-full lg:h-[36px] flex flex-col md:flex-cols-2 lg:flex-row justify-between items-center ml-10 lg:ml-56'>
        <div className='w-ull lg:w-[136px] h-[36] text-2xl'>Description</div>
        
        <div className='w-full lg:w-[269px] h-[36px] text-2xl text-[#9F9F9F]'>Additional Information</div>
        <div className='w-full lg:w-[138px] h-[36px] text-2xl text-[#9F9F9F]'>Reviews [5]</div>
      </div>
      <div className='w-full lg:w-[1026px] h-full lg:h-[174px] ml-10 lg:ml-56 mt-10'>
      <p className='w-full lg:w-[1026px] h-[48] text-base'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p className='w-fulllg:w-[1026px] h-[96px] text-base mt-6'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
      <div className='w-full lg:w-[1239px] h-full lg:h-[348px] flex flex-col lg:flex-row space-x-10 lg:ml-36 mt-10'>
        <Image src="/Group107.png" alt="image" width={605} height={348} />
        <Image src="/Group106.png" alt="image" width={605} height={348} />
      </div>
    </div>
    <h1 className='sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold'>Related Products</h1>
     <div className='sm:w-full md:w-full lg:w-[1440px] sm:h-full md:h-full lg:h-[777px] text-center flex justify-between items-center'>
                <div className='flex flex-col md:flex-cols-2 lg:flex-row justify-around items-center mt-10 mb-10'>
                    <div className='w-[287px] h-[372px]'>
                        <Image src="/Group18.png" alt="image" width={280} height={372} />
                    </div>
                    <div className='w-[287px] h-[372px]'>
                    <Image src="/Group15.png" alt="image" width={280} height={372} />
                    </div>
                    <div className='w-[287px] h-[372px]'>
                    <Image src="/Group16.png" alt="image" width={280} height={372} />
                    </div>
                    <div className='w-[287px] h-[372px]'>
                    <Image src="/Group17.png" alt="image" width={280} height={372} />
                    </div>
                </div>
                <div className='w-[115px] h-[49px] text-center ml-[600px] mt-20'>View More</div>
               </div>
    
            
                       
    </div>
  )
}

export default SingleSofa