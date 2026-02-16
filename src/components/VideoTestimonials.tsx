"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";

const videos = [
	{
		title: "From Confusion to Confidence",
		type: "JEE Student – PCMC",
		thumbnail:
			"https://images.unsplash.com/photo-1607746882042-944635dfe10e",
		link: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
	},
	{
		title: "Structured Guidance Made the Difference",
		type: "NEET Parent – PCMC",
		thumbnail:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2",
		link: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
	},
	{
		title: "Weekly Tests Built My Confidence",
		type: "MHT CET Student – PCMC",
		thumbnail:
			"https://images.unsplash.com/photo-1599566150163-29194dcaad36",
		link: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
	}
];

export default function VideoTestimonials() {
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	// Close on ESC
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") setActiveVideo(null);
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<section className="py-20 md:py-32 px-6 lg:px-20 bg-[#f9f9f9] relative overflow-hidden">

			{/* Soft Yellow Accent */}
			<div className="absolute -bottom-24 -right-24 w-72 md:w-80 h-72 md:h-80 bg-[#ffc926]/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto">

				{/* Heading */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#6E433D]">
						Real Stories from
						<span className="block text-[#D23D2D] mt-2">
							Students & Parents in PCMC
						</span>
					</h2>

					<p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						See how structured preparation for JEE, NEET and MHT CET
						helped students build real confidence.
					</p>
				</div>

				{/* Video Grid */}
				<div className="mt-12 md:mt-20 grid lg:grid-cols-3 gap-8 md:gap-10">
					{videos.map((video, index) => (
						<motion.div
							key={index}
							onClick={() => setActiveVideo(video.link)}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}
							className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
						>
							<img
								src={video.thumbnail}
								alt={video.title}
								className="w-full h-56 md:h-64 object-cover"
								loading="lazy"
							/>

							<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

							{/* Play Button */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#ffc926] flex items-center justify-center text-[#6E433D] shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Play size={24} />
								</div>
							</div>

							{/* Text Overlay */}
							<div className="absolute bottom-5 left-5 text-white">
								<p className="text-xs uppercase tracking-wide text-[#ffc926]">
									{video.type}
								</p>
								<h3 className="text-base md:text-lg font-bold mt-1">
									{video.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* ================= MODAL ================= */}
			<AnimatePresence>
				{activeVideo && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
						onClick={() => setActiveVideo(null)}
					>
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.9 }}
							transition={{ duration: 0.25 }}
							className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>

							{/* Close Button */}
							<button
								onClick={() => setActiveVideo(null)}
								className="absolute top-3 right-3 z-10 bg-[#ffc926] text-[#6E433D] rounded-full p-2 hover:scale-110 transition-transform"
								aria-label="Close video"
							>
								<X size={18} />
							</button>

							{/* Responsive Video */}
							<div className="relative pb-[56.25%] h-0">
								<iframe
									src={activeVideo}
									className="absolute top-0 left-0 w-full h-full"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>

						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
