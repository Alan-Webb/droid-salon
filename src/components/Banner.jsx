import {useState} from "react";

const Banner = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="bg-white pt-12 md:pt-24 min-h-125">
			{/* VIDEO MODAL */}
			<div className="fixed inset-o bg-black/50 z-50 flex items-center justify-center p-4">
				<div className="bg-white p-4 md:p-8 rounded-lg w-full max-4xl relative">
					<button
						onClick={() => setShowVideo(false)}
						className="absolute -top-8 right-0 text-white text-2xl"></button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
