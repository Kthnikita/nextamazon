//@ts-nocheck
'use client'
import { signin } from "@/service/productaction";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
function page() {
  const router=useRouter();
  const[email,setemail]=useState("");
  const[pass,setpass]=useState("");
  async function handellogin(){
   const resp=await signin({email,pass});
    if(resp.success){
    alert(resp.msg);
    router.push("/")
   }
   else{
    alert(resp.msg);
    router.push("/signup")
   }
  }
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center  bg-black/40 backdrop-blur-sm fixed z-50">
      <div className="w-[400px] h-[400px] bg-white rounded-xl flex flex-col gap-1 justify-center items-center relative">
        <div className="absolute top-0 right-1"><button onClick={()=>router.back()}>❌</button></div>
        <h1 className="font-bold text-xl">LOGIN</h1>
      <div className="w-[80%] flex flex-col gap-2"><label htmlFor="email" className="font-semibold text-md">Email</label>
      <input type="text" id="email" placeholder="Enter your email..." className="w-[100%] h-10 border-2 border-gray-300 rounded p-2" onChange={(e)=>setemail(e.target.value)}/></div>
    <div className="w-[80%] flex flex-col gap-2">
        <label htmlFor="pass" className="font-semibold text-md">Password</label>
      <input type="text" id="pass" placeholder="Enter your password" className="w-[100%] h-10 border-2 border-gray-300 rounded p-2" onChange={(e)=>setpass(e.target.value)}/>
    </div>
      <button className="bg-amber-300 w-[80%] rounded-2xl h-8 text-md mt-4" onClick={handellogin}>Login</button>
      <Link href="/signup" className="mt-2">Don't have an account?<span className="text-blue-500">SignIn</span></Link>
      </div>
    </div>
  )
}

export default page