"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#3c3c3c] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Titel */}
        <div className="text-center mb-16">
          <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">Get in Touch</span>
          <h2 className="text-4xl font-bold text-[60px]">Contact me</h2>
        </div>

        {/* Inhalt */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Linke Seite – Info */}
          <div className="space-y-6">
            <p className="text-gray-300">
                Immer noch unsicher, ob ich die richtige Person für Ihr Projekt bin? Kontaktieren Sie mich, damit ich Sie überzeugen kann. Lassen Sie uns zusammenarbeiten.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Image src="./call.svg" alt="call" width={32} height={32} />
                <div>
                  <span className="block text-sm text-gray-400">Call me</span>
                  <h3 className="text-lg font-bold">+49 1756453064</h3>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/message.svg" alt="email" width={32} height={32} />
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <h3 className="text-lg font-bold">
                    <a href="mailto:christian@web.de" className="hover:text-[#ea4343] transition-all duration-200">
                      christian.pressig@web.de
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Rechte Seite – Formular */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]" />
              <input type="email" placeholder="Your Email" className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]" />
              <input type="tel" placeholder="Your Phone" className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343] md:col-span-2" />
            </div>

            <textarea
              placeholder="Your message here"
              rows={5}
              className="w-full bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#ea4343] text-white font-bold px-6 py-3 rounded-md hover:bg-transparent hover:text-white border border-[#ea4343] transition-all flex items-center gap-2"
            >
              Absenden
              <Image src="/send.svg" alt="send" width={18} height={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
