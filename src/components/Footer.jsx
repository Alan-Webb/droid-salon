import logo from "../assets/logo.webp";
import {FaChevronRight, FaHouseUser, FaEnvelope} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="py-8 bg-stone-400">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* LOGO */}
				<div className="mx-12">
					<img
						src={logo}
						alt="Droid Salon Logo"
						className="w-12 lg:w-20 h-12 lg:h-20 m-2 rounded-full bg-amber-600 border border-white"
					/>
					<p className="text-xl text-amber-700">Droid Salon</p>
				</div>
				{/* SERVICES */}
				<div>
					<h4 className="font-bold text-xl">Services</h4>
					<ul>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Combat Upgrades</span>
						</li>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Ability Tuning</span>
						</li>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Mobile Services</span>
						</li>
					</ul>
				</div>
				{/* QUICK LINKS */}
				<div>
					<h4 className="font-bold text-xl">Quick Links</h4>
					<ul>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Home</span>
						</li>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>About Us</span>
						</li>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Services</span>
						</li>
						<li className="flex items-center space-x-2 cursor-pointer">
							<FaChevronRight className="text-xs" />
							<span>Contact Us</span>
						</li>
					</ul>
				</div>
				{/* CONTACT */}
				<div>
					<h4 className="font-bold text-xl">Contact Us</h4>
					<ul>
						<li className="flex items-center space-x-2">
							<FaHouseUser />
							<span>7 Torrens Street, London, EC1V 1NQ</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaEnvelope />
							<span>info@droidsalon.co.uk</span>
						</li>
						<li className="flex items-center space-x-2">
							Tel:
							<span>01218 184 514</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
