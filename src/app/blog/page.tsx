import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div>
      <Image src="/Group78(4).png" alt="image" width={1440} height={316} />
      <div className='w-[1440px] -[2710px]'>
        {/*left*/}
        <div className='w-[817px] h-[500px] mt-10'>
          <Image src="/Rectangle68.png" alt="image" width={817} height={500} />
        </div>
        <div className='mt-5'><Image src="/Group172.png" alt="image" width={349} height={24} /></div>
        <div className='mb-10 p-10'>
          <h1 className='w-[517px] h-[45px] text-3xl font-bold mt-10'>  Going all-in with millennial design</h1>
          <p className='text-base text-[#9F9F9F]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi suscipit laborum incidunt odit nesciunt veniam est maxime dolorum fugit autem illo, quas inventore. Fugiat saepe odio alias omnis quod?
          Doloribus est hic pariatur veniam assumenda nemo rem cum odio dolores ducimus sed libero architecto tempora nihil magni, quisquam obcaecati sit at ab omnis reprehenderit minus modi quos accusantium. Reprehenderit!
          Iste vero qui omnis repellendus! Ullam a, praesentium saepe cupiditate ut, harum facilis officia ipsum laudantium unde, non perspiciatis est minus officiis id quasi iusto sapiente veniam quisquam. Voluptas, sit.</p>
          <button className='w-[255px] h-[64px] text-xl mt-10 underline'>Read More</button>
        </div>
      
        
        
  
      </div>
    </div>
  )
}

export default Blog