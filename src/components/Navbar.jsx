import logo from "../assets/logo.webp";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="bg-stone-300 border-b border-amber-600">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<div>
					{/* LOGO */}
					<div>
						<img
							src={logo}
							alt="Droid Charging"
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
							<span>info@droidmedic.com</span>
						</div>
						<div className="flex space-x-2 items-center ml-8">
							<BsFillTelephoneFill className="text-amber-600" />
							<span>0121 184 5143</span>
						</div>
					</div>
					{/* Links */}
					<div className="flex space-x-4 border-t border-amber-500 py-2">
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Home</a>
						<a href="#">Home</a>
					</div>
				</div>
				{/* BUTTON */}
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
