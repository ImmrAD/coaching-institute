"use client";

import { motion } from "framer-motion";

export default function WeUnderstandYou() {
	return (
		<section className="relative py-20 md:py-32 px-6 lg:px-20 bg-[#6E433D] text-white overflow-hidden">

			{/* Ambient Yellow Glow */}
			<motion.div
				animate={{ opacity: [0.15, 0.25, 0.15] }}
				transition={{ duration: 6, repeat: Infinity }}
				className="absolute -top-32 -right-32 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#ffc926]/20 rounded-full blur-3xl"
			/>

			{/* Background Silhouette */}
			<motion.div
				animate={{ y: [0, -15, 0] }}
				transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
				className="absolute inset-0 opacity-10"
			>
				<img
					src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
					alt="Students preparing for competitive exams in PCMC"
					className="w-full h-full object-cover mix-blend-overlay"
				/>
			</motion.div>

			<div className="relative max-w-6xl mx-auto">

				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
						This Is More Than Coaching.
						<span className="block text-[#ffc926] mt-3">
							It’s Understanding.
						</span>
					</h2>

					<p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
						In the journey of JEE, NEET and MHT CET preparation in PCMC,
						what students and parents need most is clarity and guidance.
					</p>
				</motion.div>

				{/* Emotional Grid */}
				<div className="mt-16 md:mt-24 relative grid md:grid-cols-2 gap-10 md:gap-16">

					{/* Vertical Divider */}
					<motion.div
						animate={{ opacity: [0.4, 0.8, 0.4] }}
						transition={{ duration: 4, repeat: Infinity }}
						className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ffc926] via-white/40 to-[#ffc926]"
					/>

					{/* Student Side */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative border-l-4 md:border-none border-[#ffc926] pl-6 md:pl-0 md:pr-12"
					>
						<h3 className="text-lg md:text-xl font-bold text-[#ffc926] uppercase tracking-wider">
							For Students
						</h3>

						<div className="mt-6 space-y-5 text-base md:text-lg text-gray-200 leading-relaxed">
							<p>
								You feel pressure.
								<span className="block text-white font-semibold mt-2">
									You compare yourself constantly.
								</span>
							</p>

							<p>
								Sometimes you question whether you’re good enough.
							</p>

							<p className="text-white font-semibold">
								You don’t need fear.
								You need clarity. Direction. Structure.
							</p>
						</div>
					</motion.div>

					{/* Parent Side */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative border-l-4 md:border-none border-[#ffc926] pl-6 md:pl-12"
					>
						<h3 className="text-lg md:text-xl font-bold text-[#ffc926] uppercase tracking-wider">
							For Parents
						</h3>

						<div className="mt-6 space-y-5 text-base md:text-lg text-gray-200 leading-relaxed">
							<p>
								You worry silently.
								<span className="block text-white font-semibold mt-2">
									You want the right guidance.
								</span>
							</p>

							<p>
								You fear choosing the wrong coaching institute in PCMC.
							</p>

							<p className="text-white font-semibold">
								You don’t just want teaching.
								You want mentorship. Stability. Growth.
							</p>
						</div>
					</motion.div>

				</div>

				{/* Resolution */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-16 md:mt-28 text-center"
				>
					<p className="text-lg md:text-2xl text-gray-200">
						That’s why we don’t just prepare students for exams.
					</p>

					<motion.p
						animate={{ y: [0, -4, 0] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						className="mt-5 md:mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffc926]"
					>
						We prepare them for confidence.
					</motion.p>

					<motion.div
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 3, repeat: Infinity }}
						className="mt-6 md:mt-8 h-[3px] w-24 md:w-32 bg-[#ffc926] mx-auto rounded-full"
					/>

					<p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
						With discipline. With mentorship. With structure.
						Because success built on clarity lasts longer than success built on pressure.
					</p>
				</motion.div>

			</div>
		</section>
	);
}
