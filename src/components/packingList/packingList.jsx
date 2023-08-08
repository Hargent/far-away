// import React from "react";

import PackingItem from "../../util/packingItem/packingItem";
import PropTypes from "prop-types";
import { useState } from "react";

const PackingList = ({ items, handleDeleteItem, handleCheck }) => {
	const [sortBy, setSortBy] = useState("input");
	const handleSort = e => {
		setSortBy(e.target.value);
	};
	let sortedItems;
	switch (sortBy) {
		case "input":
	}
	// const newItems = items.sort(item=>item.description)
	return (
		<div className="list">
			<ul>
				{items.map(item => (
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
					<option value="stats">Sort by statistics</option>
					<option value="packed">Sort by Packed Status</option>
				</select>
				<button>Clear list</button>
			</div>
		</div>
	);
};
PackingList.propTypes = {
	items: PropTypes.arrayOf(Object),
	handleDeleteItem: PropTypes.func,
	handleCheck: PropTypes.func
};

export default PackingList;
