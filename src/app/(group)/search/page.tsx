//@ts-nocheck
import Navbar from "@/components/navbar";
import products from "@/contents/data";
import Link from "next/link";
import Addcartbutton from "@/components/Addcartbutton";
import prismaclient from "@/service/prisma";
export function generateMetadata({searchParams}){
  const seachterm=searchParams.q;
  return{
     title: seachterm
  }
}
async function  page({searchParams}){
    const query=searchParams.q;
    // const min=searchParams.min;
    // const max=searchParams.max;
    // const rating=searchParams.rate;
    // const sort=searchParams.sort;
    let data=[];
    try{
    //   const url='https://dummyjson.com/products/search?q='+query;
    // const resp= await fetch(url);
    // const resl=await resp.json();
    // data=resl?.products;
   data= await prismaclient.products.findMany({
      where:{
        title:{
          contains:query
        }
      }
    })
    }
    catch(err){
      console.log("error");
    }
    // let arr=products.filter((val)=>{if(val.title.toLowerCase().includes(query.toLowerCase()))return true})
  //  if(min){
  //   data =data.filter((val)=>{if(val.price>min)return true})
  //  } 
  //  if(max){
  //   data =data.filter((val)=>{if(val.price<max)return true})
  //  }
  //   if(max){
  //   data =data.filter((val)=>{if(val.price<max)return true})
  //  }
  //   if(rating){
  //   data =data.filter((val)=>{if(val.rating>=rating)return true})
  //  }
  //  if(sort){
  //   if(sort=="l-h"){
  //    data.sort((a, b) => a.price - b.price);
  //   }
  //   if(sort=="h-l"){
     
  //   data.sort((a, b) => b.price - a.price);
  //   }
  //  }
  return (
         <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="flex gap-6 flex-wrap justify-center">
        {data.length==0?<div className="font-bold text-xl">NO search results found for your query</div>:data.map((val, ind) => {
          return (
            <div
              className="h-[500px] w-[400px] flex flex-col justify-between bg-white rounded shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 m-5"
              key={ind}
            >
              <Link href={`/product/${val.id}`}>
                <img
                  src={val.thumbnail}
                  alt=""
                  className="w-full h-[220px] object-contain p-4"
                />
              </Link>

              <div className="flex flex-col gap-1 px-4">
                <h1 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {val.title}
                </h1>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {val.description}
                </p>
                <p className="text-md text-yellow-400 font-semibold line-clamp-3 mt-1">
                  ⭐{val.rating}
                </p>
                <p className="text-xl font-bold text-red-600 mt-1">
                  ₹{val.price}
                </p>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <Link href="/cart" className="flex-1 mr-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded">
                    <Addcartbutton item={val} />
                  </button>
                </Link>
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default page
