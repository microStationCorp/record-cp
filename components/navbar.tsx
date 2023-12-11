"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openNav, setNav] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setNav(false);
  }, [pathname]);

  return (
    <div className="bg-base-100 shadow-md p-5 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <Link href={"/"} as="/" className="btn btn-ghost normal-case text-2xl">
          Records
        </Link>

        <span className="cursor-pointer md:hidden block mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => {
              setNav(!openNav);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                !openNav
                  ? "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-cyan-100 w-full left-0 md:w-auto md:bg-inherit md:py-0 py-4 pl-7 md:pl-0 md:opacity-100 transition-all ease-in duration-300
          ${openNav ? ` opacity-100 top-[80px]` : ` opacity-0 top-[-400px]`}`}
      >
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/staffs"
            className="capitalize text-lg hover:text-cyan-500 duration-300"
          >
            Staffs
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/"
            className="capitalize text-lg hover:text-cyan-500 duration-300"
          >
            coaches
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/"
            className="capitalize text-lg hover:text-cyan-500 duration-300"
          >
            movement
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/"
            className="capitalize text-lg hover:text-cyan-500 duration-300"
          >
            works
          </Link>
        </li>
      </ul>
    </div>
  );
}
