"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.8 }
};

export default function NeetPage() {
	return (
		<div className="bg-white overflow-hidden">

			{/* ================= HERO ================= */}
			<section className="max-w-6xl mx-auto pt-32 pb-24 px-6">

				<motion.div {...fadeUp}>
					<h1 className="text-5xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight">
						Becoming a Doctor
						<span className="block text-[#D23D2D]">
							is not a dream.
						</span>
						It’s a responsibility.
					</h1>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed"
				>
					NEET is not just an exam. It is the first step toward saving lives,
					serving communities, and building a respected medical career.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="mt-10"
				>
					<Button className="bg-[#D23D2D] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Book NEET Demo Class
					</Button>
				</motion.div>

			</section>


			{/* ================= TRUST SECTION ================= */}
			<section className="bg-[#f8f8f8] py-32 px-6">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

					<motion.div {...fadeUp}>
						<h2 className="text-4xl font-bold text-[#6E433D]">
							Clarity. Discipline.
							<span className="block text-[#D23D2D]">
								Consistency.
							</span>
						</h2>

						<p className="mt-6 text-gray-600 text-lg leading-relaxed">
							Our NEET preparation program is structured around building
							deep understanding in Biology, Chemistry, and Physics —
							with special focus on accuracy and time management.
						</p>
					</motion.div>

					<motion.div
						{...fadeUp}
						className="bg-white p-10 rounded-2xl shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<ul className="space-y-6 text-gray-700 text-lg">
							<li>✔ NCERT-Focused Strategy</li>
							<li>✔ Biology Intensive Modules</li>
							<li>✔ Weekly Mock Exams</li>
							<li>✔ Mistake Analysis Sessions</li>
							<li>✔ Personal Mentoring</li>
						</ul>
					</motion.div>

				</div>
			</section>


			{/* ================= BIOLOGY EMPHASIS ================= */}
			<section className="py-32 px-6">
				<div className="max-w-5xl mx-auto text-center">

					<motion.h2
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-[#6E433D]"
					>
						Biology is the Backbone of NEET.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-lg text-gray-600 leading-relaxed"
					>
						We ensure conceptual mastery of every NCERT line,
						diagram interpretation, and high-yield question patterns.
					</motion.p>

					<div className="mt-16 grid md:grid-cols-3 gap-10">

						{["Botany", "Zoology", "Organic Chemistry"].map((subject, i) => (
							<motion.div
								key={subject}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-lg border hover:-translate-y-2 transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-[#D23D2D]">
									{subject}
								</h3>
								<p className="mt-4 text-gray-600 text-sm">
									Focused concept reinforcement and NEET-level practice sets.
								</p>
							</motion.div>
						))}

					</div>

				</div>
			</section>


			{/* ================= FINAL CTA ================= */}
			<section className="bg-[#6E433D] text-white py-32 text-center px-6">

				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl font-bold"
				>
					Your Journey To MBBS Starts Here.
				</motion.h2>

				<motion.h3
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-3xl mt-4 text-[#ffc926] font-bold"
				>
					Let’s Build It Together.
				</motion.h3>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<Button className="mt-10 bg-[#ffc926] text-[#6E433D] px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Register for NEET Counseling
					</Button>
				</motion.div>

			</section>

		</div>
	);
}
