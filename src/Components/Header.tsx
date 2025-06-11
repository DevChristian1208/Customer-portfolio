"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#service", label: "Service" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isImpressum = pathname === "/impressum";
  const isDatenschutz = pathname === "/datenschutz";
  const isSimplePage = isImpressum || isDatenschutz;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] ${
        scrolled ? "bg-white shadow-md" : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] w-full px-6 sm:px-10 mx-auto">
        <div className="w-full h-[70px] flex items-center justify-between py-[30px] transition-all duration-300">
          <div
            className={`logo text-xl font-bold font-['Press_Start_2P'] ${
              scrolled ? "text-[#ea4343]" : "text-[#ea4343]"
            }`}
          >
            &lt;CS&gt;
          </div>

          {!isSimplePage ? (
            <div className="menu flex items-center">
              <ul className="flex m-0 list-none hidden lg:flex">
                {menuItems.map((item, index) => (
                  <li key={index} className="inline-block mr-[45px] last:mr-0">
                    <a
                      href={item.href}
                      className={`no-underline font-semibold transition-all duration-300 hover:text-[#ea4343] ${
                        scrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div
                className={`ml-6 flex items-center font-semibold ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <span className="cursor-pointer hover:text-[#ea4343] hidden lg:flex">
                  EN
                </span>
                <span className="mx-2 hidden lg:flex">|</span>
                <span className="cursor-pointer hover:text-[#ea4343] hidden lg:flex">
                  DE
                </span>

                {/* Hamburger Menu Button */}
                <div
                  className="lg:hidden flex items-center cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {/* Hamburger icon */}
                  <div className="flex flex-col items-center justify-between space-y-2">
                    <div
                      className={`h-1 w-6 bg-black transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-6 bg-black transition-all duration-300 ${
                        isMenuOpen ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-6 bg-black transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center font-semibold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <span className="cursor-pointer hover:text-[#ea4343]">EN</span>
              <span className="mx-2">|</span>
              <span className="cursor-pointer hover:text-[#ea4343]">DE</span>
            </div>
          )}
        </div>

        {/* Hamburger Menu (on mobile) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-white z-10 shadow-md">
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)} // Close menu on item click
                >
                  <a
                    href={item.href}
                    className={`no-underline font-semibold text-[#ea4343] transition-all duration-300 hover:text-[#ea4343]`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
