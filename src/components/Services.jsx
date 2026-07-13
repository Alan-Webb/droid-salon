import ServicesBG from "../assets/servicesBG.webp";
import Services1 from "../assets/services1.webp";
import Services2 from "../assets/services2.webp";
import Services3 from "../assets/services3.webp";

const services = [
	{
		id: 1,
		title: "Combat Upgrades",
		image: Services1,
		link: "",
		description:
			"Every maintenance service, repair, and upgrade undergoes rigorous quality testing before completion, giving you confidence that your droid is ready to perform at its absolute best.",
	},
	{
		id: 2,
		title: "Ability Tuning",
		image: Services2,
		link: "",
		description:
			"From routine servicing and software updates to full mechanical overhauls, we offer comprehensive maintenance packages that keep your droid operating at peak condition year-round.",
	},
	{
		id: 3,
		title: "Mobile Services",
		image: Services3,
		link: "",
		description:
			"Let us bring our experienced engineers to you. Their technical expertise and meticulous craftsmanship will deliver reliable repairs and precision upgrades every time.",
	},
];

const Services = () => {
	return (
		<div
			style={{backgroundImage: `url("${ServicesBG}")`}}
			className="py-20 bg-cover bg-center">
			<div>
				<h2>Our Services</h2>
			</div>
		</div>
	);
};

export default Services;
