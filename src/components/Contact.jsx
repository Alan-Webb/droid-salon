import {useCallback, useState, useMemo} from "react";
import {
	FiUser,
	FiPhone,
	FiCalendar,
	FiClock,
	FiCheck,
	FiInfo,
	FiX,
} from "react-icons/fi";

const Contact = () => {
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [selectedServices, setSelectedServices] = useState([]);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const services = useMemo(
		() => [
			"Servo Joint Calibration",
			"Neural Processor Upgrade",
			"Armor Plating Repair",
			"Optical Sensor Tuning",
			"Combat Mode Enhancement",
			"Custom LED Installation",
			"Dexterity Upgrade",
			"Firmware Security Update",
			"Cooling System Optimization",
			"Other",
		],
		[],
	);

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

	const toggleService = useCallback((service) => {
		setSelectedServices((prev) =>
			prev.includes(service)
				? prev.filter((s) => s !== service)
				: [...prev, service],
		);
	}, []);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		const validateErrors = validateForm();
		if (Object.keys(validateErrors).length) {
			setErrors(validateErrors);
			return;
		}
		setErrors({});
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
				<form
					typeof="submit"
					onClick={handleSubmit}
					className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-amber-500">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
						{/* Name */}
						<div className="relative group">
							<FiUser className="absolute left-4 top-4 text-yellow-400 text-xl" />
							<input
								type="text"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-yellow-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-yellow-300 text-yellow-700 font-medium"
								autoFocus
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-2 flex items-center gap-2">
									<FiInfo className="inline" />
									{errors.name}
								</p>
							)}
						</div>
						{/* Phone */}
						<div className="relative group">
							<FiPhone className="absolute left-4 top-4 text-yellow-400 text-xl" />
							<input
								type="tel"
								placeholder="Your telephone number"
								value={phone}
								onChange={(e) =>
									setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))
								}
								className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-yellow-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-yellow-300 text-yellow-700 font-medium"
							/>
							{errors.phone && (
								<p className="text-red-500 text-sm mt-2 flex items-center gap-2">
									{errors.phone}
								</p>
							)}
						</div>
						{/* SERVICES */}
						<div className="md:col-span-2">
							<label className="block text-yellow-700 text-lg font-medium mb-3 sm:mb-4">
								Select Service
							</label>
							{/* Services Tags */}
							<div className="flex flex-wrap gap-2 mb-4">
								{selectedServices.map((service) => (
									<div
										key={service}
										className="flex items-center bg-yellow-100 rounded-full px-4 py-2 text-sm text-yellow-700 font-medium transition-all hover:bg-yellow-200">
										<span>{service}</span>
										<button
											type="button"
											onClick={() => toggleService(service)}
											className="ml-2 hover:text-yellow-900">
											<FiX className="w-4 h-4 cursor-pointer" />
										</button>
									</div>
								))}
							</div>
							{/* Services Grid Options */}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
								{services.map((service) => (
									<div
										key={service}
										onClick={() => toggleService(service)}
										className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${selectedServices.includes(service) ? "bg-yellow-500 text-white shadow-lg" : "bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-100"}`}>
										<div
											className={`flex shrink-0 items-center justify-center w-6 h-6 rounded-md ${selectedServices.includes(service) ? "bg-white text-yellow-500" : "bg-yellow-200 text-transparent"}`}>
											<FiCheck className="w-4 h-4" />
										</div>
										<span className="ml-3 text-sm font-medium">{service}</span>
									</div>
								))}
							</div>
							{errors.services && (
								<p className="text-red-400 text-sm mt-2">{errors.services}</p>
							)}
						</div>
						{/* Date */}
						<div className="relative group">
							<FiCalendar className="absolute left-4 top-4 text-yellow-400 text-xl" />
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-yellow-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-yellow-300 text-yellow-700 font-medium"
							/>
							{errors.date && (
								<p className="text-red-500 text-sm mt-2 flex items-center gap-2">
									{errors.date}
								</p>
							)}
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
