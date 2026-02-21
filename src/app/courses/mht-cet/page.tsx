"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.8 }
};

export default function MhtCetPage() {
	return (
		<div className="bg-white overflow-hidden">

			{/* ================= HERO ================= */}
			<section className="max-w-6xl mx-auto pt-32 pb-24 px-6">

				<motion.div {...fadeUp}>
					<h1 className="text-5xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight">
						MHT-CET is about
						<span className="block text-[#D23D2D]">
							speed + accuracy.
						</span>
						Not unnecessary pressure.
					</h1>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed"
				>
					MHT-CET is a scoring exam. If you play it smart,
					you can secure admission in Maharashtra’s top engineering colleges.
					We train you to maximize percentile.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="mt-10"
				>
					<Button className="bg-[#D23D2D] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Book MHT-CET Demo
					</Button>
				</motion.div>

			</section>


			{/* ================= STRATEGY SECTION ================= */}
			<section className="bg-[#f9f9f9] py-32 px-6">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

					<motion.div {...fadeUp}>
						<h2 className="text-4xl font-bold text-[#6E433D]">
							Exam Pattern Mastery.
							<span className="block text-[#D23D2D]">
								Percentile Optimization.
							</span>
						</h2>

						<p className="mt-6 text-gray-600 text-lg leading-relaxed">
							Unlike JEE, MHT-CET rewards speed and precision.
							We train students to manage time aggressively and
							select high-return questions first.
						</p>
					</motion.div>

					<motion.div
						{...fadeUp}
						className="bg-white p-10 rounded-2xl shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<ul className="space-y-6 text-gray-700 text-lg">
							<li>✔ CET Pattern Practice Sets</li>
							<li>✔ Speed Building Drills</li>
							<li>✔ 3-Hour Simulation Tests</li>
							<li>✔ Chapter Weightage Strategy</li>
							<li>✔ Rank Improvement Tracking</li>
						</ul>
					</motion.div>

				</div>
			</section>


			{/* ================= SMART STRATEGY CARDS ================= */}
			<section className="py-32 px-6">
				<div className="max-w-6xl mx-auto text-center">

					<motion.h2
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-bold text-[#6E433D]"
					>
						How We Boost Your Percentile
					</motion.h2>

					<div className="mt-16 grid md:grid-cols-3 gap-10">

						{[
							{
								title: "Time Mapping",
								desc: "Learn how to divide time across PCM for maximum output."
							},
							{
								title: "Accuracy Focus",
								desc: "Minimize negative marking with targeted problem practice."
							},
							{
								title: "High Weightage Targeting",
								desc: "Focus more on scoring chapters to push percentile."
							}
						].map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className="bg-white p-8 rounded-2xl shadow-lg border hover:-translate-y-2 transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-[#D23D2D]">
									{item.title}
								</h3>
								<p className="mt-4 text-gray-600 text-sm">
									{item.desc}
								</p>
							</motion.div>
						))}

					</div>

				</div>
			</section>

			<section className="py-20 px-6 lg:px-20 bg-[#f9f9f9] text-center">
	<h2 className="text-3xl font-bold text-[#6E433D]">
		CET & NEET Crash Course – 2026
	</h2>

	<p className="mt-4 text-gray-600">
		Batch starting from 26th February 2026 in PCMC.
	</p>

	<div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
		<Image
			src="/crash-course-2026.jpg"
			alt="CET NEET Crash Course PCMC"
			width={1200}
			height={900}
			className="w-full h-auto"
		/>
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
					Smart Preparation.
					<span className="block text-[#ffc926]">
						Smart Admission.
					</span>
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<Button className="mt-10 bg-[#ffc926] text-[#6E433D] px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Register for CET Counseling
					</Button>
				</motion.div>

			</section>

		</div>
	);
}
