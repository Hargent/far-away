import PropTypes from "prop-types";

// import React from "react";

const PackingItem = ({ item, handleDeleteItem, handleCheck }) => {
	// console.log(item.id, item.description, item.quantity, item.packed);
	return (
		<li id={item.id} className="item">
			<input
				type="checkbox"
				value={item.packed}
				onClick={() => handleCheck(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				<p>{item.quantity}</p>
				<p>{item.description}</p>
			</span>
			<button
				onClick={() => {
					handleDeleteItem(item.id);
				}}>
				❌
			</button>
		</li>
	);
};

PackingItem.propTypes = {
	item: PropTypes.object,
	id: PropTypes.number,
	description: PropTypes.string,
	quantity: PropTypes.number,
	packed: PropTypes.bool,
	handleDeleteItem: PropTypes.func,
	handleCheck: PropTypes.func
};

export default PackingItem;
