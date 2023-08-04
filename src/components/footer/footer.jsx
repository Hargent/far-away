// import React from "react";

import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const Footer = ({ hour, onOpen }) => {
	const openHour = 9;
	const closeHour = 16;

	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState(false);
	const [date, setDate] = useState(null);

	useEffect(() => {
		setInterval(function () {
			setDate(new Date().toLocaleTimeString());
		}, 1000);
	}, []);
	useEffect(() => {
		if (hour >= openHour && hour <= closeHour) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
		if (hour > 16) {
			setMessage(
				"Try again tomorrow by 9AM, Your patience will be rewarded."
			);
		}
		if (hour < 9) {
			const fewHours = 9 - hour;
			setMessage(
				`Sorry we are closed ,check back in ${fewHours} hours. Your patience will be rewarded.`
			);
		}
		onOpen(isOpen);
	}, [hour, onOpen, isOpen]);
	return (
		<footer className="footer">
			<p>{date}</p>
			<h3>{isOpen ? "We are currently open now" : message}</h3>
		</footer>
	);
};
Footer.propTypes = {
	hour: PropTypes.number,
	onOpen: PropTypes.func
};
export default Footer;
