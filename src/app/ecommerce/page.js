"use client";
import Link from "next/link";
import Slider from "../../components/SliderEcommerce";
import Image from "next/image";

const Ecommerce = () => {
  return (
    <div className="bg-indigo-300 relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="z-10 text-white bg-slate-700 hover:opacity-70 transition-all duration-200 ease-in p-2 rounded-md absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <Image
        src="/dev2.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute top-0 md:right-0 w-8/12 md:w-5/12 opacity-50 m-4"
        alt="dev2"
      />
      <h1 className="text-white bg-slate-700 p-2 rounded-md mt-20 text-xl z-10">
        E-Commerce
      </h1>
      <Link
        className="z-10 text-white bg-slate-700 p-2 rounded-md mt-4 text-lg mt-3 hover:opacity-70 transition-all duration-200 ease-in"
        href="https://github.com/AlexEMartin/ecommerce-coderhouse"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        REPO
      </Link>
      <Slider />
      <h2 className="text-white w-11/12 my-8 text-lg font-bold text-center">
        React - Firebase - Styled-components - API - Fetch
      </h2>
    </div>
  );
};

export default Ecommerce;
