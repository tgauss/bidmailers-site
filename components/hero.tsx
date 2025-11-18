"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
export function Hero() {
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={parentRef}
      className="relative flex max-w-7xl rounded-b-3xl my-2 md:my-20  mx-auto flex-col items-center justify-center pt-32 overflow-hidden px-4 md:px-8 bg-gradient-to-t from-[#e3f3ff]  via-[#f0f8ff] to-[rgba(255,255,255,1)]"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-6xl text-center text-4xl font-semibold tracking-tight text-gray-700  md:text-7xl">
        <Balancer>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b  from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent"
            )}
          >
            Put your roof price in{" "}
            <span className="bg-gradient-to-b from-[#188bf6] to-[#1273d6] bg-clip-text text-transparent">
              every mailbox
            </span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent py-2"
            )}
          >
            on the{" "}
            <span className="bg-gradient-to-b from-[#188bf6] to-[#1273d6] bg-clip-text text-transparent">
              block
            </span>
          </motion.h2>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base/6 text-gray-600  sm:text-base"
      >
        One person with the Bid Mailers app can mark 200+ homes in an hour.
        Every marked home gets your custom roof estimate in the mail,
        printed, stuffed, and sent for you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-4 mt-6 z-10 sm:mb-6 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row"
      >
        <Button
          as={Link}
          href="/login"
          variant="primary"
          className="w-full sm:w-auto px-8 h-12 flex items-center justify-center"
        >
          Start My First Bid Mailing
        </Button>
      </motion.div>

      {/* App Store Badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.9 }}
        className="mb-8 sm:mb-10 md:mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 z-10"
      >
        <Link
          href="https://apps.apple.com/us/app/bid-mailers-mobile/id6741305044"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <Image
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.bidmailers.app&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={155}
            height={60}
            className="h-[58px] w-auto -my-2"
          />
        </Link>
      </motion.div>

      <div className="pt-[2rem] pb-[4rem] w-full min-h-[35rem] md:min-h-[45rem] relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-0 left-0 right-0 z-10"
        >
          <div className="relative max-w-sm md:max-w-xl mx-auto px-4">
            <Image
              src="/bid-mailers-mockup.webp"
              alt="Bid Mailers App Interface"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
        <BackgroundShape />
      </div>
    </div>
  );
}

function BackgroundShape({
  mobileBreakpoint = "(max-width: 768px)",
  sizes = {
    mobile: {
      outer: 800,
      middle: 600,
      inner: 400,
    },
    desktop: {
      outer: 1400,
      middle: 1100,
      inner: 800,
    },
  },
  animations = {
    middle: {
      scale: [1, 1.02, 1],
      y: [0, -5, 0],
      duration: 2,
    },
    inner: {
      scale: [1, 1.03, 1],
      y: [0, -7, 0],
      duration: 2.5,
    },
  },
  gradientColors = {
    start: "rgba(255,255,255,1)",
    mid1: "rgba(255,255,255,0.8)",
    mid2: "rgba(255,255,255,0.4)",
    end: "rgba(255,255,255,0)",
  },
}) {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const { outer, middle, inner } = isMobile ? sizes.mobile : sizes.desktop;

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        className="absolute z-0 rounded-full border border-white/30"
        style={{
          width: outer,
          height: outer,
        }}
      />
      <motion.div
        className="absolute z-0 rounded-full border border-white"
        style={{
          width: middle,
          height: middle,
          clipPath: "circle(50% at 50% 50%)",
          background: `
            radial-gradient(
              circle at center,
              ${gradientColors.start} 0%,
              ${gradientColors.mid1} 20%, 
              ${gradientColors.mid2} 40%,
              ${gradientColors.end} 60%
            )
          `,
        }}
        animate={{
          scale: animations.middle.scale,
          y: animations.middle.y,
        }}
        transition={{
          duration: animations.middle.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      ></motion.div>
      <motion.div
        className="absolute bg-white/5 z-2 
          rounded-full 
          border border-[rgba(255,255,255,0.1)]
          shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
        style={{
          width: inner,
          height: inner,
        }}
        animate={{
          scale: animations.inner.scale,
          y: animations.inner.y,
        }}
        transition={{
          duration: animations.inner.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}

