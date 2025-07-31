//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const url=req.url;
    const urlobj=new URL(url);
    const query=urlobj.searchParams.get('q');
     const resp=await prismaclient.products.findMany({
        where:{
            title:{
                contains:query,
                mode:"insensitive"
            }
        }
    });
    if(!query){
        return NextResponse({
            msg:false,
            data:[]
        })
    }
   

    return NextResponse.json({
        msg:true,
        data:resp
    })
}