"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.JSX.Element;
  title: string;
  description: string;
}) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, #0a0a0a, transparent)`;

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      if (!border.current) return;

      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect?.y);
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="relative rounded-xl border border-white/30 px-5 py-10 text-center sm:flex-1">
      <motion.div
        className="absolute -inset-[1px] rounded-xl border-2 border-purple-400"
        ref={border}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-foreground text-background">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-balance text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
