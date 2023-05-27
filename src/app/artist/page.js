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
      <Link href="/" className="z-10">
        <h4 className="p-2 hover:opacity-70 transition-all duration-200 ease-in rounded-md bg-slate-700 text-white absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <Image
        src="/dev1.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute top-0 md:right-0 w-10/12 md:w-5/12 opacity-50"
        alt="dev"
      />
      <Link
        className="h-12 mt-20 z-10"
        href="https://luciobaglivo.com"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        <h1 className="text-white p-2 rounded-md bg-slate-700 text-xl hover:opacity-70 transition-all duration-200 ease-in">
          Go to website
        </h1>
      </Link>
      <Link
        className="text-white mt-2 p-2 bg-slate-700 z-10 rounded-md text-xl hover:opacity-70 transition-all duration-200 ease-in"
        href="https://github.com/AlexEMartin/lucio"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        REPO
      </Link>
      <Image
        data-aos="fade-right"
        src="/lucio.jpg"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:w-5/12 h-auto rounded-lg border-8 border-indigo-400 object-cover mt-4"
        alt="lucio"
      />
      <h2 className="text-white w-11/12 my-8 text-lg font-bold text-center">
        React - Context API
      </h2>
    </div>
  );
};

export default Artist;
