"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
      <h1 className="font-bold text-3xl mt-12 mb-8 text-gray-100">
        Alex Martín
      </h1>
      <h2 className="text-xl mb-4 tracking-wide text-gray-100">
        Frontend Engineer
      </h2>
      <div className="relative my-8">
        <Image
          data-aos="fade-right"
          className="rounded-lg"
          src="/perfil.jpg"
          width="400"
          height="500"
        />
        <Image
          data-aos="fade-right"
          className="absolute top-0 right-0 p-2"
          src="/brain-tech.png"
          width="75"
          height="75"
        />
        <Image
          data-aos="fade-right"
          className="absolute top-0 left-0 p-2"
          src="/dev.png"
          width="70"
          height="70"
        />
      </div>
      <p className="w-8/12 mt-8 text-gray-200" data-aos="fade-right">
        Bienvenidx a mi portfolio! Soy Desarrollador Frontend y actualmente me
        encuentro trabajando en dos proyectos, una app multi-tenant para
        gimnasios, y una app de psicoterapia online basada en la evidencia.
      </p>
      <p className="w-8/12 mt-8 text-gray-200" data-aos="fade-right">
        Además de mi aprendizaje y trabajo como desarrollador, soy psicólogo,
        algo que a simple vista puede parecer no relevante como característica
        para ocupar un puesto en desarrollo. Mi pensamiento es que las
        habilidades blandas son claves en el mundo tecnológico.
      </p>
      <p className="w-8/12 mt-8 text-gray-200" data-aos="fade-right">
        Si mi perfil te resulta de interés, estaré encantado de conocerte.
        <a className="font-bold" href="mailto:alexeusebiomartin@gmail.com"> Escríbeme.</a>
      </p>
      <div className="w-full flex justify-center items-center mb-12">
        <ul
          className="w-52 mt-8 ml-12 text-gray-200 list-disc"
          data-aos="fade-right"
        >
          <li className="mb-2">HTML</li>
          <li className="mb-2">CSS</li>
          <li className="mb-2">JS</li>
          <li className="mb-2">React</li>
          <li className="mb-2">Next js</li>
          <li className="mb-2">TypeScript</li>
          <li className="mb-2">Tailwind</li>
          <li className="mb-2">Styled Components</li>
          <li className="mb-2">Firebase</li>
          <li className="mb-2">Context API</li>
          <li className="mb-2">Redux</li>
          <li className="mb-2">Fetch</li>
        </ul>
        <div className="w-72 flex flex-col mt-4">
          <Link href="/artist">
            <div className="flex justify-center items-center h-12 m-6 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500">
              Artist
            </div>
          </Link>
          <Link href="/ecommerce">
            <div className="flex justify-center items-center h-12 m-6 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500">
              Ecommerce
            </div>
          </Link>
          <Link href="/movies_app">
            <div className="flex justify-center items-center h-12 m-6 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500">
              Movies
            </div>
          </Link>
          <Link href="/crm">
            <div className="flex justify-center items-center h-12 m-6 rounded-lg hover:cursor-pointer active:relative active:top-0.5 text-white bg-indigo-400 hover:bg-indigo-500">
              CRM
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
