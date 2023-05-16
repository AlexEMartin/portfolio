"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { stack } from "../components/stack";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const downloadResume = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center text-gray-600">
      <h1 className="font-bold text-3xl mt-12 mb-8">Alex Martín</h1>
      <h2 className="text-xl mb-4 tracking-wide font-bold">
        Frontend Engineer
      </h2>
      <ul
        className="w-10/12 md:w-6/12 text-sm md:text-base flex justify-center items-center row flex-wrap mt-8 list-disc"
        data-aos="fade-right"
      >
        {stack.map((i) => (
          <li key={i} className="m-4">
            {i}
          </li>
        ))}
      </ul>
      <h2 className="animate-bounce mt-8 text-2xl text-center font-bold tracking-wide">
        Projects
      </h2>
      <div className="w-full flex justify-center items-center mb-12">
        <div className="w-72 flex flex-col mt-4">
          <div className="flex justify-center items-center">
            <Link href="/artist">
              <div className="w-40 flex justify-center items-center font-bold py-4 px-8 m-2 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 ease-in">
                Artist
              </div>
            </Link>
            <Link href="/ecommerce">
              <div className="w-40 flex justify-center items-center font-bold py-4 px-8 m-2 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 ease-in">
                Ecommerce
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/movies_app">
              <div className="w-40 flex justify-center items-center font-bold py-4 px-8 m-2 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 ease-in">
                Movies
              </div>
            </Link>
            <Link href="/crm">
              <div className="w-40 flex justify-center items-center font-bold py-4 px-8 m-2 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 ease-in">
                CRM
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative my-2">
        <Image
          data-aos="fade-right"
          className="rounded-lg border-8 border-indigo-400"
          src="/perfil.jpg"
          width="300"
          height="400"
        />
        <Image
          data-aos="fade-right"
          className="absolute top-0 right-0 p-3"
          src="/brain-tech.png"
          width="65"
          height="60"
        />
        <Image
          data-aos="fade-right"
          className="absolute top-0 left-0 p-3"
          src="/dev.png"
          width="60"
          height="70"
        />
      </div>
      <p className="w-8/12 mt-8" data-aos="fade-right">
        Bienvenidx a mi portfolio! Soy Desarrollador Frontend y actualmente me
        encuentro trabajando en dos proyectos, una app multi-tenant para
        gimnasios, y una app de psicoterapia online basada en evidencia.
      </p>
      <p className="w-8/12 mt-8" data-aos="fade-right">
        Además de mi aprendizaje y trabajo como desarrollador, soy psicólogo,
        algo que a simple vista puede parecer no relevante como característica
        para ocupar un puesto en desarrollo. Mi pensamiento es que las
        habilidades blandas son claves en el mundo tecnológico.
      </p>
      <p className="w-8/12 mt-8">
        Si mi perfil te resulta de interés, estaré encantado de conocerte.
        <a className="font-bold" href="mailto:alexeusebiomartin@gmail.com">
          {" "}
          Escríbeme.
        </a>
      </p>
      <p
        onClick={downloadResume}
        className="w-full text-center mt-12 mb-32 font-bold hover:cursor-pointer animate-bounce"
      >
        Download Resume
      </p>
    </main>
  );
}
