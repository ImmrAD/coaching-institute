"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Course = {
	title: string;
	tagline: string;
	link: string;
	color: string;
};

const courses: Course[] = [
	{
		title: "JEE Preparation",
		tagline: "For future IITians & problem-solving champions.",
		link: "/courses/jee",
		color: "text-[#D23D2D]"
	},
	{
		title: "NEET Preparation",
		tagline: "For future doctors & life-savers.",
		link: "/courses/neet",
		color: "text-[#6E433D]"
	},
	{
		title: "MHT-CET Coaching",
		tagline: "Smart strategy for Maharashtra engineering admissions.",
		link: "/courses/mht-cet",
		color: "text-[#D23D2D]"
	},
	{
		title: "8th–10th (CBSE)",
		tagline: "Build foundations before the pressure begins.",
		link: "/courses/eight-ten-cbse",
		color: "text-[#6E433D]"
	},
	{
		title: "8th–10th (Maharashtra Board)",
		tagline: "SSC scoring mastery & academic confidence.",
		link: "/courses/eight-ten-state",
		color: "text-[#D23D2D]"
	}
];

type CourseCardProps = {
	course: Course;
	index: number;
};

function CourseCard({ course, index }: CourseCardProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

	return (
		<motion.section
			ref={ref}
			style={{ y, scale }}
			className="max-w-6xl mx-auto px-6"
		>
			<Link href={course.link}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: index * 0.08 }}
					className="group relative cursor-pointer rounded-2xl p-12 transition-all duration-300 hover:shadow-2xl bg-white overflow-hidden border border-gray-200"
				>

					{/* Soft Yellow Glow Background */}
					<div className="absolute inset-0 bg-[#ffc926]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					{/* Animated Top Yellow Line */}
					<div className="absolute top-0 left-0 h-1 w-0 bg-[#ffc926] group-hover:w-full transition-all duration-500"></div>

					<div className="relative flex flex-col lg:flex-row justify-between items-center gap-8">

						<div>
							{/* Yellow Accent Badge */}
							<div className="inline-block mb-4 px-3 py-1 text-sm font-semibold bg-[#ffc926] text-[#6E433D] rounded-full">
								Featured Program
							</div>

							<h2 className={`text-3xl lg:text-4xl font-bold ${course.color}`}>
								{course.title}
							</h2>

							<p className="mt-4 text-gray-600 text-lg max-w-xl leading-relaxed">
								{course.tagline}
							</p>
						</div>

						<div className="flex items-center gap-3 font-semibold text-lg text-[#D23D2D] relative">
							<span className="relative">
								Explore Program
								<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ffc926] group-hover:w-full transition-all duration-300"></span>
							</span>
							<span className="transition-transform duration-200 group-hover:translate-x-2">
								→
							</span>
						</div>

					</div>

				</motion.div>
			</Link>
		</motion.section>
	);
}



export default function CoursesPage() {

	const { scrollYProgress } = useScroll();
	const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<div className="relative bg-white overflow-hidden">

			{/* Scroll progress bar */}
			<motion.div
				style={{ scaleX }}
				className="fixed top-0 left-0 right-0 h-1 bg-[#ffc926] origin-left z-50"
			/>

			{/* HERO */}
			<section className="pt-32 pb-24 px-6 text-center max-w-5xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl lg:text-6xl font-extrabold text-[#6E433D]"
				>
					Choose Your Path.
					<span className="block text-[#D23D2D] relative inline-block">
						Build Your Future.
						<span className="absolute left-0 -bottom-2 h-2 w-full bg-[#ffc926]"></span>
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="mt-8 text-lg text-gray-600"
				>
					Each program is structured differently —
					because every goal demands a different strategy.
				</motion.p>
			</section>

			{/* COURSES */}
			<div className="space-y-24 pb-32">
				{courses.map((course, index) => (
					<CourseCard key={course.title} course={course} index={index} />
				))}
			</div>

		</div>
	);
}
