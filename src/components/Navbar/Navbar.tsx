import { NAVBAR_REM_HEIGHT } from "@/lib/global";
import ThemeController from "../Theme/ThemeController";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar  w-full"
      style={{
        height: `${NAVBAR_REM_HEIGHT}rem`,
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image src="/logoNoText.png" alt="Logo" width={40} height={40} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row"></ul>
      </div>
      <div className="navbar-end">
        <Link href="/about" className="btn btn-ghost mx-2">
          About
        </Link>
        <Link href="/contact" className="btn btn-primary mx-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
