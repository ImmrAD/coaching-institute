export default function LocationSection() {
	return (
		<section className="py-20 px-6 lg:px-20 bg-[#f9f9f9]">
			<div className="max-w-6xl mx-auto text-center">

				<h2 className="text-3xl md:text-4xl font-bold text-[#6E433D]">
					Visit Us in PCMC
				</h2>

				<p className="mt-4 text-gray-600">
					Durga & P K Classes – Trusted JEE, NEET and MHT CET Coaching in PCMC
				</p>

				<div className="mt-10 rounded-xl overflow-hidden shadow-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18..."
						width="100%"
						height="350"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
					/>
				</div>

			</div>
		</section>
	);
}
