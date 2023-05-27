"use client";
import Link from "next/link";
import Slider from "../../components/SliderCrm";
import Image from "next/image";

const Crm = () => {
  return (
    <div className="bg-indigo-300 relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="z-10 bg-slate-700 p-2 rounded-md text-white absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl drop-shadow-lg shadow-black hover:opacity-70 transition-all duration-200 ease-in">
          Home
        </h4>
      </Link>
      <Image
        src="/dev4.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="opacity-60 absolute top-0 md:right-0 w-8/12 md:w-5/12 object-cover m-4"
        alt="dev4"
      />
      <h1 className="z-10 bg-slate-700 p-2 rounded-md text-white mt-20 text-xl">
        Shop Deco
      </h1>
      <Link
        className="z-10 bg-slate-700 p-2 rounded-md text-white mt-3 text-lg hover:opacity-70 transition-all duration-200 ease-in mb-4 md:mb-0"
        href="https://github.com/AlexEMartin/pig"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        REPO
      </Link>
      <Slider />
      <h2 className="text-white my-8 text-lg mt-8">Django - Postgres</h2>
    </div>
  );
};

export default Crm;
