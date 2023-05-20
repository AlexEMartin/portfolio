"use client";
import Link from "next/link";
import Slider from "../../components/SliderEcommerce";
import Image from "next/image";

const Ecommerce = () => {
  return (
    <div className="bg-indigo-300 relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="text-white absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <Image
        data-aos="fade-right"
        src="/dev2.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute top-0 left-0 w-3/12 md:w-2/12 object-cover m-4"
        alt="dev2"
      />
      <h1 className="text-white mt-32 text-2xl font-bold">E-Commerce</h1>
      <Slider />
      <h2 className="text-white w-11/12 mt-8 text-lg font-bold text-center">
        React / Firebase / Styled-components / API / Fetch
      </h2>
      <Link
        className="text-white mt-4 text-lg font-bold mt-12 hover:opacity-70 transition-all duration-200 ease-in mb-20"
        href="https://github.com/AlexEMartin/ecommerce-coderhouse"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        REPO
      </Link>
    </div>
  );
};

export default Ecommerce;
