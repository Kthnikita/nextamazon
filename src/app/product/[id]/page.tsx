//@ts-nocheck

import products from "@/contents/data"
import prismaclient from "@/service/prisma";
import { notFound } from "next/navigation";
import { title } from "process";
//  export async function generateMetadata({params}){
//     const id=params.id
//     const url="https://dummyjson.com/products/"+id;
//     const resp=await fetch(url);
//     const val=await resp.json();
//   return{
//     title:val.id?val.title:"Product does not exist",
//     description:val.description
//   }
// }
//  const arr=[]
async function page({params}) {
    // const url="https://dummyjson.com/products/"+id;
    // const resp=await fetch(url);
    // const val=await resp.json();
    // if(!val.id){
    //   notFound();
    // }
    // const val=data.find((e)=>{
    //     if(e.id==id){
    //         arr.push(e);
    //         return true;
    //     }
    // })
    // function handeldelete(delid){
    //      arr=arr.filter((e)=>{if(e.id!=delid)return true})
    // }
    const paramid=params.id
    const resp=await fetch(`http://localhost:3000/api/products/${paramid}`);
    const resl=await resp.json();
    const val=resl?.data;
    // const val=await prismaclient.products.findUnique({
    //     where:{
    //         id:paramid
    //     }
    // })
    // if(!val){
    //     return <div>not found</div>
    // }
  return (
    
           
            
   <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-full max-w-4xl h-[300px] flex gap-4 bg-white rounded-lg shadow-md overflow-hidden">
  <img src={val.img_url} alt={val.title} className="w-1/2 h-full object-contain bg-gray-100 p-4" />

  <div className="flex flex-col justify-between w-1/2 p-4">
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{val.title}</h1>
      <p className="text-sm text-gray-600 line-clamp-3">{val.description}</p>
    </div>

    <div className="flex flex-col gap-2">
      <p className="text-xl font-bold text-red-600">₹{val.price}</p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded">
        Buy Now
      </button>
    </div>
  </div>
</div>
   </div>

            
         
  )
}

export default page
