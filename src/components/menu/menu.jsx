import OpenContext from "./../../context/openContext";
import Pizza from "./../pizza/pizza";
import PropTypes from "prop-types";
import { useContext } from "react";

// import React from "react";

const Menu = ({ pizzaData }) => {
	const openContext = useContext(OpenContext);
	return (
		<div>
			<h2>Our menu</h2>

			{openContext
				? pizzaData.map((pizza, index) => (
						<Pizza key={index} pizzaData={pizza} />
				  ))
				: "Sorry we are not opened yet, Check back later"}
		</div>
	);
};

Menu.propTypes = {
	pizzaData: PropTypes.arrayOf(Object)
};

export default Menu;
