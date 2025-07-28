
//@ts-nocheck
'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
function Sidebar() {
    const router = useRouter();
   const search=useSearchParams();
   const mn=search.get('min') || "";
   const mx=search.get('max') || "";
   const q=search.get('q');
   const sort=search.get('sort');
   const rt=search.get('rate')||1;
   const[max,setmax]=useState(mx);
   const[min,setmin]=useState(mn);
  const[rate,setrate]=useState(rt);
  const [price,setprice]=useState(sort);
   function handelsubmit(){
    let url="/search?"
    if(min){
        url=url+"&min="+min
    }
     if(max){
        url=url+"&max="+max
    }
     if(q){
        url=url+"&q="+q
    }
    if(rt){
      url=url+"&rate="+rate;
    }
    if(price){
      url=url+"&sort="+price;
    }
router.push(url);
   }

   function handelreset(){
   let url="/search?"
    if(min){
        url=url+"&min="+""
    }
     if(max){
        url=url+"&max="+""
    }
     if(q){
        url=url+"&q="+q
    }
    if(rt){
      url=url+"&rate="+1;
    }
    if(price){
      url=url+"&sort="+ "All";
    }
router.push(url);
   }

  return (
    <div>
     <div className="w-[250px] min-h-screen bg-white flex justify-center shadow-lg shadow-gray-700 m-3">
        <div>
           <div className="flex flex-col gap-2 m-3">
            <h1 className="font-bold text-md text-black">Filters</h1>
            <label htmlFor="minprice">Min Price</label>
            <input type="text" name="min" id="minprice" value={min} onChange={(e)=>{setmin(e.target.value)}} className="border p-2 border-gray-600 rounded" placeholder="min price"/>
            <label htmlFor="maxprice">Max Price</label>
            <input type="text" name="max" id="maxprice" value={max} onChange={(e)=>{setmax(e.target.value)}} className="border p-2 border-gray-600 rounded" placeholder="max price"/>
            <label htmlFor="rating">Rating</label>
            <select name="rate" id="rating" value={rt} onChange={(e)=>{setrate(e.target.value)}} className="border h-8 rounded">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="sort" className="mt-3">Sort By 
            </label>
            <select name="sort" id="sort" value={price} onChange={(e)=>{setprice(e.target.value)}} className="border h-8 rounded">
              <option value="all">All</option>
              <option value="l-h">Price: Low to High</option>
              <option value="h-l">Price: High to Low</option>
            </select>
           <div className="flex justify-center gap-2 mt-3">
             <button onClick={handelsubmit} className="w-24 h-10 rounded bg-blue-950 text-white font-bold">Go</button>
              <button onClick={handelreset} className="w-24 h-10 rounded bg-blue-950 text-white font-bold">Reset</button>
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
