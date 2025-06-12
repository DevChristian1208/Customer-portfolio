"use client";
import React, { useRef } from "react";

const MySkills = () => {
  const skills = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/react.png",
    "/angular.png",
    "/typescript.png",
    "/firebase.png",
  ];

  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="pt-[80px] pb-[80px] bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1e1e2f] relative overflow-hidden transition-all duration-500"
    >
      {/* Kreis oben links */}
      <div className="absolute top-[-40px] left-[-40px] w-[250px] h-[250px] bg-[#ea4343] opacity-30 blur-3xl rounded-full z-0" />
      {/* Kreis unten rechts */}
      <div className="absolute bottom-[-40px] right-[-40px] w-[250px] h-[250px] bg-[#00ffd9] opacity-20 blur-2xl rounded-full z-0" />

      <div className="w-full relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-10">
            <span className="block text-lg">My Skills</span>
            <h3 className="text-5xl font-bold">Meine Fähigkeiten</h3>
          </div>

          <div className="skills-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item flex flex-col items-center justify-center text-center transition-all duration-300"
              >
                <img
                  src={skill}
                  alt={`Skill Icon ${index}`}
                  className="skill-icon w-[80px] h-[80px] mb-2 transition-all duration-300 hover:scale-110 hover:rotate-3"
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
            <button
              className="cta-button bg-[#00ffc6] text-black px-6 py-3 rounded hover:bg-opacity-80 transition"
              onClick={handleScrollToContact} // Scroll zu "Contact"-Abschnitt
            >
              Lass uns sprechen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
