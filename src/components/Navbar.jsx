import logo from "../assets/logo.webp";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="bg-stone-300 border-b border-amber-600">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<div>
					{/* LOGO */}
					<div>
						<img
							src={logo}
							alt="Droid Salon Logo"
							className="w-20 h-20 m-2 rounded-full bg-amber-600 border-2 border-stone-400"
						/>
					</div>
				</div>
				{/* NAVIGATION */}
				<div className="flex flex-col">
					{/* Contact Details */}
					<div className="flex justify-end pb-2">
						<div className="flex space-x-2 items-center">
							<MdEmail className="text-amber-600" />
							<span>info@droidsalon.co.uk</span>
						</div>
						<div className="flex space-x-2 items-center ml-8">
							<BsFillTelephoneFill className="text-amber-600" />
							<span>0121 184 5143</span>
						</div>
					</div>
					{/* LINKS */}
					<div className="flex space-x-4 border-t border-amber-500 py-2">
						{/* Home */}
						<a href="" className="font-medium px-4">
							Home
						</a>
						{/* Services */}
						<div className="group">
							<a
								href=""
								className="flex items-center space-x-1  font-medium px-4">
								<span>Services</span>
								<FaChevronDown className="text-xs" />
							</a>
							<div className="absolute hidden group-hover:block rounded-md w-44 bg-stone-200 shadow-lg py-2">
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Combat Upgrades
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Ability Tuning
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Mobile Services
								</a>
							</div>
						</div>
						{/* Industries */}
						<div className="group">
							<a
								href=""
								className="flex items-center space-x-1 font-medium px-4">
								<span>Industries</span>
								<FaChevronDown className="text-xs" />
							</a>
							<div className="absolute hidden group-hover:block rounded-md w-44 bg-stone-200 shadow-lg py-2">
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Private
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Commercial
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Military
								</a>
							</div>
						</div>
						{/* Locations */}
						<div className="group">
							<a
								href=""
								className="flex items-center space-x-1  font-medium px-4">
								<span>Locations</span>
								<FaChevronDown className="text-xs" />
							</a>
							<div className="absolute hidden group-hover:block rounded-md w-44 bg-stone-200 shadow-lg py-2">
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									London
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									Tokyo
								</a>
								<a href="" className="block px-4 py-2 hover:bg-amber-300">
									New York
								</a>
							</div>
						</div>
						{/* Careers */}
						<a href="" className="font-medium px-4">
							Careers
						</a>
						{/* Contact */}
						<a href="" className="font-medium px-4">
							Contact
						</a>
						{/* About */}
						<a href="" className="font-medium px-4">
							About
						</a>
					</div>
				</div>
				{/* QUOTE BUTTON */}
				<div>
					<button className="px-5 py-2 m-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 cursor-pointer">
						Get A Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
