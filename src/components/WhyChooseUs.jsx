const WhyChooseUs = () => {
	return (
		<div className="py-20 bg-gray-100 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* LEFT CONTENT */}
					<div>
						<h2 className="text-3xl font-bold mb-4 px-4 lg:px-0">
							Why Choose Us?
						</h2>
						<p className="max-w-lg px-4 lg:px-0">
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
						<div className="px-4 lg:px-0">
							<h3>Expert Technicians</h3>
							<p>
								Our experienced engineers combine technical expertise with
								meticulous craftsmanship to deliver reliable repairs and
								precision upgrades every time.
							</p>
						</div>
						{/* Entry 2 */}
						<div>
							<h3>Premium Components</h3>
							<p>
								We use only high-quality replacement parts and certified
								components to ensure every repair and upgrade meets the highest
								standards of durability and reliability.
							</p>
						</div>
						{/* Entry 3 */}
						<div>
							<h3>Safety & Security</h3>
							<p>
								Every service includes thorough testing, firmware verification,
								and system integrity checks to ensure your droid leaves our
								workshop operating safely and securely.
							</p>
						</div>
					</div>
					{/* RIGHT CONTENT */}
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
