"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#service", label: "Service" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const[scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="w-full h-auto flex items-center justify-between py-[30px] transition-all duration-300">
          <div className={`logo text-xl font-bold font-['Press_Start_2P'] ${
            scrolled ? "text-[#ea4343]" : "text-[#ea4343]"
          }`}>
            &lt;CS&gt;
          </div>
          <div className="menu flex items-center">
            <ul className="flex m-0 list-none">
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
            {/* Spracheinstellung separat */}
            <div
              className={`ml-6 flex items-center font-semibold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <span className="cursor-pointer hover:text-[#ea4343]">EN</span>
              <span className="mx-2">|</span>
              <span className="cursor-pointer hover:text-[#ea4343]">DE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
