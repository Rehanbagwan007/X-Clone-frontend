import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link, Links } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import toast from 'react-hot-toast';
import { USER_API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getOtherUsers, getProfile, getUser } from '../redux/userSlice';

export const LeftSidebar = () => {
  
  const [logout , setlogout] = useState(false)

  const {user} = useSelector(store => store.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
 

      const  logoutUser = async ()=>{
        
           try{
             const res = await axios.get(`${USER_API_END_POINT}/logout`)
         
             dispatch(getUser(null))
             dispatch(getOtherUsers(null))
             dispatch(getProfile(null))
             if(res?.data?.success){
              toast.success(res?.data?.message)
              navigate("/login")
           
              
             
  
           }
          
         }catch(err){
                 toast.error(err)
           }
      }
   
     

  return (
    <div className='w-[20%] hidden md:block '>
      {/* Logo */}
      <div className="logo-container mb-4">
        <div>
          <img
            width={"50px"}
            src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo-500x281.png"
            alt="twitter-logo"
          />
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col items-start space-y-3">
        {/* Home */}
        <div className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8">
            <CiHome  size={'40px'}/>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">Home</h1>
        </div>

        {/* Explore */}
        <div className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8">
            <CiSearch  size={'40px'}/>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">Explore</h1>
        </div>

        {/* Notification */}
        <div className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8">
            <IoIosNotificationsOutline  size={'40px'}/>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">
            Notification
          </h1>
        </div>

        {/* Profile */}
          <Link to={`/profile/${user?._id}`} className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer" >
          <div className="flex items-center justify-center w-8 h-8">
            <CiUser  size={'40px'}/>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">Profile</h1>
        </Link>

        {/* Messages */}
        <div className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8">
            <CiBookmark  size={'40px'}/>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">Bookmarks</h1>
        </div>

        {/* Settings */}
        <div className="flex items-center w-full hover:bg-gray-200 rounded-full p-2 hover:cursor-pointer"  onClick={()=>logoutUser()
        }>
          <div className="flex items-center justify-center w-8 h-8">
           <CiLogout  size={'40px'}></CiLogout>
          </div>
          <h1 className="text-lg font-bold ml-4 whitespace-nowrap">Logout</h1>
        </div>

        <button className='w-full bg-blue-500 px-4 py-2 border-none rounded-full text-white text-bold'>Post</button>


      </div>
    </div>
  );
};
