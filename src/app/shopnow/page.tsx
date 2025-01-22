import React from 'react';
import Image from 'next/image';

const Shopnow = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
        <Image  src="/Group78a.png" alt="image" width={1440} height={316}/>
    </div>
    <div className='w-full lg:w-[1440px] h-full lg:h-[525px]'>
        <div className='w-full lg:w-[1240px] h-full lg:h-[390px] flex flex-col md:flex-row justify-around items-left md:items-center mt-10'>
             {/*left side*/}
            <div className='w-full lg:w-[817px] h-full lg:h-[216px] mb-40'>  
                
                <div className='w-full lg:w-[817px] h-full lg:h-[55px] bg-[#FFF9E5]'>
                    <ul className='flex justify-around items-center text-base text-center'>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </ul>
                </div>
                     <div className='flex justify-around items-center mt-14'>
                     <div className='w-full lg:w-[106px] h-full lg:h-[106px]'>
                              <Image src="/Asgaardsofa3.png" alt="image" width={106} height={106} /></div>
            
                          <div className='w-full lg:w-[573px] h-full lg:h-[25px]'>
                            <ul className='flex justify-around items-center'>
                                <li>Asgaard sofa</li>
                                <li>Rs. 250,000.00</li>
                                <li className='w-8 h-8 border-2 border-black text-center rounded-lg'>1</li>
                                <li>Rs. 250,000.00</li>
                                <li></li>
                            </ul>
                          </div>
                </div>
            </div>
                {/*right side*/}
            <div className='w-full lg:w-[393px] h-full lg:h-[390px] bg-[#FFF9E5]'>
                <h1 className='text-xl lg:text-3xl font-semibold text-center'>Cart Totals</h1>
                <div className='flex justify-around items-center mt-14'>
                <div>
                    <ul>
                        <li className='text-base'>Subtotal</li>
                        <li className='mt-8 text-base'>Total</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#9F9F9F] text-base'>Rs. 250,000.00</li>
                        <li className='text-xl text-[#B88E2F] mt-8'>Rs. 250,000.00</li>
                    </ul>
                </div>
                
                </div>
                <button className='w-full lg:w-[222px] h-[58px] text-xl border-2 border-black rounded-lg mt-10 ml-10 items-center'>Checkout</button>
            </div>
        </div>
        </div>
        <div className='w-full lg:w-[1440px] h-full lg:h-[300px] flex flex-col md:flex-row justify-around items-center bg-[#F4F4F4] ml-10 mb-10'>
            <div className='w-full lg:w-[376px] h-full lg:h-[108px]'>
                <div className='w-full lg:w-[205px] h-full lg:h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Free Delivery</h1></div>
                <div className='w-full lg:w-[376px] h-full lg:h-[60px] text-[#9F9F9F] text-xl'>
                <p>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-full lg:w-[376px] h-full lg:h-[108px]'>
            <div className='w-full lg:w-[244px] h-full lg:h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>90 Days Return</h1></div>
                <div className='w-full lg:w-[376px] h-full lg:h-[60px] text-[#9F9F9F] text-xl'>
                <p>If goods have problems, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-full lg:w-[376px] h-full lg:h-[108px]'>
            <div className='w-full lg:w-[265px] h-full lg:h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Secure Payment</h1></div>
                <div className='w-full lg:w-[376px] h-full lg:h-[60px] text-[#9F9F9F] text-lg lg:text-xl'>
                <p>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Shopnow