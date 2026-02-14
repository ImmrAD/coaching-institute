"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
	initial: { opacity: 0, y: 50 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.8 }
};

export default function EightTenCbsePage() {
	return (
		<div className="bg-white overflow-hidden">

			{/* ================= HERO ================= */}
			<section className="max-w-6xl mx-auto pt-32 pb-24 px-6">

				<motion.div {...fadeUp}>
					<h1 className="text-5xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight">
						The next 3 years
						<span className="block text-[#D23D2D]">
							decide the next 30.
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
					Class 8 to 10 is not “early”.  
					It is the foundation stage where analytical thinking,
					problem-solving ability, and academic confidence are built.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="mt-10"
				>
					<Button className="bg-[#D23D2D] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Book Foundation Demo
					</Button>
				</motion.div>

			</section>


			{/* ================= REALITY SECTION ================= */}
			<section className="bg-[#f9f9f9] py-32 px-6">
				<div className="max-w-6xl mx-auto">

					<motion.h2 {...fadeUp} className="text-4xl font-bold text-[#6E433D] text-center">
						By the time most students start serious preparation...
					</motion.h2>

					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="text-3xl text-center mt-4 text-[#D23D2D] font-bold"
					>
						Top students are already 3 years ahead.
					</motion.h3>

					<div className="mt-16 grid md:grid-cols-2 gap-12">

						<motion.div {...fadeUp} className="bg-white p-10 rounded-2xl shadow-lg border">
							<h3 className="text-2xl font-bold text-[#D23D2D]">
								Early Starter
							</h3>
							<ul className="mt-6 space-y-4 text-gray-600">
								<li>✔ Strong math logic</li>
								<li>✔ Science conceptual clarity</li>
								<li>✔ Exam confidence</li>
								<li>✔ Scholarship readiness</li>
							</ul>
						</motion.div>

						<motion.div {...fadeUp} className="bg-white p-10 rounded-2xl shadow-lg border">
							<h3 className="text-2xl font-bold text-[#6E433D]">
								Late Starter
							</h3>
							<ul className="mt-6 space-y-4 text-gray-600">
								<li>• Struggles in 11th concepts</li>
								<li>• Board exam pressure</li>
								<li>• Last-minute coaching rush</li>
								<li>• Confidence drop</li>
							</ul>
						</motion.div>

					</div>

				</div>
			</section>


			{/* ================= BRAIN DEVELOPMENT SECTION ================= */}
			<section className="py-32 px-6">
				<div className="max-w-5xl mx-auto text-center">

					<motion.h2 {...fadeUp} className="text-4xl font-bold text-[#6E433D]">
						Class 8–10 Is Brain Development Stage.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-lg text-gray-600 leading-relaxed"
					>
						This is when logical reasoning patterns are formed.
						When students learn how to think — not just memorize.
						The right mentorship during this stage creates
						lifelong academic advantage.
					</motion.p>

					<div className="mt-16 grid md:grid-cols-3 gap-10">

						{[
							"Concept Clarity",
							"Problem Solving Skills",
							"Competitive Exposure"
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


			{/* ================= SCHOLARSHIP + RESPONSIBILITY ================= */}
			<section className="bg-[#6E433D] text-white py-32 text-center px-6">

				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl font-bold"
				>
					Waiting feels safe today.
				</motion.h2>

				<motion.h3
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-3xl mt-4 text-[#ffc926] font-bold"
				>
					But delay quietly creates a gap.
				</motion.h3>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className="mt-6 text-lg max-w-2xl mx-auto"
				>
					Give your child the advantage early.
					Build strong foundations before pressure begins.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
				>
					<Button className="mt-10 bg-[#ffc926] text-[#6E433D] px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Register For Scholarship Test
					</Button>
				</motion.div>

			</section>

		</div>
	);
}
