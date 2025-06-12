"use client";
import React from "react";

const MyProjects = () => {
  const skills = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/react.png",
    "/angular.png",
    "/typescript.png",
    "/firebase.png",
  ];

  return (
    <section
      id="portfolio"
      className="pt-[80px] pb-[80px] bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1e1e2f] relative overflow-hidden"
    >
      {/* Farbige Kreise */}
      <div className="absolute top-[-60px] left-[-40px] w-[300px] h-[300px] bg-gradient-to-br from-[#ea4343] to-[#ff6b6b] opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-60px] right-[-40px] w-[250px] h-[250px] bg-gradient-to-br from-[#00ffd9] to-[#48c9b0] opacity-20 blur-2xl rounded-full z-0" />

      <div className="w-full relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-10">
            <span className="block text-lg">Selected works</span>
            <h3 className="text-5xl font-bold text-gradient">Meine Projekte</h3>
          </div>

          <div className="w-full mt-20 flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-[#ea4343] hover:to-[#ff6b6b]">
              <img
                src="/join.png"
                alt="Join Project"
                className="w-full lg:w-1/2 rounded-md object-cover transition-all duration-300 hover:opacity-80"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">
                    Join
                  </h3>
                  <p className="text-[#00ffd9] mb-2">
                    JavaScript | HTML | CSS | Firebase
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    Ein Aufgabenmanager basierend auf dem Kanban-Prinzip –
                    Aufgaben lassen sich per Drag & Drop erstellen und
                    organisieren.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/deinlink"
                    target="_blank"
                    className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://join.christianseidel-developer.de/"
                    target="_blank"
                    className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm"
                  >
                    Live Test
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-[#ea4343] hover:to-[#ff6b6b]">
              <img
                src="/startscreen_1.png"
                alt="El Pollo Loco"
                className="w-full lg:w-1/2 rounded-md object-cover transition-all duration-300 hover:opacity-80"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">
                    El Pollo Loco
                  </h3>
                  <p className="text-[#00ffd9] mb-2">
                    JavaScript | HTML | CSS | OOP
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    Ein Jump’n’Run-Spiel auf Basis objektorientierter
                    Programmierung: Hilf Pepe im Kampf gegen die verrückte
                    Henne!
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/deinlink"
                    target="_blank"
                    className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="http://elpolloloco.christianseidel-developer.de/"
                    target="_blank"
                    className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm"
                  >
                    Live Test
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MySkills - Direkte Integration nach den Projekten */}
          <div className="text-center text-white mb-10 mt-20">
            <span className="block text-lg">My Skills</span>
            <h3 className="text-5xl font-bold text-gradient">
              Meine Fähigkeiten
            </h3>
          </div>

          <div className="skills-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <img
                  src={skill}
                  alt={`Skill Icon ${index}`}
                  className="skill-icon w-[80px] h-[80px] mb-2 transition-all duration-300 hover:opacity-80"
                />
                <span className="skill-name text-[#00ffd9] font-semibold">
                  Skill {index + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="arrowDivResponsiveDiv mt-8 text-center">
            <img src="./assets/Arrow 6.png" alt="Arrow" />
          </div>

          <div className="text-section mt-6 text-center text-lg text-[#00ffc6]">
            <p>
              Ich bin immer bereit, neue Technologien zu lernen. Sag mir
              einfach, was du brauchst!
            </p>
          </div>

          <div className="buttonDiv mt-6 flex justify-center">
            <button className="cta-button bg-[#00ffc6] text-black px-6 py-3 rounded hover:bg-opacity-80 transition">
              Lass uns sprechen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
