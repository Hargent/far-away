import PropTypes from "prop-types";

// import piz from "../../assets/pizzas/focaccia.jpg";

// import img from "./";

// import React from "react";

const Pizza = ({ pizzaData }) => {
	// console.log(pizzaData);
	const pizzaImagePath = `/src/assets/${pizzaData.photoName}`;
	// console.log(pizzaImagePath);

	return (
		<div className="pizza">
			<img src={pizzaImagePath} alt={pizzaData.name} />
			<h2>{pizzaData.name}</h2>
			<p>{pizzaData.ingredients}</p>
			<div className="">
				<p>{pizzaData.price}</p>
				<p>{pizzaData.soldOut}</p>
			</div>
		</div>
	);
};

Pizza.propTypes = {
	pizzaData: PropTypes.object
};

export default Pizza;
