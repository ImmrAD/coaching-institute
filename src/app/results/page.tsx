import Image from "next/image";
import { motion } from "framer-motion";

export default function ResultsPage() {
	return (
		<div className="bg-white">

			{/* HERO */}
			<section className="py-24 px-6 lg:px-20 text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#6E433D]">
					JEE Results 2026 – PCMC
					<span className="block text-[#D23D2D] mt-3">
						Performance That Speaks.
					</span>
				</h1>

				<p className="mt-6 text-gray-600 max-w-3xl mx-auto">
					Consistent results in JEE preparation with structured mentorship and weekly test culture.
				</p>
			</section>

			{/* RESULT IMAGE */}
			<section className="pb-24 px-6 lg:px-20">
				<div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
					<Image
						src="/results-jee-2026.jpg"
						alt="JEE Mains 2026 Results Durga PK Classes PCMC"
						width={1200}
						height={800}
						className="w-full h-auto"
						priority
					/>
				</div>
			</section>

			{/* TRUST CLOSE */}
			<section className="bg-[#f9f9f9] py-20 text-center px-6">
				<h2 className="text-3xl font-bold text-[#6E433D]">
					Preparation With Structure.
				</h2>
				<p className="mt-4 text-[#D23D2D] font-semibold">
					Results Are the Outcome.
				</p>
			</section>

		</div>
	);
}