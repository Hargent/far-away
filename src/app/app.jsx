import Form from "../components/form/form";
import Header from "../components/header/header";
import PackingList from "../components/packingList/packingList";
import Stats from "../components/stats/stats";
import { useState } from "react";

const App = () => {
	const [items, setItems] = useState([]);
	const handleAddItem = item => {
		setItems(items => [...items, item]);
	};
	const handleDeleteItem = id => {
		setItems(items => items.filter(item => item.id !== +id));
	};

	const handleCheck = id => {
		setItems(items =>
			items.map(item =>
				item.id === +id ? { ...item, packed: !item.packed } : item
			)
		);
	};
	const handleClearItems = () => {
		const confirmed = window.confirm(
			"Are you sure you want to delete all Items ? "
		);
		confirmed && setItems([]);
	};
	return (
		<div className="app">
			<Header />
			<Form handleAddItem={handleAddItem} />
			<PackingList
				items={items}
				handleDeleteItem={handleDeleteItem}
				handleCheck={handleCheck}
				handleClearItems={handleClearItems}
			/>
			<Stats items={items} />
		</div>
	);
};

export default App;
