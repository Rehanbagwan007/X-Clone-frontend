import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

export const RightBarMobile = () => {
  return (
    <div className='w-full h-full'>
    <div className='p-2 bg-gray-200 rounded-full flex items-centre text-gray-500'>
      <CiSearch size={'20px'}/>

      <input type='text' className='ml-[5px] bg-transparent outline-none px-2' placeholder='Serach'/>
    </div>

   <div className='p-3 bg-gray-200 rounded-2xl my-2 w-full'>
    <h1 className='font-bold'>Who To Follow</h1>
    <div className='flex flex-col gap-2 items-center justify-between w-full mt-4 '>

      <div className='flex items-center justify-between w-full'>
      
      <div className='flex items-center gap-1'>
        <div> <Avatar  src='https://img.freepik.com/premium-photo/young-male-cartoon-developer-coding-badass-black-short_1057389-529.jpg?w=740' googleId="118096717852922241760" size="40" round={true} /></div>
        <div className='flex flex-col'>  <h1 className='font-bold'>Node JS</h1>
        <p className='text-sm'>Javascript</p></div>
   </div>

      <div> <button className='rounded-full bg-zinc-900 px-4 py-2 text-white'>Follow</button>
</div>
     
      </div>


        {/* copy od div */}  
      
     


        
        {/* copy of div */}







    </div>
   </div>

    </div>
  )
}
