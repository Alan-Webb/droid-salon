import {useState} from "react";
import {FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";

const FaqItem = ({question, answer}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col max-w-2xl me-6">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex justify-between px-2 items-center">
				<span className="text-xl text-left">{question}</span>
				{isOpen ? (
					<FaChevronCircleUp className="text-xl text-amber-700 m-2 cursor-pointer" />
				) : (
					<FaChevronCircleDown className="text-xl text-amber-700 m-2 cursor-pointer" />
				)}
			</button>
			{isOpen && <p className="pl-2">{answer}</p>}
		</div>
	);
};

export default FaqItem;
