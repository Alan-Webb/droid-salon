import logo from "../assets/logo.webp";

const Navbar = () => {
	return (
		<div>
			<div>
				{/* LOGO */}
				<div>
					<img src={logo} alt="Droid Charging Battery" className="w-32 h-32" />
				</div>
				{/* CONTACT DETAILS */}
				<div>
					<div>
						<div>email</div>
						<div>00000000</div>
					</div>
				</div>
				{/* NAVIGATION */}
				<div>
					<a href="#">Home</a>
					<a href="#">Home</a>
					<a href="#">Home</a>
					<a href="#">Home</a>
					<a href="#">Home</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
