import Link from "next/link";

import { Icons } from "./ui/icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-center">
            © 2024{" "}
            <Link
              href="https://www.mpskala.com/"
              rel="noreferrer"
              target="_blank"
              className="underline underline-offset-2 transition hover:text-foreground"
            >
              mpskala
            </Link>
            . All rights reserved.
          </p>
          <ul className="flex justify-center gap-2.5 sm:gap-4">
            <li>
              <Link
                href="https://github.com/mpskala"
                rel="noreferrer"
                target="_blank"
                className="p-1 transition hover:text-foreground"
              >
                <Icons.GitHub className="size-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mpskala/"
                rel="noreferrer"
                target="_blank"
                className="p-1 transition hover:text-foreground"
              >
                <Icons.LinkedIn className="size-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
