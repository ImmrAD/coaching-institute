"use client";

import { motion } from "framer-motion";
import {
	Brain,
	BarChart3,
	Users,
	Award,
	ClipboardCheck,
	Shield
} from "lucide-react";

const features = [
	{
		icon: Brain,
		title: "Conceptual Clarity First",
		desc:
			"We build strong academic foundations for JEE, NEET and MHT CET preparation before moving to advanced problem-solving."
	},
	{
		icon: BarChart3,
		title: "Performance Analytics",
		desc:
			"Weekly tests with detailed analysis help students improve consistently in competitive exams."
	},
	{
		icon: Users,
		title: "Personal Mentoring",
		desc:
			"Every student receives individual academic guidance to ensure steady growth and confidence."
	},
	{
		icon: ClipboardCheck,
		title: "Structured Weekly Testing",
		desc:
			"A disciplined test culture builds exam temperament for engineering and medical entrance exams."
	},
	{
		icon: Award,
		title: "Scholarship Programs",
		desc:
			"We reward talent through merit-based scholarships for JEE, NEET and foundation students."
	},
	{
		icon: Shield,
		title: "Limited Batch Size",
		desc:
			"Focused attention with small batches ensures better learning outcomes."
	}
];

export default function WhyChooseUs() {
	return (
		<section className="py-20 md:py-28 px-6 lg:px-20 bg-white relative overflow-hidden">

			{/* Yellow Accent */}
			<div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ffc926]/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto">

				{/* Section Heading */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#6E433D]">
						Why We Are Trusted for
						<span className="text-[#D23D2D] block mt-2">
							JEE & NEET Coaching in PCMC
						</span>
					</h2>

					<p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Parents across PCMC choose us for disciplined preparation,
						personal mentoring, and structured guidance for
						JEE, NEET, MHT CET and 8th to 10th foundation coaching.
					</p>
				</motion.div>

				{/* Feature Grid */}
				<div className="mt-14 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

					{features.map((feature, index) => {
						const Icon = feature.icon;

						return (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.07 }}
								className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
							>

								{/* Soft Hover Glow */}
								<div className="absolute inset-0 bg-[#ffc926]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								<div className="relative">

									<div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-[#ffc926] text-[#6E433D] mb-5 md:mb-6">
										<Icon size={24} />
									</div>

									<h3 className="text-lg md:text-xl font-bold text-[#D23D2D]">
										{feature.title}
									</h3>

									<p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
										{feature.desc}
									</p>

								</div>
							</motion.div>
						);
					})}

				</div>

				{/* Closing Statement */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="mt-16 md:mt-24 text-center"
				>
					<p className="text-lg md:text-xl font-semibold text-[#6E433D]">
						Strong structure builds strong confidence.
					</p>
					<p className="mt-3 text-[#D23D2D] font-bold text-base md:text-lg">
						That’s how real competitive preparation begins.
					</p>
				</motion.div>

			</div>
		</section>
	);
}
