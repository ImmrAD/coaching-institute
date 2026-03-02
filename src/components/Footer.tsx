"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#D23D2D] text-white pt-16 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold">
            Durga & P.K. Classes
          </h3>

          <p className="mt-4 text-white/80 leading-relaxed">
            Where success is culture & excellence is tradition.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/durga.and.pk.classes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/@durgaandp.kclasses346/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>

          <ul className="space-y-3">
  {[
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact", href: "/contact" },
  ].map((link) => (
    <li key={link.name}>
      <Link
        href={link.href}
        className="relative inline-block group text-white/90 hover:text-white transition"
      >
        {link.name}

        {/* Creative Yellow Swipe */}
        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#ffc926] transition-all duration-400 group-hover:w-full skew-x-[-20deg]"></span>
      </Link>
    </li>
  ))}
          </ul>
        </motion.div>

        {/* COURSES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="font-semibold text-lg mb-4">Programs</h4>

         <ul className="space-y-3">
  {[
    { name: "JEE", href: "/courses/jee" },
    { name: "NEET", href: "/courses/neet" },
    { name: "MHT-CET", href: "/courses/mht-cet" },
    { name: "8–10 CBSE", href: "/courses/eight-ten-cbse" },
    { name: "8–10 State", href: "/courses/eight-ten-state" },
    { name: "8–10 ICSE", href: "/courses/eight-ten-icse" },
  ].map((link) => (
    <li key={link.name}>
      <Link
        href={link.href}
        className="relative inline-block group text-white/90 hover:text-white transition"
      >
        {link.name}
        <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#ffc926] transition-all duration-400 group-hover:w-full skew-x-[-20deg]"></span>
      </Link>
    </li>
  ))}
</ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="font-semibold text-lg mb-4">Contact</h4>

          <div className="space-y-3 text-white/80">

            <a href="tel:9371644309" className="flex items-center gap-2 hover:text-white">
              <Phone size={16} /> 9371644309
            </a>

            <a href="mailto:abhaysaraf76@gmail.com" className="flex items-center gap-2 hover:text-white">
              <Mail size={16} /> abhaysaraf76@gmail.com
            </a>

            <p className="text-sm leading-relaxed">
              Ajmera Main Rd, Morewadi, Pimpri Colony,  
              Pimpri-Chinchwad, Maharashtra 411018
            </p>

          </div>
        </motion.div>

      </div>

      {/* BOTTOM LINE */}
      <div className="mt-16 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © 2026 Durga & P.K. Classes. All Rights Reserved.
      </div>

    </footer>
  );
}