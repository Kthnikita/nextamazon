//@ts-nocheck
import Navbar from "@/components/navbar";
import Cartcontext from "@/components/cartcontext";
import prismaclient from "@/service/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/service/jwt";
import { redirect } from "next/navigation";
export default async function RootLayout({ children, modal }) {
  const Carddata=await prismaclient.cart.findMany()
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
      <Cartcontext children={children} initialcartval={Carddata} user={data.name}/>
    </div>
  );
}
