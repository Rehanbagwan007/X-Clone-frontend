import React, { useState , useEffect} from 'react'
import Avatar from 'react-avatar';
import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TWEET_API_END_POINT, USER_API_END_POINT } from '../utils/constant';
import { getRefresh } from '../redux/tweetSlice';
import { FaHeart } from "react-icons/fa";

import { RiDeleteBin7Line } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";


export const Tweet = ( {tweets} ) => {
  
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user)

    

  

    ///like twwet  =>

        const [like,setlike] = useState(false)
       
            
           

            

        
  // console.log(fill_like)

         

        const likeTweet = async(id)=>{
            try{

            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}` , {id:user?._id},{withCredentials:true})
                      
              
               
                dispatch(getRefresh())
                
                if(res.data.success){
                   
                    toast.success(res.data.message)
                    setlike()
                }

            }catch(err){
                
                toast.error(err)
            }
        }
   

      



        //delete tweet

        const deleteTweet = async (id)=>{


            try{
                axios.defaults.withCredentials = true
                const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`)

                
                dispatch(getRefresh())
                if(res?.data?.success){
                   
                    toast.success(res.data.message)
                  
                }



            }catch(err){
                console.log(err);
                
            }
        }








   
  

//bookmark tweet
    const bookmarkHandler = async (id)=>{
        try{
            
            const res =  await axios.put(`${USER_API_END_POINT}/bookmark/${id}` , {id:user?._id} , {withCredentials:true})
            
            dispatch(getRefresh())
           
       
            if(res?.data?.success){
                toast.success(res.data.message)
            }

        }catch(err){
            console.log(err);
            
        }
    }
   




  return (
    <div className='mt-4 w-full '>
        <div className='ml-2 w-full  border-b'>
            <div className='flex '>
            <Avatar googleId="118096717852922241760" size="42" round={true} src='https://img.freepik.com/premium-photo/speech-therapist-digital-avatar-generative-ai_934475-9023.jpg'/>
            <div className='ml-2 w-[80%] '>
            <div className='flex flex-col'>
                <h1 className='font-bold'>{tweets?.userID?.name}</h1>
            <p className='text-gray-500 text-sm '>@{tweets?.userID?.username}</p>
            <div >
                <p>{tweets?.description}</p>
            </div></div>
            
            <div className='flex justify-between mt-1.5 items-centre'>
                <div className='flex items-center gap-1'>
                    <FaRegComment className='hover:bg-green-200 cursor-pointer'/> <p>0</p>

                </div>
                <div className='flex  items-center gap-1'>
                  <div className='' onClick={()=> likeTweet(tweets?._id)
                   
                  }>
            
                    
                    <CiHeart  className='hover:bg-yellow-200 cursor-pointer '/>  
            
                        
               

                 
                    </div>  <p>{tweets?.likes?.length} <span>Likes</span></p>
                </div>
               
                <div className='flex  items-center gap-1' onClick={()=>{bookmarkHandler(tweets._id)
                     
                   
                   
                   
                }}>
                   
                  <CiBookmark  className='hover:bg-blue-200 cursor-pointer'/>
                   <p>{}</p>
                </div>

    
   

                <div className='flex items-center gap-1' onClick={(()=>{
                    deleteTweet(tweets?._id)
                })}>
                     { 
               user?._id === tweets?.userID?._id && 
                     
                     <RiDeleteBin7Line className='hover:bg-green-200 cursor-pointer' size={''}/>   
                     
                     }</div>

              

                
            </div>

           
            
            </div>

            
            </div>
            
           
           
        </div>
 </div>
  )
}
