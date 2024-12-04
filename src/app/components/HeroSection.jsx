"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 h-screen snap-start content-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
      <div className="col-span-4 sm:col-start-2">
        <Image src="/hero.jpg" alt="image" className="" width={1200} height={1000}/>
      </div>
        <div className="sm:col-start-7 flex flex-col place-content-between">
          <h1 className="sm:text-9xl text-4xl">Hi, Welcome</h1>
          <Link
            href="/ZO_resume.pdf"
            className="inline-block text-white mt-3 w-fit"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
              Resume
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
