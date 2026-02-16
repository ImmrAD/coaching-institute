"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PathSelector() {
	const [selected, setSelected] = useState<string | null>(null);

	const paths = [
		"JEE Coaching in PCMC",
		"NEET Coaching in PCMC",
		"MHT-CET Classes in PCMC",
		"8th–10th Foundation Program"
	];

	return (
		<section className="py-20 md:py-28 px-6 lg:px-20 bg-[#f9f9f9] relative overflow-hidden">

			{/* Yellow Glow Accent */}
			<div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ffc926]/10 rounded-full blur-3xl"></div>

			<div className="max-w-5xl mx-auto text-center">

				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#6E433D]"
				>
					Every Child Has a Different Dream.
					<span className="block text-[#D23D2D] mt-3">
						Let’s Choose the Right Path.
					</span>
				</motion.h2>

				<p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
					Whether it’s JEE, NEET, MHT-CET or strong foundation coaching in PCMC —
					the right structure makes all the difference.
				</p>

				{/* Path Options */}
				<div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-5">
					{paths.map((path, index) => (
						<motion.button
							key={index}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => setSelected(path)}
							className={`p-5 md:p-6 rounded-2xl border text-base md:text-lg font-semibold transition-all duration-300 shadow-sm
							${
								selected === path
									? "bg-[#ffc926] text-[#6E433D] border-[#ffc926] shadow-md"
									: "bg-white text-[#6E433D] border-gray-200 hover:border-[#D23D2D] hover:shadow-md"
							}`}
						>
							{path}
						</motion.button>
					))}
				</div>

				{/* Form Reveal */}
				<AnimatePresence>
					{selected && (
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="mt-12 md:mt-16 bg-white p-6 md:p-10 rounded-2xl shadow-lg text-left border"
						>
							<h3 className="text-xl md:text-2xl font-bold text-[#6E433D]">
								Let’s Understand Your Child’s Goal
							</h3>

							<p className="mt-2 text-gray-600 text-sm md:text-base">
								Selected Path:{" "}
								<span className="font-semibold text-[#D23D2D]">
									{selected}
								</span>
							</p>

							<div className="mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
								<input
									type="text"
									placeholder="Parent Name"
									className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc926]"
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc926]"
								/>
							</div>

							<Button className="mt-8 bg-[#D23D2D] text-white px-8 py-4 hover:bg-[#ffc926] hover:text-[#6E433D] transition-all duration-300">
								Request Personal Guidance
							</Button>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Subtle Psychological Close */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-12 text-sm text-gray-500"
				>
					The right decision today can shape the next 10 years.
				</motion.p>

			</div>
		</section>
	);
}
