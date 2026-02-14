"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
	initial: { opacity: 0, y: 50 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.8 }
};

export default function EightTenStatePage() {
	return (
		<div className="bg-white overflow-hidden">

			{/* ================= HERO ================= */}
			<section className="max-w-6xl mx-auto pt-32 pb-24 px-6">

				<motion.div {...fadeUp}>
					<h1 className="text-5xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight">
						Strong SSC Marks
						<span className="block text-[#D23D2D]">
							Create Strong Futures.
						</span>
					</h1>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed"
				>
					Class 8 to 10 (Maharashtra Board) is where scoring strategy,
					concept clarity, and board exam confidence are built.
					We prepare students for both SSC excellence and future competitive exams.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="mt-10"
				>
					<Button className="bg-[#D23D2D] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Book SSC Demo Class
					</Button>
				</motion.div>

			</section>


			{/* ================= SCORE STRATEGY SECTION ================= */}
			<section className="bg-[#f9f9f9] py-32 px-6">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

					<motion.div {...fadeUp}>
						<h2 className="text-4xl font-bold text-[#6E433D]">
							Board Pattern Mastery.
							<span className="block text-[#D23D2D]">
								Maximum Marks Strategy.
							</span>
						</h2>

						<p className="mt-6 text-gray-600 text-lg leading-relaxed">
							Maharashtra Board exams reward structured answers
							and presentation clarity.
							We train students how to write, how to revise,
							and how to score efficiently.
						</p>
					</motion.div>

					<motion.div
						{...fadeUp}
						className="bg-white p-10 rounded-2xl shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<ul className="space-y-6 text-gray-700 text-lg">
							<li>✔ SSC Answer Writing Practice</li>
							<li>✔ Chapter-wise Important Questions</li>
							<li>✔ Weekly Unit Tests</li>
							<li>✔ Revision Schedules</li>
							<li>✔ Board Exam Time Management</li>
						</ul>
					</motion.div>

				</div>
			</section>


			{/* ================= CONFIDENCE SECTION ================= */}
			<section className="py-32 px-6">
				<div className="max-w-5xl mx-auto text-center">

					<motion.h2 {...fadeUp} className="text-4xl font-bold text-[#6E433D]">
						High Marks Build Academic Confidence.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-lg text-gray-600 leading-relaxed"
					>
						A student who performs well in SSC
						enters 11th with clarity and confidence.
						That confidence reduces stress during
						JEE, NEET, and CET preparation.
					</motion.p>

					<div className="mt-16 grid md:grid-cols-3 gap-10">

						{[
							"Structured Notes",
							"Exam-Oriented Practice",
							"Scholarship Guidance"
						].map((item, i) => (
							<motion.div
								key={item}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-lg border hover:-translate-y-2 transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-[#D23D2D]">
									{item}
								</h3>
							</motion.div>
						))}

					</div>

				</div>
			</section>


			{/* ================= FINAL RESPONSIBILITY SECTION ================= */}
			<section className="bg-[#6E433D] text-white py-32 text-center px-6">

				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl font-bold"
				>
					SSC Is Not Just Another Exam.
				</motion.h2>

				<motion.h3
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-3xl mt-4 text-[#ffc926] font-bold"
				>
					It Is The Foundation Of Competitive Confidence.
				</motion.h3>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					<Button className="mt-10 bg-[#ffc926] text-[#6E433D] px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Register For SSC Scholarship Test
					</Button>
				</motion.div>

			</section>

		</div>
	);
}
