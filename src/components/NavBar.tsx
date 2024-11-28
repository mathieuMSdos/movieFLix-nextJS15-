"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

  // gestion de la page active
    const pathname = usePathname()


  return (
    <nav className="h-full w-full flex">
      {/* le logo */}
      <div className="h-full w-fit flex gap-2  p-2 items-center  ">
        <Image
          src="/images/logoMovieFlix.webp"
          alt="logo"
          width={40}
          height={40}
       />
       <p className=" font-extrabold text-white">Movieflix</p>
      </div>

      {/* les navlink */}
      <ul className="h-full w-full flex justify-center items-center gap-4  text-slate-100 ">
        <li>
          <Link href="/" className={pathname === "/" ? "relative before:content-['] before:absolute before:top-6 before:w-full before:h-1 before:bg-white "  : ""}>Accueil</Link>
        </li>
        <li>
          <Link href="/about-us" className={pathname === "/about-us" ? "relative before:content-['] before:absolute before:top-6 before:w-full before:h-1 before:bg-white" : ""}>About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
