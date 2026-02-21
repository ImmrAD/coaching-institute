import Image from "next/image";

export default function ScholarshipPage() {
	return (
		<div className="bg-white">

			<section className="py-24 px-6 lg:px-20 text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#6E433D]">
					DPK – Future Talent Search Exam
					<span className="block text-[#D23D2D] mt-3">
						100% Scholarship Opportunity
					</span>
				</h1>

				<p className="mt-6 text-gray-600 max-w-3xl mx-auto">
					Get your child’s IQ evaluated for free. Scholarships available for 7th, 8th and 9th standard students in PCMC.
				</p>
			</section>

			<section className="pb-24 px-6 lg:px-20 space-y-12">
				<div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
					<Image
						src="/ftse-poster-1.jpg"
						alt="FTSE Scholarship Exam PCMC"
						width={1200}
						height={1000}
						className="w-full h-auto"
					/>
				</div>

				<div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
					<Image
						src="/ftse-poster-2.jpg"
						alt="FTSE Scholarship Details"
						width={1200}
						height={1000}
						className="w-full h-auto"
					/>
				</div>
			</section>

		</div>
	);
}