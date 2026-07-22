import IndustriesBG from "../assets/industriesBG.webp";
import Industries1 from "../assets/industries1.webp";
import Industries2 from "../assets/industries2.webp";
import Industries3 from "../assets/industries3.webp";
import {FaArrowRight} from "react-icons/fa";

const industries = [
	{
		id: 1,
		title: "Private",
		image: Industries1,
		link: "",
		description:
			"Reliable software and hardware solutions tailored for private droid owners, delivering exceptional service, safety, and attention to detail.",
	},
	{
		id: 2,
		title: "Commercial",
		image: Industries2,
		link: "",
		description:
			"Comprehensive support for commercial droid operations, helping droids and operators maintain efficiency, compliance, and performance",
	},
	{
		id: 3,
		title: "Military",
		image: Industries3,
		link: "",
		description:
			"Trusted maintenance and engineering services for defense droids, meeting rigorous operational standards with precision and reliability",
	},
];

const Industries = () => {
	return (
		<div
			style={{backgroundImage: `url("${IndustriesBG}")`}}
			className="py-20 bg-cover bg-center">
			<div className="max-w-7xl mx-auto">
				{/* Heading */}
				<h2 className="text-center text-4xl font-bold text-amber-500 tracking-wider">
					Industries We Serve
				</h2>
				{/* CARDS */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8 lg:px-0">
					{industries.map((industry) => (
						<div
							key={industry.id}
							className="bg-stone-200 p-6 rounded-lg shadow-md text-center hover:scale-105 transition duration-300">
							<img
								src={industry.image}
								alt={industry.title}
								className="w-full h-48 object-cover rounded-lg mb-4"
							/>
							<div className="flex flex-col items-center">
								<h3 className="text-xl uppercase tracking-wide font-bold mb-2">
									{industry.title}
								</h3>
								<p className="text-md">{industry.description}</p>
								<a
									href=""
									className="flex items-center space-x-2 bg-amber-500 rounded-xl px-4 py-1 mt-2">
									<span className="font-bold">More</span>
									<FaArrowRight />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Industries;
