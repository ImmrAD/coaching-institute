"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";

const toppers = [
	{
		name: "Aarav Sharma",
		exam: "JEE Advanced",
		rank: "AIR 412",
		image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
	},
	{
		name: "Ishita Patil",
		exam: "NEET",
		rank: "Score: 685/720",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
	},
	{
		name: "Rohan Deshmukh",
		exam: "MHT-CET",
		rank: "99.82 Percentile",
		image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
	}
];

export default function ResultsSection() {
	return (
		<section className="py-32 px-6 lg:px-20 bg-[#f9f9f9] relative overflow-hidden">

			{/* Yellow Background Accent */}
			<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#ffc926]/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto">

				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="text-4xl lg:text-5xl font-extrabold text-[#6E433D]">
						Our Results
						<span className="block text-[#D23D2D] mt-2">
							Speak For Themselves
						</span>
					</h2>
				</motion.div>

				{/* Big Stats */}
				<div className="mt-20 grid md:grid-cols-3 gap-12 text-center">

					<div>
						<h3 className="text-4xl font-extrabold text-[#D23D2D]">
							<Counter to={95} />%
						</h3>
						<p className="mt-3 text-gray-600">
							Success Rate in Competitive Exams
						</p>
					</div>

					<div>
						<h3 className="text-4xl font-extrabold text-[#D23D2D]">
							<Counter to={500} />+
						</h3>
						<p className="mt-3 text-gray-600">
							Students Successfully Mentored
						</p>
					</div>

					<div>
						<h3 className="text-4xl font-extrabold text-[#D23D2D]">
							<Counter to={10} />+
						</h3>
						<p className="mt-3 text-gray-600">
							Years of Teaching Excellence
						</p>
					</div>

				</div>

				{/* Topper Cards */}
				<div className="mt-24 grid md:grid-cols-3 gap-10">

					{toppers.map((student, index) => (
						<motion.div
							key={student.name}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
						>

							<div className="relative">
								<img
									src={student.image}
									alt={student.name}
									className="w-full h-72 object-cover"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

								<div className="absolute bottom-6 left-6 text-white">
									<p className="text-sm uppercase tracking-wide text-[#ffc926]">
										{student.exam}
									</p>
									<h3 className="text-xl font-bold mt-1">
										{student.name}
									</h3>
									<p className="mt-1 font-semibold">
										{student.rank}
									</p>
								</div>
							</div>

						</motion.div>
					))}

				</div>

				{/* Authority Closing Line */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-24 text-center"
				>
					<p className="text-xl font-semibold text-[#6E433D]">
						Results don’t happen by accident.
					</p>
					<p className="mt-3 text-[#D23D2D] font-bold text-lg">
						They are built with discipline, mentorship, and strategy.
					</p>
				</motion.div>

			</div>
		</section>
	);
}
