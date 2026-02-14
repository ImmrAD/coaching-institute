"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.8 }
};

export default function JeePage() {
	return (
		<div className="bg-white overflow-hidden">

			{/* ================= HERO ================= */}
			<section className="max-w-6xl mx-auto pt-32 pb-24 px-6">

				<motion.div {...fadeUp} className="border-l-8 border-[#D23D2D] pl-6">
					<h1 className="text-5xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight">
						JEE is not about
						<span className="block text-[#D23D2D]">
							memorizing formulas.
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
					It’s about mastering concepts, building stamina,
					and learning how to think under pressure.
					That’s how we train future IITians.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="mt-10"
				>
					<Button className="bg-[#D23D2D] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Book Your Free Demo
					</Button>
				</motion.div>

			</section>


			{/* ================= METHOD SECTION ================= */}
			<section className="bg-[#f9f9f9] py-32 px-6">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

					<motion.div {...fadeUp}>
						<h2 className="text-4xl font-bold text-[#6E433D]">
							We Train Minds,
							<span className="block text-[#D23D2D]">
								Not Just Students.
							</span>
						</h2>

						<p className="mt-6 text-gray-600 text-lg leading-relaxed">
							Our system builds conceptual clarity first,
							then pressure-handling ability,
							then competitive dominance.
						</p>
					</motion.div>

					<motion.div
						{...fadeUp}
						className="bg-white p-10 rounded-2xl shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<ul className="space-y-6 text-gray-700 text-lg">
							<li>✔ Deep Concept Sessions</li>
							<li>✔ Advanced Problem Drills</li>
							<li>✔ Performance Analytics</li>
							<li>✔ Rank Prediction & Strategy</li>
						</ul>
					</motion.div>

				</div>
			</section>


			{/* ================= ANIMATED TIMELINE ================= */}
			<section className="py-32 px-6">
				<div className="max-w-5xl mx-auto relative">

					<h2 className="text-4xl font-bold text-center text-[#6E433D]">
						Your Journey To IIT
					</h2>

					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className="absolute left-4 top-24 w-1 bg-[#D23D2D]/40"
					/>

					<div className="mt-20 space-y-20 relative">

						{[
							{
								title: "Foundation Phase",
								desc: "Strong core building in Physics, Chemistry & Maths."
							},
							{
								title: "Application Phase",
								desc: "Mixed advanced problem sets & test strategy."
							},
							{
								title: "Performance Phase",
								desc: "Full mock simulations & rank improvement."
							}
						].map((step, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2, duration: 0.8 }}
								className="relative pl-12 group"
							>
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
									className="absolute left-0 top-2 w-6 h-6 bg-[#D23D2D] rounded-full group-hover:scale-125 transition-all duration-300"
								/>

								<h3 className="text-2xl font-bold text-[#D23D2D]">
									{step.title}
								</h3>
								<p className="mt-3 text-gray-600 text-lg">
									{step.desc}
								</p>
							</motion.div>
						))}

					</div>
				</div>
			</section>


			{/* ================= STRONG FINAL CTA ================= */}
			<section className="bg-[#6E433D] text-white py-32 text-center px-6">

				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-4xl font-bold"
				>
					If You’re Serious About IIT.
				</motion.h2>

				<motion.h3
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="text-3xl mt-4 text-[#ffc926] font-bold"
				>
					We’re Serious About You.
				</motion.h3>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					<Button className="mt-10 bg-[#ffc926] text-[#6E433D] px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
						Register for Counseling
					</Button>
				</motion.div>

			</section>

		</div>
	);
}
