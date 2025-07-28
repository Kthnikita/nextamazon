//@ts-nocheck
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}) {
  return (<>
  <div className="w-full flex gap-2">
    <Sidebar/>
  {children}
  </div>
  </>
  );
}
