"use client";

import { motion } from "framer-motion";

export default function FacultyPage() {
  return (
    <div className="bg-[var(--color-light-cream)] min-h-screen">

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-[var(--color-dark-brown)]"
        >
          Meet The Mentors
          <span className="block text-[#D23D2D] mt-4">
            Guidance That Shapes Futures
          </span>
        </motion.h1>

        <p className="mt-8 text-gray-700 text-lg">
          Behind every successful student is structured mentorship,
          disciplined teaching, and personal attention.
        </p>
      </section>


      {/* PHILOSOPHY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6E433D]">
            Our Teaching Philosophy
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We believe strong preparation is not about shortcuts.
            It is about clarity, repetition, testing, and refinement.
            Our mentors focus on building thinking ability —
            not just solving questions.
          </p>
        </div>
      </section>


      {/* SUSPENSE CARDS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center relative overflow-hidden"
            >
              {/* Blurred Avatar */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 blur-md"></div>

              <h3 className="mt-8 text-xl font-bold text-[#6E433D]">
                Profile Revealing Soon
              </h3>

              <p className="mt-4 text-gray-500">
                Dedicated mentor with years of academic experience.
              </p>

              {/* Suspense Tag */}
              <div className="absolute top-4 right-4 bg-[#D23D2D] text-white text-xs px-3 py-1 rounded-full">
                Coming Soon
              </div>
            </motion.div>
          ))}

        </div>
      </section>


      {/* TRUST SECTION */}
      <section className="bg-white py-20 text-center px-6">
        <h3 className="text-2xl font-bold text-[#6E433D]">
          Experienced. Disciplined. Supportive.
        </h3>

        <p className="mt-6 text-[#D23D2D] font-semibold">
          Our mentors are selected not just for knowledge,
          but for their ability to guide and inspire.
        </p>
      </section>


      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold text-[#6E433D]">
          Want to Meet Them In Person?
        </h2>

        <p className="mt-6 text-gray-600">
          Visit our campus and experience the teaching environment directly.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 px-10 py-5 bg-[#D23D2D] text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Book Counselling
        </a>
      </section>

    </div>
  );
}