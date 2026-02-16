"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalDecisionSection() {
	return (
		<section className="relative py-24 md:py-32 px-6 lg:px-20 bg-[#6E433D] text-white overflow-hidden">

			{/* Large Soft Yellow Glow */}
			<motion.div
				animate={{ opacity: [0.15, 0.25, 0.15] }}
				transition={{ duration: 8, repeat: Infinity }}
				className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#ffc926]/20 rounded-full blur-3xl"
			/>

			{/* Subtle Floating Line Accent */}
			<motion.div
				animate={{ width: ["40%", "60%", "40%"] }}
				transition={{ duration: 6, repeat: Infinity }}
				className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#ffc926]/40"
			/>

			<div className="relative max-w-4xl mx-auto text-center">

				{/* Emotional Build */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-base md:text-lg text-gray-300"
				>
					Every year, thousands of students prepare for competitive exams.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					viewport={{ once: true }}
					className="mt-3 text-base md:text-lg text-gray-300"
				>
					Only a few prepare with the right structure and mentorship.
				</motion.p>

				{/* Main Statement */}
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-12 md:mt-16 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
				>
					This is the difference between
					<span className="block text-[#ffc926] mt-3">
						Participation and Selection.
					</span>
				</motion.h2>

				{/* Anchor Line */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-8 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
				>
					In PCMC, serious preparation for JEE, NEET and MHT CET
					begins with one decision — choosing the right environment.
				</motion.p>

				{/* CTA */}
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-12 md:mt-16"
				>
					<Button className="bg-[#ffc926] text-[#6E433D] px-8 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
						Book Your Counseling Session
					</Button>
				</motion.div>

				{/* Soft Closing Line */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1 }}
					viewport={{ once: true }}
					className="mt-6 text-sm text-gray-300"
				>
					Limited batches. Focused mentorship. Disciplined preparation.
				</motion.p>

			</div>
		</section>
	);
}
