// import React from "react";

import PropTypes from "prop-types";
import { useState } from "react";

// import React from "react";

const Form = ({ handleAddItem }) => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(description);
		console.log(quantity);
		if (!description) return;

		const newItem = {
			description: description,
			quantity: quantity,
			packed: false,
			id: Date.now()
		};
		handleAddItem(newItem);
		setDescription("");
		setQuantity(1);
	};
	const handleInputChange = e => {
		const value = e.target.value;
		setDescription(value);
	};
	const handleQuantityChange = e => {
		const value = e.target.value;
		setQuantity(+value);
	};
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip</h3>
			<select value={quantity} onChange={handleQuantityChange}>
				{Array.from({ length: 30 }, (_, i) => i + 1).map(
					(num, index) => (
						<option key={index}>{num}</option>
					)
				)}
			</select>
			<input
				type="text"
				placeholder="Item...."
				value={description}
				onChange={handleInputChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};
Form.propTypes = {
	handleAddItem: PropTypes.func
};
export default Form;
