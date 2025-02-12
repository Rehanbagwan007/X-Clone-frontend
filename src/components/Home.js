import React, { useEffect } from 'react'
import { LeftSidebar } from './LeftSidebar'
import { Feed } from './Feed'
import { RightSidebar } from './RightSidebar'
import { Outlet } from 'react-router-dom'
import { CiHome, CiSaveDown1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import useGetProfile from '../hooks/useGetProfile'
import { useSelector } from 'react-redux'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import useGetMyTweets from '../hooks/useGetMyTweets'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

   const nagivate =  useNavigate()
  const {user,otherUsers} = useSelector(store => store.user)

  useEffect(()=>{
    if(!user){
      nagivate("/login")
    }
  },[])

 

  useGetOtherUsers(user?._id)
  useGetMyTweets()

  return (
    <>
    <div className='md:hidden w-full h-[20%] p-4'>

      <div className='flex flex-row items-center justify-between'>
        <div> <Avatar  src='https://img.freepik.com/premium-photo/young-male-cartoon-developer-coding-badass-black-short_1057389-529.jpg?w=740' googleId="118096717852922241760" size="40px" className="" round={true} /></div>
        <div className=''>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP8qRIaKUrrHgduMUnjoR-RWrpJbhsc2Fow&s' className='w-[40px]' />
        </div>

        <div>
          <button className='px-2 py-2 rounded-full border'>Upgrade</button>


        </div>

      </div>


    
    </div>
    

    <div className='flex justify-between w-[80%] mx-auto mt-2 '>

   

    <LeftSidebar/>
    <Outlet/>
    <RightSidebar otherUsers={otherUsers}/>

    </div>




    <div className='md:hidden w-screen fixed top-[93%] flex items-center justify-around border-t pt-2.5'>

<Link to="/" className='cursor-pointer'><CiHome size={'30'}/></Link>
<Link to="/Search" className='cursor-pointer'><CiSearch size={'30'}/></Link>
<Link to="/profile" className='cursor-pointer'><CiUser size={'30'}></CiUser></Link>
<Link className='cursor-pointer'><CiLogout size={'30'}/></Link>
</div> 
    
    
    </>
  )
}
