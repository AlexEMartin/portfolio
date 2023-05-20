"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Artist = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="bg-indigo-300 relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="text-white absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <Image
        data-aos="fade-right"
        src="/dev1.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute top-0 left-0 w-3/12 md:w-2/12 object-cover m-4"
        alt="dev"
      />
      <Link
        className="h-12 mt-32"
        href="https://luciobaglivo.com"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        <h1 className="text-white text-2xl hover:opacity-70 font-bold transition-all duration-200 ease-in">
          Go to website
        </h1>
      </Link>
      <Image
        data-aos="fade-right"
        src="/lucio.jpg"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:w-5/12 h-auto rounded-lg border-8 border-indigo-400 object-cover mt-6"
        alt="lucio"
      />
      <Link
        className="text-white mt-16 text-xl hover:opacity-70 font-bold mt-4 transition-all duration-200 ease-in"
        href="https://github.com/AlexEMartin/lucio"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        REPO
      </Link>
    </div>
  );
};

export default Artist;
