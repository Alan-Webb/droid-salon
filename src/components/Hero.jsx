import heroImage from "../assets/heroImage.webp";
import { GiRobotGolem } from "react-icons/gi";

const Hero = () => {
	return (
		<div
			id="home"
			className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden"
			style={{
				background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
				backgroundSize: `cover`,
				backgroundPosition: `center`,
			}}>
			<div className="max-w-6xl text-white z-10 relative px-4">
				<div className="absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8 text-4xl md:text-5xl text-amber-300/90 rotate-12"><GiRobotGolem /></div>
				{/* HEADING */}
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-linear-to-r from-amber-300 via-rose-300 to-rose-500 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
					Droid Salon
				</h1>
			</div>
		</div>
	);
};

export default Hero;
