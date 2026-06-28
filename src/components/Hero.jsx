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
				<div className="absolute inset-12 flex items-center justify-start max-w-7xl text-amber-400">
					<div>
						<h1 className="text-6xl font-bold mb-4">Droid Salon</h1>
						<p className="text-4xl">Your Droids Best Version Starts Here</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
