import {useState} from "react";
import {IoClose} from "react-icons/io5";
import {FaPlay} from "react-icons/fa";
import BannerVideo from "../assets/BannerVideo.mp4";

const Banner = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="min-250 pt-4 flex items-center">
			<div className=" pt-20 md:pt-24 lg:pt-36 bg-[url('../src/assets/heroImage3.webp')] h-full w-full bg-cover mx-auto px-4 flex flex-col items-center">
				{/* VIDEO MODAL */}
				{showVideo && (
					<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
						<div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
							<button
								onClick={() => setShowVideo(false)}
								className="absolute -top-8 right-0 text-white text-2xl cursor-pointer">
								<IoClose />
							</button>
							<div className="aspect-video">
								<iframe
									src={BannerVideo}
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-slide-up font-extrabold leading-tight mb-4">
							Hearty and Delicious Food from
							<br />
							<span className="text-orange-600">The Shire</span>
						</h1>
						<p className="text-md text-gray-600 mb-6">
							Where second breakfasts are sacred{""}
							<br className="hidden sm:block" />
							and every meal is a journey there and back again
						</p>
						<div className="flex flex-wrap justify-center lg:justify-start gap-4">
							<button className="bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base cursor-pointer">
								Get Started
							</button>
							<button
								onClick={() => setShowVideo(true)}
								className="flex items-center gap-2 border rounded-full px-4 py-2 md:px-6 md:py-3 cursor-pointer">
								<FaPlay className="w-6 h-6" />
								<span className="font-semibold">Play</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
