import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import toast from 'react-hot-toast' 
import {useNaviagte, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getUser} from '../redux/userSlice.js'




export const Login = () => {

  let [isLoogged, setisLogged] = useState(true)
  const [name,setname]=useState("")
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const nagivate = useNavigate()
  const dispatch = useDispatch()

const submitHandler = async (e) =>{
  e.preventDefault()
 // setname("")
 // setusername("")
   // setemail("")
   // setpassword("")


    if(isLoogged){
      //////////////////////////////----Login-----//////////////////////
      try{

        const res = await axios.post(`${USER_API_END_POINT}/login` , {email,password},{
          headers:{
            'Content-Type':"application/json"
          },
          withCredentials:true
        })
       
        
        dispatch(getUser(res?.data?.user))
        //toast of succes
        if(res?.data?.success){
          nagivate("/")
          toast.success(res?.data?.message)
          
        }

      }catch(err){

         //toast of error
      
          toast.error(err.response.data.message)
        
        console.log(err)

      }

    }
    
   
    else{
      //////////////////////////----Create New User-----------///////////////////
    
       try{
   const res = await axios.post(`${USER_API_END_POINT}/register`, {name,username,email,password},{
    headers:{
      'Content-Type':"application/json"
    },
    withCredentials:true
  }) 
   
   dispatch(getUser(res?.data?.createdUser))

        //toast of succes
         if(res?.data?.success){
            nagivate("/")
       toast.success(res?.data?.message)
            }
                  
         
       }catch(err){
        toast.error(err.response.data.message)
       }
 }

}

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
       <img src='https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png' width='360px'/>
        </div>
        <div className=''>
          <div className='font-bold text-6xl'>
            <h1>Happening Now</h1>
          </div>
          <h1 className='font-bold text-2xl mt-4 mb-2'>{isLoogged ? "Login" : "Join Us Today"}</h1>
          <form className='flex flex-col w-[50%] gap-3' onSubmit={submitHandler}>
            {
              !isLoogged && (<>
                <input type='text' placeholder='Name' className='font-semibold outline-blue-500 border border-gray-800 px-3 py-1 rounded-full' value={name} onChange={((e)=>{
                  setname(e.target.value)
                })}/>
                <input type='text' placeholder='Username' className='font-semibold outline-blue-500 border border-gray-800 px-3 py-1 rounded-full' value={username} onChange={((e)=>{
                  setusername(e.target.value)
                })}/>
              
              </>)
            }
          
            <input type='text' placeholder='Email' className='font-semibold outline-blue-500 border border-gray-800 px-3 py-1 rounded-full'value={email} onChange={((e)=>{
                   setemail(e.target.value)
            })}/>
            <input  type="password" placeholder='Password' className='font-semibold outline-blue-500 border border-gray-800 px-3 py-1 rounded-full' value={password} onChange={((e)=>{
             setpassword(e.target.value)
            })}/>
           <button className='bg-blue-400 border-none py-2 px-3 rounded-full text-white text-lg'>{isLoogged ? "Login" : "Create Acount"}</button>

          </form>

          <div className='mt-2 font-bold cursor-pointer'><h1 onClick={()=>{
            setisLogged(!isLoogged)

          }}>{isLoogged ? "You Haven't Acount?":"Already Have Acount ?"}</h1></div>

        </div>
      </div>
      </div>
  )
}
