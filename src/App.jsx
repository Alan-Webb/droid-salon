import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Industries from "./components/Industries";
import Contact from "./components/Contact";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<WhyChooseUs />
			<Services />
			<Testimonials />
			<Industries />
			<Contact />
		</>
	);
};

export default App;
