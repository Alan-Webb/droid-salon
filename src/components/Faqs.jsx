import FaqItem from "./FaqItem";
import {FaEnvelope, FaPhone} from "react-icons/fa";

const questionsAnswers = [
	{
		id: 1,
		question: "What types of droids do you service?",
		answer:
			"We service almost all classifications, including R-series, Protocol (3PO-series), Pit Droids, Utility Droids, and select Security/Battle models. If it has a central processing unit and a power cell, we can fix it.",
	},
	{
		id: 2,
		question: "Do you offer emergency roadside repair?",
		answer:
			"Yes! Our mobile repair skiffs are available for field calls within sector limits. For stranded travelers, we offer 24/7 emergency dispatch.",
	},
	{
		id: 3,
		question: "What is included in a routine droid tune-up?",
		answer:
			"Our standard tune-up includes joint lubrication, Motivator coil testing, optical sensor recalibration, power cell charging check, chassis rust treatment, and a full diagnostic scan.",
	},
	{
		id: 4,
		question: "Do you supply or install Restraint Bolts?",
		answer:
			"Yes, we sell and install high-grade security restraint bolts to ensure your working droids stay within assigned operational zones.",
	},
	{
		id: 5,
		question: "Can I upgrade my droid's power cell?",
		answer:
			"Definitely. We offer upgrades ranging from high-capacity Fusion Cells to long-lasting batteries, complete with heat-sink modifications to prevent overheating.",
	},
	{
		id: 6,
		question: "Can I install combat mods on a utility droid?",
		answer:
			"We offer legal defense upgrades, such as reinforced plating, shock-prod attachments, and upgraded perimeter sensors. Military-grade combat reprogramming requires proper sector authorization permits.",
	},
];

const Faqs = () => {
	return (
		<div className="bg-stone-300 py-24">
			<h2 className="text-center text-4xl font-bold text-amber-600 tracking-wider mb-8">
				FAQs
			</h2>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* Q&A ACCORDION */}
					<div className="w-full lg:w-3/4 ms-8 space-y-8 px-8 lg:px-0 mb-8">
						{questionsAnswers.map((item) => (
							<FaqItem
								key={item.id}
								question={item.question}
								answer={item.answer}
							/>
						))}
					</div>
					{/* RIGHT SIDE CONTENT */}
					<div className="w-full lg:w-1/4 mt-6 lg:mt-0 lg:pl-8 me-24">
						<div className="bg-amber-500 p-8 rounded-xl mx-4 px-8 lg:px-0 text-center">
							<h3 className="text-xl font-bold mb-2">Still have questions?</h3>
							<p className="text-lg m-4">
								If you didn't find the answer you're looking for, please reach
								out to our support team
							</p>
							<div className="flex flex-col items-center space-y-3">
								<button className="flex items-center space-x-2 w-50 bg-amber-600 text-white px-4 py-2 rounded-xl cursor-pointer">
									<FaEnvelope />
									<span>info@droidsalon.co.uk</span>
								</button>
								<button className="flex items-center space-x-2 w-50 bg-amber-600 text-white px-4 py-2 rounded-xl cursor-pointer">
									<FaPhone />
									<span>02087010993</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
