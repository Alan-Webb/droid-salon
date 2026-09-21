import logo from "../assets/logo.webp";
import {FaChevronRight} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="py-8 bg-stone-400">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* COLUMN 1 CONTENT */}
				<div>
					<img
						src={logo}
						alt="Droid Salon Logo"
						className="w-12 lg:w-20 h-12 lg:h-20 m-2 rounded-full bg-amber-600 border border-white"
					/>
					<p>Droid Salon</p>
				</div>
				{/* SERVICES */}
				<div>
					<h4>Services</h4>
					<ul>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Combat Upgrades</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Ability Tuning</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Mobile Services</span>
						</li>
					</ul>
				</div>
				{/* QUICK LINKS */}
				<div>
					<h4>Quick Links</h4>
					<ul>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Home</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>About Us</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Services</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span>Contact Us</span>
						</li>
					</ul>
				</div>
				{/* ADDRESS SECTION */}
				<div>
					<h4></h4>
					<ul>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span></span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span></span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span></span>
						</li>
						<li className="flex items-center space-x-2">
							<FaChevronRight className="text-xs" />
							<span></span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
