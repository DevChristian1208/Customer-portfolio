"use client";
import React from "react";

const MyProjects = () => {
  return (
    <section
      id="portfolio"
      className="pt-[80px] pb-[80px] bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1e1e2f] relative overflow-hidden"
    >
      <div className="absolute top-[-60px] left-[-40px] w-[300px] h-[300px] bg-[#ea4343] opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-60px] right-[-40px] w-[250px] h-[250px] bg-[#00ffd9] opacity-20 blur-2xl rounded-full z-0" />

      <div className="w-full relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-10">
            <span className="block text-lg">Selected works</span>
            <h3 className="text-5xl font-bold">Meine Projekte</h3>
          </div>

          <div className="w-full mt-20 flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white">
              <img
                src="/join.png"
                alt="Join Project"
                className="w-full lg:w-1/2 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Join</h3>
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

            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white">
              <img
                src="/startscreen_1.png"
                alt="El Pollo Loco"
                className="w-full lg:w-1/2 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">El Pollo Loco</h3>
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
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
