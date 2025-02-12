import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOtherUsers } from '../redux/userSlice';

export const RightSidebar = ({ otherUsers }) => {
   
  const [search , setsearch] = useState("")

   const dispatch = useDispatch()

//  const searchUsers = otherUsers.filter((user)=>{
   // return user.name.toLowerCase().includes(search.toLowerCase());
 // })
 
 
// if(searchUsers.length > 0){
//  dispatch(getOtherUsers(searchUsers))
// }

  //useEffect(()=>{
   // if(searchUsers.length > 0){
    //  dispatch(getOtherUsers(searchUsers))
   // }
 // },[search , searchUsers])
  
  
  return (
    <div className="w-[24%] hidden md:block sticky ">
      <div className="p-2 bg-gray-200 rounded-full flex items-center text-gray-500">
        <CiSearch size={'20px'} />
        <input
          type="text"
          className="ml-[5px] bg-transparent outline-none px-2"
          placeholder="Search"
          onChange={((e)=>setsearch(e.target.value))}
        />
      </div>

      <div className="p-3 bg-gray-200 rounded-2xl my-2 w-full">
        <h1 className="font-bold">Who To Follow</h1>
        <div className="flex flex-col w-full mt-4">
          {otherUsers?.map((user) => (
            <div
              key={user?._id}
              className="flex flex-row items-center justify-between w-full p-2 hover:bg-gray-100 rounded-lg"
            >
              {/* Left: Avatar + Name */}
              <div className="flex items-center gap-3">
                <Avatar
                  src="https://img.freepik.com/premium-photo/3d-animation-style-cute-baby-saying-hello_911201-11230.jpg"
                  googleId="118096717852922241760"
                  size="40"
                  round={true}
                />
                <div className="flex flex-col">
                  <h1 className="font-bold text-sm">{user?.name}</h1>
                  <p className="text-xs text-gray-500">@{user?.username}</p>
                </div>
              </div>

              
              {/* Right: Follow Button */}
              <Link to={`/profile/${user?._id}`}>
              <button className="rounded-full bg-zinc-900 px-4 py-1 text-white text-sm hover:bg-zinc-800">
                Profile
              </button></Link>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
