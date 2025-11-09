"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Carousel = ({ items }) => {
  const containerRef = useRef(null);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={containerRef}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ card }) => {
  return (
    <>
      <motion.div
        className="relative h-85 w-60 md:h-[40rem] md:w-96 overflow-hidden bg-neutral-900 rounded-3xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={card.href || "#"}>
          <div className="relative h-full w-full">
            <BlurImage
              src={card.src}
              alt={card.title}
              fill
              className="object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <motion.p
                className="text-white text-sm md:text-base font-medium mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {card.category}
              </motion.p>
              <motion.p
                className="text-white text-xl md:text-3xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {card.title}
              </motion.p>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, fill, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  
  const style = fill ? { 
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'cover'
  } : {};
  
  return (
    <img
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      style={style}
      onLoad={() => setLoading(false)}
      src={src}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading="lazy"
      decoding="async"
      alt={alt || "Background of a beautiful view"}
      {...rest}
    />
  );
};
