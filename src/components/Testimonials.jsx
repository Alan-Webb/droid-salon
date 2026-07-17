const reviews = [
	{
		id: 1,
		name: "Sarah Mitchell",
		position: "Marketing Manager",
		feedback:
			"Droid Salon completely transformed my phone. The screen replacement was flawless, and it looked brand new again. Friendly staff and fast turnaround!",
	},
	{
		id: 2,
		name: "James Carter",
		position: "Software Engineer",
		feedback:
			"Excellent service from start to finish. They diagnosed the issue quickly and had my tablet repaired the same day. Highly recommended.",
	},
	{
		id: 3,
		name: "Priya Patel",
		position: "Business Owner",
		feedback:
			"I was impressed with the professionalism and transparent pricing. No hidden fees, just honest advice and quality repairs.",
	},
	{
		id: 4,
		name: "Michael Robinson",
		position: "Photographer",
		feedback:
			"My camera lens on my phone was cracked, and Droid Salon fixed it perfectly. Photos are crystal clear again.",
	},
	{
		id: 5,
		name: "Emily Johnson",
		position: "Teacher",
		feedback:
			"Fantastic customer service. They explained every step of the repair process and completed everything ahead of schedule.",
	},
	{
		id: 6,
		name: "Daniel Lewis",
		position: "Graphic Designer",
		feedback:
			"My laptop was running incredibly slow. After a visit to Droid Salon, it feels faster than when I first bought it.",
	},
	{
		id: 7,
		name: "Olivia Turner",
		position: "Nurse",
		feedback:
			"Quick battery replacement and excellent communication throughout. I'll definitely return if I need another repair.",
	},
	{
		id: 8,
		name: "Benjamin Hall",
		position: "Financial Analyst",
		feedback:
			"Professional, efficient, and affordable. They recovered important files from my damaged phone that I thought were gone forever.",
	},
	{
		id: 9,
		name: "Chloe Evans",
		position: "University Student",
		feedback:
			"The team was incredibly helpful and fixed my charging port within a couple of hours. Great experience overall.",
	},
];

const Testimonials = () => {
	return (
		<div>
			<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
				What People Are Saying
			</h1>
			<div className="h-1 w-20 bg-white mb-10"></div>
			{/* TESTIMONIALS CARD */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{reviews.map(review) => (
					<div
						key={review.id}
						className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
						<div className="flex items-center mb-4">
							{/* Name & Title */}
							<div>
								<h2 className="text-lg font-semibold">{review.name}</h2>
								<p className="text-sm font-light">{review.position}</p>
							</div>
						</div>
						{/* Feedback */}
						<p className="leading-relaxed">{review.feedback}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
