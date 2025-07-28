//@ts-nocheck
'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Addbtn from "./add_prd_btn";
function Navbar() {
  const[searchval,setsearchval]=useState("");
  const[suggestion,setsuggestion]=useState([]);
  useEffect(()=>{
     async function fetchdata() {
        const resp=await fetch("https://dummyjson.com/products?limit=194");
        const resl=await resp.json();
        const data=resl?.products
        const filtersugg=data.filter((val)=>{
          return val.title.toLowerCase().includes(searchval.toLowerCase())
        })
       setsuggestion( filtersugg.slice(0,10));
     }
     if(searchval){
      fetchdata();
     }
     else{
      setsuggestion([]);
     }
  },[searchval])
  return (
    <div>
        <div className="h-[60px] w-full flex  bg-[#121b2b] justify-between fixed">
    <div className="w-[361px] h-[60px] flex">
      <Link href="/"><img src="/amazonlogo.jpg" alt="" className="w-[130px] h-[60px]"/></Link>
       <div className="w-[205px] h-[60px]">
      <p className="text-gray-400">Delivering to Moradabad <br />
      <span className="font-bold text-white">updated location</span></p>
     </div>
    </div>
      <div className="w-[600px] h-[60px] flex justify-center items-center">
        <form action="/search" method="get" className="flex w-[600px] h-[40px]">
      <select name="" id="" className="w-[10%] h-[40px] bg-gray-400 rounded-l-md pl-3 ">
        <option value="all">All</option>
      </select>
     <div className="w-[80%] h-[40px] flex flex-col">
       <input type="text" placeholder="search items..." className="w-[100%] h-[40px] bg-white p-2" name="q" value={searchval} onChange={(e)=>{setsearchval(e.target.value)}}/>
     {suggestion.length==0?<div></div>: <div className="absolute z-10 bg-white top-[45px] w-[475px] rounded mt-2 p-2">
        {suggestion.map((val,ind)=>{
          return (
             <Link key={ind} href={`/search/?q=${val.title}`}>
      <div className="border-b-2 border-gray-300 m-1.5 hover:bg-gray-100">
        🔍{val.title}
      </div>
    </Link>
          
          )
        })}
      </div> }
     </div>
      <button className="w-[10%] h-[40px] bg-amber-400 rounded-r-md">🔍</button></form>
      </div>
      <div className="w-[80px] h-[60px] flex items-center justify-center">
        <select name="" id="" className="w-[70px] h-[40px] text-white">
          <option value="EN">🏳️‍⚧️EN</option>
          <option value="">🏁</option>
        </select>
      </div>
      <div className="h-[60px] w-[170px] flex justify-center items-center">
        <div className="h-[40px] w-[170px]">
         <Link href="/login"> <p className="text-sm text-white">Hello, sign in</p></Link>
        <p className="text-md font-bold text-white">Accounts & Lists</p>
        </div>
      </div>
      <div className="h-[60px] w-[100px] flex items-center">
        <div className="h-[40px] w-[100px]">
        <Addbtn/>
        </div>
      </div>
      <div className="w-[100px] h-[60px] flex items-center justify-center">
        <Link href="/cart"><div className="w-[100px] h-[45px] relative text-4xl">
          🛒<span className="text-sm text-white">Cart</span>
          <div className="h-4 w-4 rounded-full bg-orange-600 absolute top-0 right-12 text-white text-sm flex justify-center items-center">0</div>
        </div></Link>
      </div>
    {/* <div className="flex gap-4 w-24 h-24 justify-center items-center mr-6 text-black">
      <button className="bg-green-300 rounded p-2 hover:bg-green-400">Login</button>
      <button className="bg-blue-300 rounded p-2">Cart</button>
    </div> */}
   </div>
    </div>
  )
}

export default Navbar
