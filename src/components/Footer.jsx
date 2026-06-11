import {FaInstagram} from "react-icons/fa";
import {CiFacebook} from "react-icons/ci";
import {FaSquareXTwitter} from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-white border-t border-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{/* BRAND */}
					<div className="text-center md:text-left lg:text-center xl:text-left">
						<div className="flex justify-center md:justify-start lg:justify-center xl:justify-start items-center mb-4">
							<div className="relative">
								<div className="absolute -insert-2 bg-amber-200 rounded-full blur opacity-30" />
								<h3 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent relative">
									Droid Salon
								</h3>
							</div>
						</div>
						<p className="text-amber-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:mx-auto xl:mx-0 font-medium">
							Discover your droid's best version with our premium upgrades and
							augmentations.
						</p>
					</div>
					{/* TIMING */}
					<div className="lg:bottom-1 lg:pl-8 border-gray-100">
						<h4 className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-left">
							Business Hours
						</h4>
						<ul className="space-y-2 text-center md:text-left">
							<li className="text-gray-600 text-sm">
								<span className="font-medium">Monday - Friday</span> 9AM - 9PM
							</li>
							<li className="text-gray-600 text-sm">
								<span className="font-medium">Saturday - Sunday</span> 10AM -
								6PM
							</li>
						</ul>
					</div>
					{/* QUICK LINKS */}
					<div className="text-center md:text-left">
						<h4 className="text-lg font-semibold text-amber-800 mb-4">
							Explore
						</h4>
						<ul className="space-y-3">
							{["Home", "About", "Services", "Booking"].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-amber-600 hover:text-amber-800 transition-all flex items-center justify-center md:justify-start group text-sm sm:font-medium">
										<span className="bg-amber-200 group-hover:bg-amber-300 w-1.5 h-1.5 rounded-full mr-2 transition-colors" />
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* SOCIAL MEDIA */}
					<div className="text-center md:text-left">
						<h4 className="text-lg font-semibold text-amber-800 mb-4">
							Connect with Us
						</h4>
						<div className="flex justify-center md:justify-start space-x-4 lg:space-x-5">
							<FaInstagram className="w-8 h-8 cursor-pointer text-amber-600" />
							<CiFacebook className="w-8 h-8 cursor-pointer  text-amber-400" />
							<FaSquareXTwitter className="w-8 h-8 cursor-pointer  text-amber-500" />
						</div>
					</div>
					{/* COPYRIGHT */}
					<div className="border-t border-amber-100 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
						<p className="text-sm text-amber-600 font-medium mb-2">
							&copy; {new Date().getFullYear()} Droid Salon All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
