import Hero1 from "../assets/hero1.webp";

const Hero = () => {
	return (
		<div>
			<div className="relative">
				{/* IMAGE CAROUSEL */}
				<div className="relative">
					<img src={Hero1} alt="multi-purpose droids" />
					{/* Overlay */}
					<div className="absolute inset-0 bg-linear-to-r from-black via-amber-900/30 to-amber-800/30"></div>
				</div>
				{/* CONTENT */}
				<div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto text-4xl text-amber-400">
					<div>
						<h1>Droid Salon</h1>
						<p>Your Droids Best Version Starts Here</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
