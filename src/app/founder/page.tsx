"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-[#6E433D]"
        >
          Our Founder
          <span className="block text-[#D23D2D] mt-3">
            Prof. Abhay Saraf
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          Founder & Director of Durga & P.K. Classes — an institution
          dedicated to building strong academic foundations and guiding
          students toward excellence.
        </p>
      </section>

      {/* FOUNDER INTRO */}
      <section className="py-20 px-6 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/founder.png"
              alt="Prof Abhay Saraf Founder Durga PK Classes"
              width={350}
              height={420}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#6E433D]">
              From the Director’s Desk
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              “The essence of education lies in drawing out the very best
              in you.” In today’s competitive world of science and
              technology, education is not merely about accumulating
              knowledge — it is about acquiring the ability to apply it.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With the vision of providing quality education and helping
              students grow into better individuals, Durga & P.K. Classes
              was established under the leadership of Prof. Abhay Saraf.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The institute believes that teachers guide students to
              discover their potential and build confidence through
              disciplined preparation and conceptual clarity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#6E433D]">
          Educational Philosophy
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          “One cannot teach a man anything, but can help him discover
          it within himself.”
        </p>

        <p className="mt-6 text-gray-600">
          At Durga & P.K. Classes, education focuses on clarity,
          practice, discipline, and continuous evaluation to prepare
          students for competitive exams and academic success.
        </p>
      </section>

      {/* INSTITUTE STRENGTH */}
      <section className="py-20 px-6 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#D23D2D]">
              26+ Years Experience
            </h3>
            <p className="mt-4 text-gray-600">
              Decades of experience guiding students to academic success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#D23D2D]">
              Result Oriented Teaching
            </h3>
            <p className="mt-4 text-gray-600">
              Structured modules, regular tests, and analysis sessions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#D23D2D]">
              Personal Mentoring
            </h3>
            <p className="mt-4 text-gray-600">
              Individual attention, doubt sessions, and guidance.
            </p>
          </div>

        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-20 text-center">
        <p className="text-gray-600">
          Yours Truly,
        </p>

        <h3 className="text-xl font-bold text-[#6E433D] mt-2">
          Prof. Abhay Saraf
        </h3>

        <p className="text-[#D23D2D] font-semibold">
          Founder & Director
        </p>
      </section>

    </div>
  );
}