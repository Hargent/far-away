import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import OpenContext from "../context/openContext";
import pizzaData from "../data/data";
import { useState } from "react";
const App = () => {
	// console.log(pizzaData);
	const hour = new Date().getHours();
	const [openShop, setOpenShop] = useState(false);

	return (
		<OpenContext.Provider value={openShop}>
			<div className="app">
				<Header />
				<Menu pizzaData={pizzaData} />
				<Footer
					hour={hour}
					onOpen={isOpen => {
						setOpenShop(isOpen);
					}}
				/>
			</div>
		</OpenContext.Provider>
	);
};

export default App;
