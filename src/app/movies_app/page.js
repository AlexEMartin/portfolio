"use client";
import Link from "next/link";
import Slider from "../../components/SliderMovies";
const Ecommerce = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center text-gray-600">
      <Link href="/">
        <h4 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl drop-shadow-lg shadow-black">
          Home
        </h4>
      </Link>
      <h1 className="mt-32 text-2xl font-bold">AleFlix</h1>
      <Slider />
      <h2 className="mt-8 text-lg font-bold mt-8">React / Bootstrap / API</h2>
      <Link
        className="mt-4 text-lg font-bold mt-12 hover:opacity-70 transition-all duration-200 ease-in mb-20"
        href="https://github.com/AlexEMartin/alkemy-challenge"
        rel="noopener noreferrer"
        target="_blank"
        passHref={true}
      >
        Repo
      </Link>
    </div>
  );
};

export default Ecommerce;
