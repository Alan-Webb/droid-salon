import logo from "../assets/logo.webp";

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
				<div></div>
				{/* COLUMN 3 CONTENT */}
				<div></div>
				{/* COLUMN 4 CONTENT */}
				<div></div>
			</div>
		</div>
	);
};

export default Footer;
