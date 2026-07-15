import WhyChooseUsImg from "../assets/whyChooseUs.webp";

const WhyChooseUs = () => {
	return (
		<div className="py-20 bg-stone-300 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* LEFT CONTENT */}
					<div className="w-full lg:w-1/2 sm:pe-12">
						<h2 className="text-3xl font-extrabold mb-4 px-4 lg:px-0">
							Why Choose <span className="text-amber-600">Droid Salon</span>
						</h2>
						<p className="max-w-lg font-semibold px-4 lg:px-0">
							Combining expert craftsmanship with advanced technology, we
							deliver reliable maintenance and precision upgrades for every
							generation of droid.
							<br />
							From routine servicing to complete system overhauls, our
							technicians provide dependable solutions that keep your droid
							performing at its very best
						</p>
						{/* Feature */}
						{/* Entry 1 */}
						<div className="px-4 lg:px-0 mt-8 mb-6">
							<h3 className="text-2xl font-extrabold mb-2">
								Expert Technicians
							</h3>
							<p className="font-semibold">
								Our experienced engineers combine technical expertise with
								meticulous craftsmanship to deliver reliable repairs and
								precision upgrades every time.
							</p>
						</div>
						{/* Entry 2 */}
						<div className="px-4 lg:px-0 mt-8 mb-6">
							<h3 className="text-2xl font-extrabold mb-2">
								Premium Components
							</h3>
							<p className="font-semibold">
								We use only high-quality replacement parts and certified
								components to ensure every repair and upgrade meets the highest
								standards of durability and reliability.
							</p>
						</div>
						{/* Entry 3 */}
						<div className="px-4 lg:px-0 mt-8 mb-6">
							<h3 className="text-2xl font-extrabold mb-2">
								Safety & Security
							</h3>
							<p className="font-semibold">
								Every service includes thorough testing, firmware verification,
								and system integrity checks to ensure your droid leaves our
								workshop operating safely and securely.
							</p>
						</div>
					</div>
					{/* RIGHT CONTENT */}
					<div className="w-full lg:w-1/2 mt-6 lg:mt-12 px-4 lg:px-0 ">
						<img
							src={WhyChooseUsImg}
							alt="droid servicing"
							className="rounded-full border border-amber-600"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
