"use client";

import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative w-full bg-white pt-20 md:pt-28 pb-20 md:pb-24 px-6 lg:px-20 overflow-hidden">

			{/* Background Glows */}
			<div className="absolute -top-20 -right-20 w-72 h-72 bg-[#ffc926]/20 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 -left-20 w-72 h-72 bg-[#D23D2D]/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

				{/* Left Content */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>

					{/* SEO Friendly H1 */}
					<motion.h1
						className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						JEE & NEET Coaching in PCMC
						<span className="block text-[#D23D2D] mt-2">
							That Builds Strong Foundations.
						</span>
					</motion.h1>

					{/* Supporting Paragraph with Natural Keyword Distribution */}
					<motion.p
						className="mt-6 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						Durga & P K Classes offers structured preparation for JEE,
						NEET, and MHT CET classes in PCMC, along with
						personal mentoring for 8th to 10th coaching students from
						CBSE and Maharashtra Board.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						className="mt-8 flex flex-wrap gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
					>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Button className="bg-[#D23D2D] text-white hover:bg-[#ffc926] hover:text-[#6E433D] transition-all duration-300">
								Book Free Demo
							</Button>
						</motion.div>

						<motion.div whileHover={{ scale: 1.05 }}>
							<Button
								variant="outline"
								className="border-2 border-[#D23D2D] text-[#D23D2D] hover:bg-[#D23D2D] hover:text-white transition-all duration-300"
							>
								View Courses
							</Button>
						</motion.div>
					</motion.div>

					{/* Stats */}
					<div className="mt-10 md:mt-12 flex gap-8 md:gap-10 flex-wrap">
						<div>
							<h2 className="text-xl md:text-2xl font-bold text-[#D23D2D]">
								<Counter to={10} />+
							</h2>
							<p className="text-sm text-gray-500">
								Years of Teaching Excellence
							</p>
						</div>

						<div>
							<h2 className="text-xl md:text-2xl font-bold text-[#D23D2D]">
								<Counter to={500} />+
							</h2>
							<p className="text-sm text-gray-500">
								Successful Students
							</p>
						</div>

						<div>
							<h2 className="text-xl md:text-2xl font-bold text-[#D23D2D]">
								<Counter to={95} />%
							</h2>
							<p className="text-sm text-gray-500">
								Consistent Result Success
							</p>
						</div>
					</div>

				</motion.div>

				{/* Right Image */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="relative"
				>
					<motion.img
						src="/hero.jpg"
						alt="Students preparing for JEE and NEET exams in PCMC"
						className="rounded-xl shadow-xl w-full h-auto"
						animate={{ y: [0, -8, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					<motion.div
						className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-[#ffc926] text-[#6E433D] px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-lg font-semibold text-sm md:text-base"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 1, duration: 0.5 }}
					>
						Admissions Open in PCMC
					</motion.div>
				</motion.div>

			</div>
		</section>
	);
}
