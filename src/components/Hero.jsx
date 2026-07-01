import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";

const Hero = () => {
	return (
		<div>
			{/* IMAGE CAROUSEL */}
			<Swiper
				effect="fade"
				fadeEffect={{crossFade: true}}
				loop={true}
				slidesPerView={1}>
				{/* Slide 1 */}
				<SwiperSlide>
					<div className="relative h-[50vh] md:h-[90vh]">
						<div className="relative">
							<img src={Hero1} alt="multi-purpose droids" />
							{/* Overlay */}
							<div className="absolute inset-0 bg-linear-to-r from-black via-amber-900/30 to-amber-800/30"></div>
						</div>
						{/* Content */}
						<div className="absolute inset-12 flex items-center justify-start max-w-7xl text-amber-400">
							<div className="max-w-lg">
								<h1 className="hidden sm:block text-6xl font-bold mb-4">
									From Glitches to Greatness
								</h1>
								<p className="text-4xl sm:text-5xl">
									Your Droids Best Version Starts Here
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* Slide 2 */}
				<SwiperSlide>
					<div className="relative h-[50vh] md:h-[90vh]">
						<div className="relative">
							<img src={Hero2} alt="multi-purpose droids" />
							{/* Overlay */}
							<div className="absolute inset-0 bg-linear-to-r from-black via-amber-900/30 to-amber-800/30"></div>
						</div>
						{/* Content */}
						<div className="absolute inset-12 flex items-center justify-start max-w-7xl text-amber-400">
							<div className="max-w-lg">
								<h1 className="hidden sm:block text-6xl font-bold mb-4">
									From Glitches to Greatness
								</h1>
								<p className="text-4xl sm:text-5xl">
									Your Droids Best Version Starts Here
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
