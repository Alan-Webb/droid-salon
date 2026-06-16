import logo from "../assets/logo.webp";

const Navbar = () => {
	return (
		<div className="bg-gray-200">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<div>
					{/* LOGO */}
					<div>
						<img
							src={logo}
							alt="Droid Charging Battery"
							className="w-20 h-20 m-1 rounded-full"
						/>
					</div>
				</div>
				{/* CONTACT DETAILS */}
				<div className="flex flex-col">
					<div className="flex justify-end">
						<div>email</div>
						<div>00000000</div>
					</div>
					{/* NAVIGATION */}
					<div className="flex space-x-4">
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
					<button className="px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 cursor-pointer">
						Get A Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
