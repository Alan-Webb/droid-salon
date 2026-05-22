import heroImage from "../assets/heroImage.webp";
import { GiRobotGolem } from "react-icons/gi";

const Hero = () => {
	return (
		<div
			id="home"
			className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden"
			style={{
				background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroImage})`,
				backgroundSize: `cover`,
				backgroundPosition: `center`,
			}}>
			<div className="max-w-6xl text-white z-10 relative px-4">
				<div className="absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8 text-4xl md:text-5xl text-amber-300/20 rotate-12"><GiRobotGolem /></div>
			</div>
		</div>
	);
};

export default Hero;
