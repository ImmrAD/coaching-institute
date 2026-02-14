"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";

const courses = [
	{ title: "JEE Preparation", link: "/courses/jee" },
	{ title: "NEET Preparation", link: "/courses/neet" },
	{ title: "MHT-CET Coaching", link: "/courses/mht-cet" },
	{ title: "8th–10th (CBSE)", link: "/courses/eight-ten-cbse" },
	{ title: "8th–10th (Maharashtra Board)", link: "/courses/eight-ten-state" },
];

export default function Courses() {
	return (
		<section className="py-20 px-6 lg:px-20 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<Reveal>
					<h2 className="text-3xl lg:text-4xl font-bold text-center text-[#6E433D]">
						Our Courses
					</h2>
				</Reveal>

				<div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{courses.map((course, i) => (
						<Reveal key={course.link} delay={i * 0.1}>
							<motion.div
								whileHover={{ y: -10, scale: 1.02 }}
								className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border"
							>
								<Link href={course.link} className="block">
									<h3 className="text-xl font-semibold text-[#D23D2D]">
										{course.title}
									</h3>
									<p className="mt-3 text-gray-600">
										Comprehensive structured preparation with weekly tests and mentoring.
									</p>
								</Link>
							</motion.div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
