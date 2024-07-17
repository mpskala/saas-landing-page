"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Showcase = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-tighter sm:text-6xl">
          The only NFT marketplace solution you&apos;ll need
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="mt-5 text-balance text-xl text-white/70">
            See why users all over the world choose NFTify over others to
            advance their NFT businesses: to be free from the limitations of
            aggregated marketplaces and the hassles of vendor management.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            ref={imgRef}
            src="/nft-dashboard.png"
            alt="Product Showcase"
            width={960}
            height={679}
            className="mx-auto mt-14 rounded-2xl"
          />
        </motion.div>
        <p className="mt-2 inline-block text-sm text-foreground/70">
          <Link
            href="https://dribbble.com/shots/22003750-NFTify-Dashboard-NFT"
            className="underline underline-offset-2"
          >
            Image
          </Link>{" "}
          by{" "}
          <Link
            href="https://dribbble.com/Vincentius_rangga1"
            className="underline underline-offset-2"
          >
            Vincentius Rangga
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Showcase;
