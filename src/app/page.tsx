"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Header from "@/Components/Header";
import Aboutme from "@/Components/Aboutme";
import MyProjects from "@/Components/Myprojects";
import Services from "@/Components/Services";
import Contact from "@/Components/Contacme";
import Footer from "@/Components/Footer";

const Home = () => {
  const isSunny: boolean = !false;
  const isLoggedin: boolean = false;
  const names: Array<string> = ["Christian", "Max"];
  const persons: [string, number] = ["christian", 26];
  const persons2: (string | number)[] = [265, "asdöfklj"];

  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const xPercent = (e.clientX / vw - 0.5) * 2; // -1 bis 1
      const yPercent = (e.clientY / vh - 0.5) * 2;

      const offsetX = xPercent * 15;
      const offsetY = yPercent * 15;
      const rotateX = yPercent * -5;
      const rotateY = xPercent * 5;

      container.style.transform = `
        translate(${offsetX}px, ${offsetY}px)
        scale(1.02)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const reset = () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.style.transform = "translate(0, 0) scale(1) rotateX(0deg) rotateY(0deg)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="w-full h-auto" id="home">
        <div className="w-full h-screen relative bg-[#3c3c3c] overflow-hidden">
          <div className="max-w-[1400px] w-full mx-auto h-auto px-10 relative">
            <div className="w-full h-screen relative">
              {/* Textbereich */}
              <div className="absolute w-1/2 top-1/2 -translate-y-1/2 left-auto">
                <span className="font-josefin text-[25px] font-bold text-white tracking-tight mb-4 inline-block">
                  Hallo ich bin
                </span>
                <h3 className="text-[100px] font-bold text-[#ea4343] tracking-tight leading-tight">
                  Christian
                </h3>
                <div className="overflow-hidden text-[40px] font-bold text-white tracking-tight font-josefin">
                  <span>
                    <span className="text-white">Creative </span>
                    <span>
                      <b>Frontend Developer</b>
                    </span>
                  </span>
                </div>
                <div className="w-full flex items-center mt-9 mb-14">
                  <div>
                    <a
                      className="text-white font-josefin inline-block bg-[#ea4343] font-bold relative px-12 py-4 rounded-md border-2 border-[#ea4343] transition-all hover:bg-transparent hover:text-black"
                      href="#contact"
                    >
                      <span>
                        Say Hello{" "}
                        <Image
                          src="/message.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="inline ml-2"
                        />
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="ml-9 text-white font-josefin font-bold inline-block relative transition-all hover:text-[#ea4343]"
                      href="#about"
                    >
                      About Me
                    </a>
                  </div>
                </div>
              </div>

              {/* Rechte Seite (Bild + Hintergründe) mit Effekten */}
              <div
                ref={imageContainerRef}
                className="absolute top-0 right-0 bottom-0 w-[37%] z-[1] transition-transform duration-300 ease-out will-change-transform"
              >
                <div className="absolute right-0 bottom-[-10px] w-full">
                <div className="relative w-[500px] h-[700px]">
                  <Image
                    src="/file.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                </div>

                {/* Deko-Elemente */}
                <div className="absolute top-[15%] right-[25%] w-[100px] h-[100px] bg-[#ea4343] z-[-1]"></div>
                <div className="absolute top-[50%] right-[65%] w-[250px] h-[250px] bg-[#ea4343] z-[-1] blur-xl opacity-60"></div>
                <div className="absolute top-[20%] right-[30%] w-[250px] h-[300px] border-[4px] border-white z-[-1]"></div>

                {/* Hintergrund-Schrift */}
                <h3 className="absolute top-1/2 -translate-y-1/2 right-[-145px] z-[-2] mt-[-70px]">
                  <span className="text-[260px] text-transparent font-montserrat font-bold stroke-[3px] stroke-white/30">
                    Aali
                  </span>
                </h3>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="absolute bottom-10 left-[50px]">
            <a className="text-white text-[21px]" href="#">
              christian.pressig@web.de
            </a>
          </div>
        </div>
      </div>

      {/* Sektionen */}
      <Aboutme myname="christian" />
      <MyProjects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
