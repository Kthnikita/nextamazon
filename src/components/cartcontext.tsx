//@ts-nocheck
'use client'
import React, { createContext, useState } from 'react'
import Navbar from './navbar';
export const context=createContext();
function Cartcontext({children,initialcartval,user}) {

const[cart,setcart]=useState(initialcartval)
const[username,setuser]=useState(user);
  return (
    <div>
      <context.Provider value={{cart,setcart,username,setuser}}>
         <div className='flex flex-col gap-[60px]'>
                 <Navbar/>
{children}
         </div>
      </context.Provider>
    </div>
  )
}

export default Cartcontext
