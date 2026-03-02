"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NeetPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-[#6E433D]"
        >
          NEET Coaching in PCMC
          <span className="block text-[#D23D2D] mt-3">
            Structured Preparation for Future Doctors.
          </span>
        </motion.h1>

        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
          Personal mentoring, disciplined test culture, and conceptual clarity —
          built for students who are serious about medical careers.
        </p>
      </section>


      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6E433D]">
            Is This Program Right for You?
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            This program is designed for students preparing for NEET who want
            structured guidance, regular performance analysis, and daily doubt-solving.
            Whether you're starting early or strengthening weak areas —
            we build clarity step by step.
          </p>
        </div>
      </section>


      {/* TEACHING METHOD */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#6E433D] text-center">
            Our Preparation Method
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16 text-center">

            <div>
              <h3 className="text-xl font-semibold text-[#D23D2D]">Diagnose</h3>
              <p className="mt-3 text-gray-600">
                Identify strengths and weak concepts early.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D23D2D]">Train</h3>
              <p className="mt-3 text-gray-600">
                Deep conceptual teaching with structured notes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D23D2D]">Test</h3>
              <p className="mt-3 text-gray-600">
                Weekly exams with real-exam pattern simulation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D23D2D]">Refine</h3>
              <p className="mt-3 text-gray-600">
                Performance review and personalized feedback.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHAT STUDENTS GET */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#6E433D]">
            What Students Receive
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12 text-left">
            <ul className="space-y-4 text-gray-700">
              <li>• Personal mentoring & guidance</li>
              <li>• Daily doubt-solving sessions</li>
              <li>• Weekly structured tests</li>
              <li>• Performance tracking</li>
            </ul>

            <ul className="space-y-4 text-gray-700">
              <li>• Concept-focused Biology, Physics & Chemistry</li>
              <li>• Time management training</li>
              <li>• Parent progress updates</li>
              <li>• Scholarship test opportunity</li>
            </ul>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#6E433D]">
          Begin Your NEET Journey With Structure.
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Every serious preparation begins with the right guidance.
          Let’s build it the right way.
        </p>

        <div className="mt-10">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#ffc926] to-[#D23D2D] text-white px-8 py-6 text-lg">
              Book Free Counselling
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}