import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    
<div className=" flex">
  {/* LEFT */}
    <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
      <Link href="/" className="flex items-center justify-content-center lg:justify-start gap-2">

      <Image src="/logo.png" alt="logo" height={32} width={32}></Image>
      <span className="hidden lg:block font-semibold py-5 text-lg ">SCHOOL</span>
      </Link>
      <Menu/>
    </div>

    {/* RIGHT */}
    <div className="  w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-gray-100 flex flex-col ">
      <Navbar />
      {children}
    </div>
  


    </div>
        
    );
  }
  