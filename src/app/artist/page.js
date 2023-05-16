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
    <div className="relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <Link
        className="h-12 mt-32"
        href="https://luciobaglivo.com"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        <h1 className="text-2xl hover:opacity-70 font-bold transition-all duration-200 ease-in">
          Sitio web para un gran Artista
        </h1>
      </Link>
      <Image
        data-aos="fade-right"
        className="rounded-lg object-cover mt-6"
        src="/lucio.jpg"
        width="400"
        height="500"
      />
      <Link
        className="mt-16 text-xl hover:opacity-70 font-bold mt-4 transition-all duration-200 ease-in"
        href="https://github.com/AlexEMartin/lucio"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        Repositorio
      </Link>
    </div>
  );
};

export default Artist;
