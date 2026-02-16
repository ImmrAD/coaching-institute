"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
	{
		q: "Which is the best JEE coaching in PCMC?",
		a: "Durga & P K Classes is known for structured preparation, personal mentoring and consistent results in JEE preparation in PCMC."
	},
	{
		q: "Do you provide NEET coaching in PCMC?",
		a: "Yes. We provide structured NEET coaching with weekly tests, concept clarity and performance tracking."
	},
	{
		q: "Is MHT CET coaching available?",
		a: "Yes. We provide focused MHT-CET preparation with structured mock tests and analysis."
	},
	{
		q: "Do you teach 8th to 10th students?",
		a: "Yes. We offer strong foundation coaching for CBSE and Maharashtra Board students from 8th to 10th."
	}
];

export default function FAQSection() {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section className="py-20 px-6 lg:px-20 bg-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-[#6E433D]">
					Frequently Asked Questions
				</h2>

				<div className="mt-12 space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border rounded-xl p-5 cursor-pointer"
							onClick={() => setOpen(open === index ? null : index)}
						>
							<h3 className="font-semibold text-[#D23D2D]">
								{faq.q}
							</h3>

							{open === index && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="mt-3 text-gray-600"
								>
									{faq.a}
								</motion.p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
