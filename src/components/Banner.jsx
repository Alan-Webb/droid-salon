import {useState} from "react";
import {IoCloseCircle} from "react-icons/io5";
import {FaPlay} from "react-icons/fa";
import bannerVideo from "../assets/BannerVideo.mp4";
import bannerfood from "../assets/Bannerfood.png";
import bannerArrow from "../assets/BannerArrow.png";
import bannerClock from "../assets/BannerClock.png";
import bannersmall1 from "../assets/Bannersmall1.png";
import bannersmall2 from "../assets/Bannersmall2.png";
import bannersmall3 from "../assets/Bannersmall3.png";

const Banner = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="bg-white pt-12 md:pt-24 min-h-125 flex items-center">
			{/* VIDEO MODAL */}
			{showVideo && (
				<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
					<div className=" bg-orange-200 p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
						{/* Close Button */}
						<button
							onClick={() => setShowVideo(false)}
							className="absolute top-1 right-1 text-orange-500 text-4xl cursor-pointer">
							<IoCloseCircle />
						</button>
						<div className="aspect-video">
							<iframe
								src={bannerVideo}
								width="100%"
								height="100%"
								allow="autoplay"
								allowFullScreen
								className="rounded-lg"></iframe>
						</div>
					</div>
				</div>
			)}
			{/* CONTENT */}
			<div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Left Content */}
				<div className="w-full lg:flex-1 text-center lg:text-left">
					<h3 className="text-lg mt-5 md:text-xl lg:text-2xl font-bold text-gray-600 mb-2 md:mb-3">
						Second Breakfast Served All Day
					</h3>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-slide-up font-extrabold leading-tight mb-4">
						The <br />
						<span className="text-orange-600">Shire</span>
						{""}
						<br className="hidden md:block" />
						<span className="text-yellow-500">Restaurant</span>
					</h1>
					<p className="text-sm lg:text-lg text-gray-600 mb-6">
						Every meal will take you there and back again{""}
						<br className="hidden md:block" />
						with fast and free delivery
					</p>
					{/* Buttons */}
					<div className="flex flex-wrap justify-center lg:justify-start gap-4">
						<button className="bg-red-500 text-white uppercase px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base cursor-pointer">
							Get Started
						</button>
						<button
							onClick={() => setShowVideo(true)}
							className="flex items-center gap-2 uppercase px-6 py-2 md:px-8 md:py-3 md:gap-3 border rounded-full hover:bg-gray-100 transition hover:scale-105 text-sm md:text-base cursor-pointer">
							Play <FaPlay />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
