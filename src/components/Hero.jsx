import Hero1 from "../assets/hero1.webp";

const Hero = () => {
	return (
		<div>
			<div className="relative">
				{/* IMAGE CAROUSEL */}
				<div>
					<img src={Hero1} alt="multi-purpose droids" />
					{/* Overlay */}
					<div className="absolute inset-0 bg-linear-to-r from-black via-amber-900/50 to-amber-800/50"></div>
				</div>
				{/* CONTENT */}
				<div>
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
