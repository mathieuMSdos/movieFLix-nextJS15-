import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="h-full w-full flex">
      {/* le logo */}
      <div className="h-full flex items-center overflow-hidden">
        <Image
          src="/images/logoMovieFlix.webp"
          alt="logo"
          width={80}
          height={80}
       />
      </div>

      {/* les navlink */}
      <ul className="h-full w-full flex justify-center items-center gap-4 font-semibold text-slate-100 ">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
