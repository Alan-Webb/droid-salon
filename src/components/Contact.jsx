import Form from "./Form";

const Contact = () => {
	return (
		<div className="bg-stone-300">
			<div className="flex flex-col md:flex-row max-w-7xl mx-auto">
				{/* LEFT SIDE CONTENT */}
				<div className="px-8 md:px-4 pt-8 mx-6 w-full md:w-1/2 py-20 text-center">
					<h2 className="text-4xl font-bold mb-2 mt-8 text-amber-600 tracking-wider pe-12">
						Contact Us
					</h2>
					<p className="text-2xl pe-12">
						Software updates, battery replacement or a complete overhaul, our
						engineers will give you expert advice on getting your droid back to
						its best. The Droid Salon team is here to help. We pride ourselves
						on delivering a fast, reliable service, honest pricing, and friendly
						customer service you can trust. No matter the issue, we'll take the
						time to explain your options and provide a solution tailored to your
						needs. Upgrade your droid and upgrade your life.
					</p>
				</div>
				{/* RIGHT SIDE FORM */}
				<div className="px-8 md:px-4 w-full md:w-1/2 py-8">
					<h2 className="text-4xl text-center font-bold text-amber-600 my-6">
						Get A Quote
					</h2>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
