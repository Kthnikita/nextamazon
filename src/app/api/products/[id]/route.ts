//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest,{params}){
       const id=params.id;
       const resp=await prismaclient.products.findUnique({
        where:{
            id
        }
       })
       return NextResponse.json({
        msg:true,
        data:resp
       })
}