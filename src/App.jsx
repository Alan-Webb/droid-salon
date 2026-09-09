import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import Faqs from "./components/Faqs";

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
			<Locations />
			<Faqs />
		</>
	);
};

export default App;
