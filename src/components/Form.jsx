const Form = () => {
	return (
		<form className="grid grid-cols-1 md:grid-cols-2 space-y-2">
			<input type="text" name="name" placeholder="Enter your full name" />
			<input type="email" name="email" placeholder="Enter your email address" />
			<input type="tel" name="tel" placeholder="Enter your contact number" />
			<input type="text" name="subject" placeholder="Enter query type" />
			<textarea placeholder="message"></textarea>
		</form>
	);
};

export default Form;
