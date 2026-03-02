"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = ["JEE", "NEET", "MHT-CET", "8–10 Foundation"];

export default function ContactPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

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
          Let’s Guide Your Child’s Journey
          <span className="block text-[#D23D2D] mt-4">
            Warm Support. Structured Direction.
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-700">
          Visit our campus or request counselling. We’re here to help.
        </p>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#6E433D]">
              Durga & P.K. Classes
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Ajmera Main Rd, Morewadi, Pimpri Colony,  
              Pimpri-Chinchwad, Maharashtra 411018
            </p>

           <div className="mt-6 space-y-4 font-medium">

  {/* Phone */}
  <a
    href="tel:9371644309"
    className="flex items-center gap-3 text-[#D23D2D] hover:translate-x-1 transition-all duration-200"
  >
    <span>📞</span>
    <span className="underline-offset-4 hover:underline">
      9371644309
    </span>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919822254316"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#D23D2D] hover:translate-x-1 transition-all duration-200"
  >
    <span>💬</span>
    <span className="underline-offset-4 hover:underline">
      WhatsApp: 9822254316
    </span>
  </a>

  {/* Email */}
  <a
    href="mailto:abhaysaraf76@gmail.com"
    className="flex items-center gap-3 text-[#D23D2D] hover:translate-x-1 transition-all duration-200"
  >
    <span>📧</span>
    <span className="underline-offset-4 hover:underline">
      abhaysaraf76@gmail.com
    </span>
  </a>

</div>

            <p className="mt-6 text-gray-600">
              Monday – Saturday: 7 AM – 9 PM <br />
              Sunday: Call before visiting
            </p>
          </motion.div>

          <motion.iframe
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://maps.google.com/maps?q=Ajmera%20Main%20Rd,%20Pimpri-Chinchwad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 rounded-3xl shadow-xl border"
          ></motion.iframe>

        </div>
      </section>

      {/* MICRO FUNNEL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-[var(--color-dark-brown)]">
          Choose Your Preparation Path
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {courses.map((course) => (
            <motion.button
              key={course}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCourse(course)}
              className={`px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300
                ${
                  selectedCourse === course
                    ? "bg-[#D23D2D] text-white shadow-xl"
                    : "bg-white text-[#6E433D] border border-gray-200 hover:shadow-lg"
                }`}
            >
              {course}
            </motion.button>
          ))}
        </div>
      </section>

      {/* FORM */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pb-24 px-6"
          >
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#6E433D] mb-8 text-center">
                Counselling Request – {selectedCourse}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="course" value={selectedCourse} />

                <div>
                  <label className="block font-semibold text-[#6E433D]">
                    Student Name
                  </label>
                  <input
                    name="studentName"
                    required
                    className="w-full mt-2 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#D23D2D]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#6E433D]">
                    Parent Phone Number
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full mt-2 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#D23D2D]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#6E433D]">
                    Class / Standard
                  </label>
                  <input
                    name="class"
                    required
                    className="w-full mt-2 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#D23D2D]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl bg-[#D23D2D] text-white text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {loading ? "Sending..." : "Request Counselling"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 text-center max-w-sm shadow-2xl"
            >
              {status === "success" ? (
                <>
                  <h3 className="text-xl font-bold text-[#6E433D]">
                    Request Sent Successfully
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Our team will contact you shortly.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#D23D2D]">
                    Something Went Wrong
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Please try again later.
                  </p>
                </>
              )}

              <button
                onClick={() => setStatus(null)}
                className="mt-6 px-6 py-3 bg-[#D23D2D] text-white rounded-xl"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}