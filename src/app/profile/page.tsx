//@ts-nocheck
import { verifyToken } from '@/service/jwt';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers'
import React from 'react'

async function page() {
    const cookie=await cookies();
    let data;
    try{
        data=verifyToken(cookie.get('token')?.value);
    }
    catch(e){
     redirect("/login")
    }
  return (
    <div>
      {data.name}
    </div>
  )
}

export default page
