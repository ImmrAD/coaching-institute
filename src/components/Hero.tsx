"use client";
import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative w-full bg-white pt-28 pb-24 px-6 lg:px-20 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#ffc926]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 -left-20 w-72 h-72 bg-[#D23D2D]/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

				{/* Left Content */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.h1
						className="text-4xl lg:text-6xl font-extrabold text-[#6E433D] leading-tight"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						Building Strong Foundations.
						<br />
						<span className="text-[#D23D2D]">
							Creating Future Doctors & Engineers.
						</span>
					</motion.h1>

					<motion.p
						className="mt-6 text-lg text-gray-600 max-w-xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						Personal Mentoring • Weekly Tests • Doubt Solving • Scholarship Programs  
						Designed for CBSE & Maharashtra Board students from 8th to 12th.
					</motion.p>

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
					<div className="mt-12 flex gap-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#D23D2D]">
                                <Counter to={10} />+
                            </h3>
                            <p className="text-sm text-gray-500">Teaching Excellence</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#D23D2D]">
                                <Counter to={500} />+
                            </h3>
                            <p className="text-sm text-gray-500">Successful Students</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#D23D2D]">
                                <Counter to={95} />%
                            </h3>
                            <p className="text-sm text-gray-500">Result Success Rate</p>
                        </div>
                    </div>

				</motion.div>

				{/* Right Image */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="relative"
				>
					<motion.img
						src="/hero.jpg"
						alt="Students studying"
						className="rounded-xl shadow-xl"
						animate={{ y: [0, -10, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					<motion.div
						className="absolute -bottom-6 -left-6 bg-[#ffc926] text-[#6E433D] px-6 py-4 rounded-lg shadow-lg font-semibold"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 1, duration: 0.5 }}
					>
						Admissions Open Now!
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
