import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Checkout = () => {
  return (
    <div>
        <div className='w-full lg:w-[1440px] h-auto lg:h-[316px]'>
            <Image src="/Group78(5).png" alt="image" width={1440} height={316} className='w-full h-auto' />
        </div>
        <div className='w-full lg:w-[1440px] h-auto lg:h-[1829px] mt-10'>
            <div className='w-[1242px] h-[1714px] flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-[608px] h-auto lg:h-[1714px] items-center'>
                    <h1 className='text-4xl font-semibold'>Billing details</h1>
                    <div className='flex justify-between mt-10'>
                        <div className='w-[212px] h-[121px]'>
                            <label htmlFor="name">First Name</label>
                            <input type="text" id="firstname" width={211} height={75} className='w-[211px] h-[75px] mt-6 border-[#9F9F9F] border-2 rounded-lg'/>
                        </div>
                        <div className='w-[212px] h-[121]'>
                        <label htmlFor="name">Last Name</label>
                        <input type="text" id="lastname" width={211} height={75} className='w-[211px] h-[75px] mt-6 border-[#9F9F9F] border-2 rounded-lg'/>
                        </div>
                        </div>
                        <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="co-name">Company Name (Optional)</label>
                <br/>
                <input type="text" id="co-name" width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="country">Country / Region</label>
                <br/>
                <input type="text" id="country" placeholder='Srilanka' width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="address">Street Address</label>
                <br/>
                <input type="text" id="address" width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="city">Town / City</label>
                <br/>
                <input type="text" id="city" width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="province">Province</label>
                <br/>
                <input type="text" id="province" placeholder='Western Province' width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="code">Zip Code</label>
                <br/>
                <input type="text" id="code" width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="phone">Phone</label>
                <br/>
                <input type="text" id="phone" placeholder='Srilanka' width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
              <label htmlFor="email">Email Address</label>
                <br/>
                <input type="text" id="email" placeholder='Srilanka' width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
              <div className='w-[453px] h-[121px] text-left mt-10'>
            
                <br/>
                <input type="text" id="information" placeholder='Additional information' width={453} height={75} className='w-[453px] h-[75px] border-2 border-[#9F9F9F] rounded-lg mt-4'/>
              </div>
                </div>
                <div className='w-full lg:w-[608px] h-auto mt-10'>
                    <div className='w-[533px] h-[616px]'>
                        <div className='w-[527px] h-[300px] flex border-b-2 border-[#9F9F9F]'>
                            <div className='w-[260px] h-[310px] py-5'>
                                <h1 className='text-4xl font-semibold'>Product</h1>
                                <ul className='mt-6 text-base'>
                                    <li className='text-[#9F9F9F]'>Asgaard sofa <span className='text-black mx-2'>1</span><span className='text-black mx-2'>X</span></li>
                                    <li className='mt-6'>Subtotal</li>
                                    <li className='mt-6'>Total</li>
                                </ul>
                            </div>
                            <div className='w-[260px] h-[310px] py-5'>
                                <h1 className='text-4xl font-semibold'>Subtotal</h1>
                                <ul className='mt-6 text-base'>
                                    <li>Rs. 250,000.00</li>
                                    <li className='mt-6'>Rs. 250,000.00</li>
                                    <li className='text-[#B88E2F] text-2xl font-semibold mt-6'>Rs. 250,000.00</li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-[528px] h-[107px] text-base'>
                        <h1><li>Direct Bank Transfer</li></h1>
                            <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>
                            <li className='text-[#9F9F9F] mt-4'>Direct Bank Transfer</li>
                            <li className='text-[#9F9F9F] mt-4'>Cash On Delivery</li>
                     
                        <div className='w-[529px] h-[72px] text-base mt-4'>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        </div>
                        <div className='w-[318px] h-[64px] border-[#9F9F9F] mt-10 ml-10 border-2 rounded-2xl text-center p-4'><Link href="/"><button>Place Order</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[1440px] h-[300px] flex flex-col md:flex-row justify-around items-center bg-[#F4F4F4] ml-10 mb-10'>
            <div className='w-[376px] h-[108px]'>
                <div className='w-[205px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Free Delivery</h1></div>
                <div className='w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-[376px] h-[108px]'>
            <div className='w-[244px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>90 Days Return</h1></div>
                <div className='w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>If goods have problems, consectetur adipim scing elit.</p>
                </div>
            </div>
            <div className='w-[376px] h-[108px]'>
            <div className='w-[265px] h-[48px] flex justify-center items-center text-3xl font-semibold'><h1>Secure Payment</h1></div>
                <div className='w-[376px] h-[60px] text-[#9F9F9F] text-xl'>
                <p>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Checkout