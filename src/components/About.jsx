import {
	MdMiscellaneousServices,
	MdSensors,
	MdOutlineRecordVoiceOver,
	MdOutlineSecurity,
} from "react-icons/md";
import aboutImg from "../assets/aboutImg.webp";

const features = [
	{
		icon: <MdMiscellaneousServices className="w-8 h-8" />,
		title: "Performance Upgrades",
		desc: "Faster processors, expanded memory, enhanced mobility systems, and improved response times",
	},
	{
		icon: <MdSensors className="w-8 h-8" />,
		title: "Sensor Calibration",
		desc: "Fine-tuning visual, audio, navigation, and proximity sensors for peak accuracy",
	},
	{
		icon: <MdOutlineRecordVoiceOver className="w-8 h-8" />,
		title: "Voice & Personality Tuning",
		desc: "Refine speech patterns, install new voice packs, or recalibrate personality modules",
	},
	{
		icon: <MdOutlineSecurity className="w-8 h-8" />,
		title: "Software Updates & Security Patching",
		desc: "Firmware upgrades, bug fixes, firewall protection, and malware removal",
	},
];

const About = () => {
	return <section id="about">About</section>;
};

export default About;
