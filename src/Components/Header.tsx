"use client";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4">
          <div className="w-full h-auto flex items-center justify-between py-[30px] transition-all duration-300">
            <div className="logo text-[#ea4343] text-xl font-bold font-['Press_Start_2P']">
            &lt;CS&gt;
          </div>            
          <div className="menu">
            <ul className="flex m-0 list-none">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#service", label: "Service" },
                { href: "#testimonial", label: "Testimonial" },
                { href: "#blog", label: "Blog" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <li key={index} className="inline-block mr-[45px] last:mr-0">
                  <a
                    href={item.href}
                    className={`no-underline text-white font-semibold transition-all duration-300 hover:text-[#ea4343] ${
                      item.href === "#home" ? "text-[#ea4343]" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
