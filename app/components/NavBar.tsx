"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import Logo from "./Logo";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const { data: session } = useSession();
  return (
    <nav className="bg-white dark:bg-slate-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full-xl flex flex-wrap items-center justify-end sm:justify-between mx-auto p-3">
        <Logo />
        <div className="flex flex-row gap-1 justify-end">
          <div className="text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 dark:hover:bg-slate-800 transition cursor-pointer">
            request an Appointment
          </div>
          <div
            onClick={toggleOpen}
            className="p-4 py-1 md:px-2 border-[1px] border-neutral-200  dark:border-gray-700 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <AiOutlineMenu />
            <Image
              alt="Avatar"
              className="rounded-full"
              height="30"
              width="30"
              src="/images/placeholder.jpg"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-3/4 md:w-[20vw] bg-white dark:bg-slate-900 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              {!session ? (
                <MenuItems onClick={() => signIn()} label="signin" />
              ) : (
                <MenuItems onClick={() => signOut()} label="logout" />
              )}
            </>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
