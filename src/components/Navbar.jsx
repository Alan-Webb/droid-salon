import {useState} from "react";
import {FaHome, FaUtensils, FaListAlt, FaQuoteLeft} from "react-icons/fa";
import {BiSolidBowlHot} from "react-icons/bi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{icon: <FaHome />, text: "Home"},
		{icon: <FaUtensils />, text: "Services"},
		{icon: <FaListAlt />, text: "Menu"},
		{icon: <FaQuoteLeft />, text: "Reviews"},
	];

	return (
		<nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-yellow-400 to-orange-400 shadow-lg rounded-full px-3 sm:px-4 md:px-5 lg:px-8 py-2 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md border border-white/20 z-50">
			{/* LOGO */}
			<div className="flex items-center space-x-2">
				<div className="p-2 bg-white/60 rounded-full backdrop-blur-sm">
					<BiSolidBowlHot className="text-2xl text-black animate-pulse" />
				</div>
				<h1 className="text-xl lg:text-3xl font-semibold">The Shire</h1>
			</div>
		</nav>
	);
};

export default Navbar;
