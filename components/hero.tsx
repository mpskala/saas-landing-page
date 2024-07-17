import Link from "next/link";
import React from "react";

import { Button } from "./ui/button";
import { Icons } from "./ui/icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#0a0a0a,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#b48cde] bg-black bg-[radial-gradient(closest-side,#0a0a0a_82%,#9560eb)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[250vw]"></div>
      <div className="container relative">
        <div className="mb-8 flex-center">
          <Link
            href="#"
            className="inline-flex gap-3 rounded-lg border border-foreground/30 px-2 py-1"
          >
            <span className="[-webkit-background-clip:text]] bg-gradient-to-r from-[#fb92cf] via-[#ffdd9b] to-[#2fd8fe] bg-clip-text text-transparent">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-0.5">
              <span>Read More</span>
              <Icons.ArrowRight className="h-4 stroke-1" />
            </span>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center text-6xl font-bold tracking-tighter sm:text-9xl">
            Your own
            <br />
            NFT Marketplace
          </h1>
        </div>
        <p className="mx-auto my-8 max-w-lg text-balance text-center text-xl">
          The fastest and easiest way to fully unlock the potential of your
          digital assets. Create and run an exclusive marketplace for your NFT
          business today!
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="font-medium">
            Get for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
