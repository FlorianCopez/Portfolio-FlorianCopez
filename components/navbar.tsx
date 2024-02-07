"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { useState } from "react";

export default function Navbar() {
  const [state, setState] = useState(false);

  const onClickState = () => {
    setState(!state);
  };

  return (
    <nav className="w-full uppercase font-bold text-xl">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:border-b">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Logo />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={onClickState}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="text-center space-y-8 md:flex md:space-x-12 md:space-y-0 md:justify-end">
            <li className="hover:text-sky-600">
              <Link href="/a-propos">A propos</Link>
            </li>
            <li className="hover:text-sky-600">
              <Link href="/projets">Projets</Link>
            </li>
            <li className="hover:text-sky-600">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
