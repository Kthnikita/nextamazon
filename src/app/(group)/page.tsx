//@ts-nocheck
import Navbar from "@/components/navbar";
import Carddata from "@/components/carddata";
import { Suspense } from "react";
import prismaclient from "@/service/prisma";
export default function Home() {
 
  return (
   <div>
    <Suspense fallback={<div>
      <h1>loading..</h1>
    </div>}>
    <Homepage/>
    </Suspense>
   </div>
  );
}
  async function Homepage(){
  //  const res=await fetch("https://dummyjson.com/products?limit=50");
  // const resl= await res.json();
  // const prod=resl?.products||[];
  const res=await fetch("http://localhost:3000/api/products");
  const resp=await res.json();
  const prod=resp?.data;
  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <Carddata prod={prod}/>
    </div>
  )
 }