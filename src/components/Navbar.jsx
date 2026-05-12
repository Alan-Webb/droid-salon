import {useState} from "react";
import Logo from "../assets/logo.webp";

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
						<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-10"></div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
