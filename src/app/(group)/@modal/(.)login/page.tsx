'use client'
import { useRouter } from "next/navigation";
function page() {
  const router=useRouter();
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center  bg-black/40 backdrop-blur-sm">
      <div className="w-[400px] h-[400px] bg-white rounded-xl flex flex-col gap-1 justify-center items-center relative">
        <div className="absolute top-0 right-1"><button onClick={()=>router.back()}>❌</button></div>
        <h1 className="font-bold text-xl">LOGIN</h1>
      <div className="w-[80%] flex flex-col gap-2"><label htmlFor="email" className="font-semibold text-md">Email</label>
      <input type="text" id="email" placeholder="Enter your email..." className="w-[100%] h-10 border-2 border-gray-300 rounded p-2"/></div>
    <div className="w-[80%] flex flex-col gap-2">
        <label htmlFor="pass" className="font-semibold text-md">Password</label>
      <input type="text" id="pass" placeholder="Enter your password" className="w-[100%] h-10 border-2 border-gray-300 rounded p-2" />
    </div>
      <button className="bg-amber-300 w-[80%] rounded-2xl h-8 text-md mt-4">Login</button>
      <p className="mt-2">Don't have an account?<span className="text-blue-500">SignIn</span></p>
      </div>
    </div>
  )
}

export default page