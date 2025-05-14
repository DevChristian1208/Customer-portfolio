import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto" id="home">
        <div className="w-full h-screen relative bg-[#3c3c3c] overflow-hidden">
          <div className="max-w-[1400px] w-full mx-auto h-auto px-10 relative">
            <div className="w-full h-screen relative">
              <div className="absolute w-1/2 top-1/2 -translate-y-1/2 left-auto">
                <span className="font-josefin text-[25px] font-bold text-white tracking-tight mb-4 inline-block">
                  Hello, I&apos;m
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
                      className="ml-9 text-white font-josefin font-bold inline-block relative transition-all"
                      href="#about"
                    >
                      About Me
                    </a>
                  </div>
                </div>
                <div>
                  <a href="#about">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 247 390"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M123.359,79.775l0,72.843"
                        stroke="#fff"
                        strokeWidth="20px"
                      />
                      <path
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359v143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359V123.359Z"
                        stroke="#fff"
                        strokeWidth="20px"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="absolute top-0 right-0 bottom-0 w-[37%] z-[1]">
                <div className="absolute right-0 bottom-[-10px] w-full">
                  <Image
                    src="/img/hero/1.png"
                    alt=""
                    width={300}
                    height={300}
                    className=""
                  />
                </div>
                <h3 className="absolute top-1/2 -translate-y-1/2 right-[-145px] z-[-2] mt-[-70px]">
                  <span className="text-[260px] text-transparent font-montserrat font-bold stroke-[3px] stroke-white/30">
                    Aali
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-[50px]">
            <a className="text-white text-[21px]" href="#">
              hello@aali.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
