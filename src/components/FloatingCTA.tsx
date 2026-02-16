"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 1 }}
			className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
		>
			<Button className="w-full bg-[#D23D2D] text-white py-4 rounded-xl shadow-xl hover:bg-[#ffc926] hover:text-[#6E433D] transition-all duration-300">
				Book Free Demo in PCMC
			</Button>
		</motion.div>
	);
}
