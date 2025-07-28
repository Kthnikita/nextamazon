//@ts-nocheck
import React from 'react'
import products from "@/contents/data"
import Link from 'next/link'
import Addcartbutton from './Addcartbutton'
import Editbtn from './edit_prd_btn'
import Delete from './delete'
function Carddata({prod}) {
  return (
   
      <div className="flex gap-6 flex-wrap justify-center">
        {prod.map((val, ind) => {
          return (
            <div
              className="h-[500px] w-[400px] flex flex-col justify-between bg-white rounded shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 m-5"
              key={ind}
            >
              <Link href={`/product/${val.id}`}>
                <img
                  src={val.img_url}
                  alt=""
                  className="w-full h-[220px] object-fill p-4"
                />
              </Link>

              <div className="flex flex-col gap-1 px-4">
                <h1 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {val.title}
                </h1>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {val.description}
                </p>
                <p className="text-xl font-bold text-red-600 mt-1">
                  ₹{val.price}
                </p>
                <Editbtn item={val}/>
                <Delete itemid={val.id}/>
              </div>
               
              <div className="flex justify-between items-center px-4 py-3">
                <Link href="" className="flex-1 mr-2">
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
  
  )
}

export default Carddata
