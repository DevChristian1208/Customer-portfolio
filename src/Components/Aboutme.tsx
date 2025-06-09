"use client";

import Image from "next/image";

type AboutmeProps = {
  myname: string;
};

const Aboutme = ({ myname }: AboutmeProps) => {
  return (
    <div id="about" className="w-full py-12 bg-white">
      <div className="max-w-screen-xl mx-auto flex gap-10 px-6">
        {/* Linke Seite */}
        <div className="hidden lg:block w-[31%]">
          <div className="relative ml-[100px]">
            <Image
              src="/IMG_3721.jpg"
              alt="Profilbild"
              width={400}
              height={400}
              className="relative w-full opacity-0"
            />
            <div
              className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px] z-[1]"
              style={{ backgroundImage: "url('/IMG_3721.jpg')" }}
            />
            <span
              className="hidden lg:block absolute w-[270px] h-[270px] bg-[#ea4343] bottom-[-80px] left-[-65px] z-0 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <span className="hidden lg:block absolute w-[1000px] h-[300px] right-full top-1/2 -translate-y-1/2 -mr-[50px] z-[2]">
              <span
                className="absolute w-full h-full border-[6px] border-white moving_effect"
                data-direction="x"
                data-reverse="yes"
              />
            </span>
          </div>
        </div>

        {/* Mitte */}
        <div className="w-[44%] px-6">
          <div className="mb-8">
            <span className="text-lg font-bold text-[#ea4343] block mb-2">
              About Me
            </span>
            <h3 className="text-[65px] font-bold leading-tight">
              I&apos;m <span className="text-[#ea4343]">{myname}</span>
            </h3>
            <h3 className="text-[48px] font-bold leading-tight">
              <span className="text-[#ea4343]">Webentwickler</span>
            </h3>
            <span className="text-[24px] font-semibold text-[#15111e] mt-4 block">
              Based in Selbitz, DE
            </span>
          </div>
          <div className="text-base text-gray-700 leading-relaxed mb-12">
            <p className="mb-12 text-[20px]">
              Hi! Mein Name ist {myname} und ich bin Webentwickler im Frontend
              Bereich.
            </p>
            <p className="text-[20px]">
              Ich entwickle moderne und benutzerfreundliche Websites für lokale
              Unternehmen. Ob Restaurant, Arztpraxis oder Handwerksbetrieb – ich
              biete individuelle Weblösungen, die klar, funktional und leicht zu
              pflegen sind. Einfach, professionell und genau auf Dein Geschäft
              zugeschnitten.
            </p>
          </div>
          <div>
            <a
              href="/IMG_3721.jpg"
              download
              className="inline-flex items-center gap-2 bg-[#ea4343] text-white px-6 py-3 rounded-md hover:bg-[#d03030] transition"
            >
              <span>Download CV</span>
              <Image
                src="/download.svg"
                alt="Download"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
