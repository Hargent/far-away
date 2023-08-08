// import React from "react";

import PackingItem from "../../util/packingItem/packingItem";
import PropTypes from "prop-types";
import { useState } from "react";

const PackingList = ({
	items,
	handleDeleteItem,
	handleCheck,
	handleClearItems
}) => {
	const [sortBy, setSortBy] = useState("input");
	const handleSort = e => {
		setSortBy(e.target.value);
	};
	let sortedItems;
	switch (sortBy) {
		case "input":
			sortedItems = items;
			break;
		case "description":
			sortedItems = items
				.slice()
				.sort((a, b) => a.description.localeCompare(b.description));
			break;
		case "quantity":
			sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
			break;
		case "packed":
			sortedItems = items
				.slice()
				.sort((a, b) => Number(a.packed) - Number(b.packed));
			break;
		default:
			sortedItems = items;
			break;
	}
	// const newItems = items.sort(item=>item.description)
	return (
		<div className="list">
			<ul>
				{sortedItems.map(item => (
					<PackingItem
						key={item.id}
						item={item}
						handleDeleteItem={handleDeleteItem}
						handleCheck={handleCheck}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={handleSort}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="quantity">Sort by Quantity</option>
					<option value="packed">Sort by Packed Status</option>
				</select>
				{items.length ? (
					<button onClick={handleClearItems}>Clear list</button>
				) : null}
			</div>
		</div>
	);
};
PackingList.propTypes = {
	items: PropTypes.arrayOf(Object),
	handleDeleteItem: PropTypes.func,
	handleCheck: PropTypes.func,
	handleClearItems: PropTypes.func
};

export default PackingList;
