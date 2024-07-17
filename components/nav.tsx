import Link from "next/link";

import { Button } from "./ui/button";
import { Icons } from "./ui/icons";

const Nav = () => {
  return (
    <div className="sm:container">
      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <div className="relative">
              <div className="absolute inset-x-0 inset-y-2 w-full bg-gradient-to-r from-[#fb92cf] via-[#ffdd9b] to-[#2fd8fe] blur-md"></div>
              <div className="relative size-12 rounded-xl bg-black flex-center">
                <Icons.Logo className="size-7" />
              </div>
            </div>
          </Link>
          <div className="size-10 rounded-lg border border-foreground border-opacity-30 flex-center sm:hidden">
            <Icons.Menu />
          </div>
          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="#"
              className="text-foreground/60 transition hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition hover:text-foreground"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition hover:text-foreground"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition hover:text-foreground"
            >
              Customers
            </Link>
            <Button className=" ">Get for free</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
