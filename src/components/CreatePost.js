import axios from 'axios';
import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";
import { TWEET_API_END_POINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import useGetMyTweets from '../hooks/useGetMyTweets';
import { getisActive, getRefresh } from '../redux/tweetSlice';
import store from '../redux/store';


export const CreatePost = () => {
  const [Description ,  setDescription] = useState("")
  const {user} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const {isActive} = useSelector(store => store.tweet)

  const SubmitHandler = async (e) =>{
   e.preventDefault()
     
    try{
        const post = await axios.post(`${TWEET_API_END_POINT}/create`,{description:Description ,userID:user._id } ,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        } )
            
        if(post?.data?.success){
          setDescription("")
          toast.success(post.data.message)
          dispatch(getRefresh())
          
        }

    }catch(err){
      toast.error(err)
    }

  
   

          
  }

  const followingTweetHandler = ()=>{
    dispatch(getisActive(true))

  }

  const forYouTweets = ()=>{
    dispatch(getisActive(false))

  }



  return (
    <div className='w-[100%] md:w-[100%] h-full '>
      <div className="w-full h-full flex flex-col">
      <div className='flex items-center justify-evenly border-b '>
            <div onClick={forYouTweets} className='cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-4 rounded'>
              <h1 className="font-bold text-gray-600"><span className={`${isActive ?  "border-b-4 border-transparent" : "border-b-4 border-blue-600" } cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
              >For You</span> </h1>
              </div>
          
              

            <div onClick={followingTweetHandler} className='cursor-pointer hover:bg-gray-200 w-full text-center px-3 py-4 rounded'>
              <h1 className='font-bold text-gray-600'>
              <span className={`${isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`}
              >Following</span></h1></div>
            </div>
            </div>
           

            <div className=' flex'>
              <div className='flex flex-row items-center p-3'>
                <div><Avatar  src='https://img.freepik.com/premium-photo/young-male-cartoon-developer-coding-badass-black-short_1057389-529.jpg?w=740' googleId="118096717852922241760" size="40" round={true} /></div>
              </div>
              <input type='text' className="w-full outline-none text-lg ml-2" placeholder='What Is Happening?' value={Description} onChange={((e)=>{
                setDescription(e.target.value)
              })}></input>
            </div>
            <div className='flex justify-between items-center  border-b border-gray-300 p-1.5'>
              <div className='ml-3'><CiImageOn className='text-blue-600 ' size={'25px'}/></div>
            <div>
              <button className='bg-blue-500 rounded-full px-4 py-2 text-white
              ' onClick={SubmitHandler}>Post</button>
            </div>


            </div>
           

               

       

    


       
    </div>
  )
} 