import {useState} from "react";
import {IoCloseCircle} from "react-icons/io5";
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
					<div className=" bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative">
						{/* Close button */}
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
			{/* Buttons */}
			<div></div>
		</div>
	);
};

export default Banner;
