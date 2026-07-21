import person1 from "../assets/test-user-1.webp";
import person2 from "../assets/test-user-2.webp";
import person3 from "../assets/test-user-3.webp";
import person4 from "../assets/test-user-4.webp";
import person5 from "../assets/test-user-5.webp";
import person6 from "../assets/test-user-6.webp";

const reviews = [
	{
		id: 1,
		name: "Sarah Mitchell",
		position: "Marketing Manager",
		feedback:
			"Droid Salon completely transformed my phone. The screen replacement was flawless, and it looked brand new again. Friendly staff and fast turnaround!",
		image: person1,
	},
	{
		id: 2,
		name: "Jamie Carter",
		position: "Software Engineer",
		feedback:
			"Excellent service from start to finish. They diagnosed the issue quickly and had my tablet repaired the same day. Highly recommended.",
		image: person2,
	},
	{
		id: 3,
		name: "Priya Grant",
		position: "Business Owner",
		feedback:
			"I was impressed with the professionalism and transparent pricing. No hidden fees, just honest advice and quality repairs.",
		image: person3,
	},
	{
		id: 4,
		name: "Milla Robinson",
		position: "Photographer",
		feedback:
			"My camera lens on my phone was cracked, and Droid Salon fixed it perfectly. Photos are crystal clear again.",
		image: person4,
	},
	{
		id: 5,
		name: "Emily Johnson",
		position: "Teacher",
		feedback:
			"Fantastic customer service. They explained every step of the repair process and completed everything ahead of schedule.",
		image: person5,
	},
	{
		id: 6,
		name: "Dani Lewis",
		position: "Graphic Designer",
		feedback:
			"My laptop was running incredibly slow. After a visit to Droid Salon, it feels faster than when I first bought it.",
		image: person6,
	},
];

const Testimonials = () => {
	return (
		<div className="bg-stone-300 px-4 py-12">
			<h1 className="text-center text-4xl font-bold text-amber-500 tracking-wider py-12">
				What People Are Saying
			</h1>
			{/* TESTIMONIALS CARD */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-amber-400/10 border border-amber-600">
						<div className="flex items-center mb-4">
							{/* Image */}
							<img
								src={review.image}
								alt={review.name}
								className="w-12 h-12 rounded-full mr-4"
								loading="lazy"
							/>
							{/* Name + Title + Feedback */}
							<div>
								<h2 className="text-lg font-semibold">{review.name}</h2>
								<p className="text-sm font-light">{review.position}</p>
							</div>
						</div>
						<p className="leading-relaxed">{review.feedback}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
