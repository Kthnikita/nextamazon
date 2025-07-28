//@ts-nocheck
import Navbar from "@/components/navbar";
export default function RootLayout({ children, modal }) {
  return (
    <div>
      <Navbar />
      {modal}
      {children}
    </div>
  );
}
