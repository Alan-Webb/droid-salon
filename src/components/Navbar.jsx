import {useState} from "react";
import Logo from "../assets/logo.webp";
import {Link} from "react-scroll";
import {FaInfoCircle} from "react-icons/fa";
import {MdMiscellaneousServices, MdPower} from "react-icons/md";

const Navbar = () => {
	const [navShadow, setNavShadow] = useState(false);

	return (
		<div className="fixed w-full z-50 transition-all duration-500 ">
			{/* BG */}
			<div
				className={`bg-stone-300/50 backdrop-blur-2xl ${navShadow ? "shadow-xl" : "shadow-md"}`}>
				<nav className="border-b border-red-400/20">
					<div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">
						{/* LOGO */}
						<div className="flex items-center space-x-2">
							<img src={Logo} className="w-12 h-12" />
							<span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent tracking-tighter cursor-pointer">
								Droid Salon
							</span>
						</div>
						{/* DESKTOP MENU */}
						<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-10">
							{/* Home */}
							<Link
								to="home"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<MdPower className="mr-1 lg:mr-2" />
								Home
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
							{/* About */}
							<Link
								to="about"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<FaInfoCircle className="mr-1 lg:mr-2" />
								About
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
							{/* Services */}
							<Link
								to="services"
								spy={true}
								smooth={true}
								className="flex items-center cursor-pointer text-gray-800 hover:text-pink-700 transition-all duration-300 relative group font-medium text-base lg:text-lg">
								<MdMiscellaneousServices className="mr-1 lg:mr-2" />
								Services
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
