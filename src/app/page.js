"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { stack } from "../components/stack";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [english, setEnglish] = useState(false);

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
      <div className="relative my-4">
        <Image
          data-aos="fade-right"
          className="rounded-lg border-8 border-indigo-400"
          src="/perfil.jpg"
          width="300"
          height="400"
          alt="profile"
        />
        <div
          data-aos="fade-right"
          className="bg-yellow-400 p-3 rounded-full absolute top-0 right-0 mt-12 -mr-6 border border-black shadow-2xl"
        >
          <Image
            className="hover:animate-spin hover:cursor-pointer"
            src="/brain-tech.png"
            width="50"
            height="60"
            alt="brain"
          />
        </div>
        <div
          data-aos="fade-right"
          className="absolute top-0 left-0 -mt-4 -ml-4 bg-yellow-400 p-3 rounded-full border border-black shadow-2xl"
        >
          <Image
            className="hover:animate-spin hover:cursor-pointer"
            src="/dev.png"
            width="42"
            height="70"
            alt="dev"
          />
        </div>
      </div>
      <div className="w-8/12 mt-16 relative" data-aos="fade-right">
        <div className="absolute top-0 left-0 -mt-12 flex">
          <span
            onClick={() => setEnglish(false)}
            className={`mr-2 hover:cursor-pointer ${
              english ? "" : "font-bold"
            }`}
          >
            Español
          </span>
          |
          <span
            onClick={() => setEnglish(true)}
            className={`ml-2 hover:cursor-pointer ${
              english ? "font-bold" : ""
            }`}
          >
            English
          </span>
        </div>
        {english
          ? "Welcome to my portfolio! I'm a Frontend Developer currently working on two projects, a multi-tenant app for gyms, and an evidence-based online psychotherapy app."
          : "Bienvenidx a mi portfolio! Soy Desarrollador Frontend y actualmente me encuentro trabajando en dos proyectos, una app multi-tenant para gimnasios, y una app de psicoterapia online basada en evidencia."}
      </div>
      <p className="w-8/12 mt-8" data-aos="fade-right">
        {english
          ? "In addition to my learning process and working experience as a developer, I am a psychologist, something that at first sight may not seem relevant as a background to fill a development position. I believe that soft skills are key in IT."
          : "Además de mi aprendizaje y trabajo como desarrollador, soy psicólogo, algo que a simple vista puede parecer no relevante como característica para ocupar un puesto en desarrollo. Mi pensamiento es que las habilidades blandas son claves en el mundo IT."}
      </p>
      <p className="w-8/12 mt-8">
        {english
          ? "If my profile seems interesting to you, I will be happy to meet up."
          : " Si mi perfil te resulta de interés, estaré encantado de conocerte."}

        <a className="font-bold" href="mailto:alexeusebiomartin@gmail.com">
          {" "}
          {english ? "Email me." : "Escríbeme."}
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
