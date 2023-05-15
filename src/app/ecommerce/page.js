"use client"
import Link from "next/link";
import Slider from '../../components/SliderEcommerce';
const Ecommerce = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
      <Link href="/">
      <h4 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl drop-shadow-lg shadow-black">
          Home
      </h4>
      </Link>
      <h1 className="mt-32 text-2xl text-white font-bold">
        E-Commerce
      </h1>
      <Slider />
      <h2 className="mt-16 text-xl text-white font-bold text-center px-12">
        React / Firebase / Styled-components / API / Fetch
      </h2>
      <Link
        className="mt-16 text-xl text-white font-bold mt-12 hover:opacity-70 transition-all duration-200 ease-in mb-20"
        href="https://github.com/AlexEMartin/ecommerce-coderhouse"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        Repositorio
      </Link>
    </div>
  );
};

export default Ecommerce;
