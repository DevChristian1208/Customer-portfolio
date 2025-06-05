"use client";

import Image from "next/image";
import React from "react";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mail gesendet!");
      form.reset();
    } else {
      alert("Fehler beim Senden.");
    }
  };

  return (
    <section id="contact" className="bg-[#3c3c3c] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ea4343] font-semibold uppercase text-sm block mb-2">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-[60px]">Contact me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              Immer noch unsicher, ob ich die richtige Person für Ihr Projekt
              bin? Kontaktieren Sie mich!
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
                    <a
                      href="mailto:christian@web.de"
                      className="hover:text-[#ea4343] transition-all duration-200"
                    >
                      christian.pressig@web.de
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343] md:col-span-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message here"
              rows={5}
              className="w-full bg-[#2f2f2f] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea4343]"
              required
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
