"use client";
import React from "react";

const MyProjects = () => {
  return (
    <section id="portfolio" className="pt-[80px] pb-[80px] bg-red-800">
      <div className="w-full">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-10">
            <span className="block text-lg">Selected works</span>
            <h3 className="text-5xl font-bold">Meine Projekte</h3>
          </div>

          <div className="w-full">
            <ul className="flex flex-wrap -ml-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <li key={index} className="w-full sm:w-1/2 lg:w-1/3 pl-6 mb-6">
                  <div className="relative w-full overflow-hidden rounded-xl group">
                    <div className="relative">
                      <img
                        src={`/img/thumbs/1-1.jpg`}
                        alt=""
                        className="opacity-0 w-full"
                      />
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(/img/portfolio/${item}.jpg)` }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-red-500/70 opacity-0 group-hover:opacity-100 transition duration-300 z-10 rounded-xl" />
                    <img
                      src="/img/svg/social/vimeo.svg"
                      alt="icon"
                      className="absolute w-12 h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full text-center px-4 pb-6 z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-white text-sm block mb-1">Vimeo</span>
                      <h3 className="text-white text-xl font-bold">Title {item}</h3>
                    </div>
                    <a href="#" className="absolute inset-0 z-30" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Eigene Projekte – Rechteckiger Stil */}
          <div className="w-full mt-20 flex flex-col gap-12">
            {/* Projekt 1 */}
            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white">
              <img src="/join.png" alt="Join Project" className="w-full lg:w-1/2 rounded-md object-cover" />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Join</h3>
                  <p className="text-[#00ffd9] mb-2">JavaScript | HTML | CSS | Firebase</p>
                  <p className="text-sm text-gray-300 mb-4">
                  Ein Aufgabenmanager basierend auf dem Kanban-Prinzip – Aufgaben lassen sich per Drag & Drop erstellen und organisieren.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/deinlink" target="_blank" className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm">GitHub</a>
                  <a href="http://join.christianseidel-developer.de/" target="_blank" className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm">Live Test</a>
                </div>
              </div>
            </div>

            {/* Projekt 2 */}
            <div className="flex flex-col lg:flex-row gap-8 bg-[#1e1e2f] rounded-xl p-6 text-white">
              <img src="/startscreen_1.png" alt="El Pollo Loco" className="w-full lg:w-1/2 rounded-md object-cover" />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">El Pollo Loco</h3>
                  <p className="text-[#00ffd9] mb-2">JavaScript | HTML | CSS | OOP</p>
                  <p className="text-sm text-gray-300 mb-4">
                  Ein Jump’n’Run-Spiel auf Basis objektorientierter Programmierung: Hilf Pepe im Kampf gegen die verrückte Henne!
                  </p>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/DevChristian1208/El-Pollo-Loco" target="_blank" className="border border-pink-500 px-4 py-2 rounded hover:bg-pink-500 transition text-sm">GitHub</a>
                  <a href="http://elpolloloco.christianseidel-developer.de/" target="_blank" className="bg-[#00ffd9] text-black px-4 py-2 rounded hover:bg-opacity-80 transition text-sm">Live Test</a>
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
