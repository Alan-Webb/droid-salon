import logo from "../assets/logo.webp";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaChevronDown} from "react-icons/fa";
import {VscThreeBars, VscChromeClose} from "react-icons/vsc";
import {useState} from "react";

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="bg-stone-300 border-b border-amber-600">
			<div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4 lg:px-0">
				<div>
					{/* LOGO */}
					<div className="flex">
						<img
							src={logo}
							alt="Droid Salon Logo"
							className="w-12 lg:w-20 h-12 lg:h-20 m-2 rounded-full bg-amber-600 border-2 border-stone-400"
						/>
						<div className="flex flex-col mt-2 lg:mt-4 ms-2 lg:text-3xl font-bold text-amber-700">
							<span>Droid</span>
							<span>Salon</span>
						</div>
					</div>
				</div>
				{/* NAVIGATION */}
				<nav className="flex flex-col">
					{/* Contact Details */}
					<div className="flex flex-col lg:flex-row space-y-1 justify-end me-12 lg:me-4">
						<div className="flex space-x-2 items-center">
							<MdEmail className="text-amber-600" />
							<span>info@droidsalon.co.uk</span>
						</div>
						<div className="flex space-x-2 items-center ml-6">
							<BsFillTelephoneFill className="text-amber-600" />
							<span>01218 184 514</span>
						</div>
					</div>
					{/* LINKS */}
					<div className="hidden lg:flex space-x-4 border-t border-amber-500 py-2">
						{/* Home */}
						<a href="" className="font-medium px-4 hover:text-amber-700">
							Home
						</a>
						{/* Services */}
						<div className="group">
							<a
								href=""
								className="flex items-center space-x-1  font-medium px-4 hover:text-amber-700">
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
								className="flex items-center space-x-1 font-medium px-4 hover:text-amber-700">
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
								className="flex items-center space-x-1  font-medium px-4 hover:text-amber-700">
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
						<a href="" className="font-medium px-4 hover:text-amber-700">
							Careers
						</a>
						{/* Contact */}
						<a href="" className="font-medium px-4 hover:text-amber-700">
							Contact
						</a>
						{/* About */}
						<a href="" className="font-medium px-4 hover:text-amber-700">
							About
						</a>
					</div>
				</nav>
				{/*BUTTONS */}
				<div>
					{/* Quote Btn */}
					<button className="hidden lg:block px-5 py-2 m-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 cursor-pointer">
						Get A Quote
					</button>
					{/* Hamburger Btn */}
					<button
						onClick={() => setMobileMenu(!mobileMenu)}
						className="lg:hidden text-3xl hover:text-amber-700 cursor-pointer">
						{mobileMenu ? <VscChromeClose /> : <VscThreeBars />}
					</button>
				</div>
			</div>
			{/* MOBILE MENU */}
			{mobileMenu && (
				<nav className={`${mobileMenu ? "block" : "hidden"} lg:hidden`}>
					<div className="flex flex-col items-center py-3 text-4xl space-y-2 max-h-[80vh]">
						<a href="">Home</a>
						<a href="">Services</a>
						<a href="">Industries</a>
						<a href="">Locations</a>
						<a href="">Careers</a>
						<a href="">Contact</a>
						<a href="">About</a>
					</div>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
