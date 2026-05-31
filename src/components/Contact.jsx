import {useCallback, useState} from "react";

const Contact = () => {
	const [error, setError] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateForm = useCallback(() => {
		const errors = {};
		if (!name.trim()) errors.name = "Name is required.";
		if (!phone.trim()) errors.phone = "Phone number is required.";
		else if (!/^\d{10}$/.test(phone))
			errors.phone = "Phone number must be exactly 10 digits.";
		if (selectedServices.length === 0)
			errors.services = "Please select at least one service.";
		if (!date) errors.date = "Date is required.";
		if (!time) errors.time = "Time is required.";
		return errors;
	}, [name, phone, selectedServices, date, time]);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		const validateErrors = validateForm();
		if (Object.keys(validateErrors).length) {
			setError(validateErrors);
			return;
		}
		setError({});
		setIsSubmitting(true);
	});

	return (
		<section
			id="contact"
			className="py-20 bg-yellow-50 min-h-screen px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-2xl">
				{/* HEADING & TAGLINE */}
				<div className="text-center mb-12">
					<h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-amber-300 via-rose-300 to-amber-500 bg-clip-text text-transparent">
						Book An Appointment
					</h2>
					<p className="text-yellow-600 text-lg sm:text-xl font-medium">
						Together we can optimize your synthetic friend
					</p>
				</div>
				{/* CONTACT FORM */}
				<form typeof="submit" onClick={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-amber-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"></div>
        </form>
			</div>
		</section>
	);
};

export default Contact;
