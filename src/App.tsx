import React, {useState} from 'react';
import {Cart} from "./components/Cart/Cart";
import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import {OnceProduct} from "./components/OnceProduct/OnceProduct";
import {Route, Routes} from "react-router-dom";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = ()=>{
		setIsOpen(false)
	}
	const handleClick =()=>{
		setIsOpen(true)
	}
	return (
		<div className="App dark:bg-slate-800 h-full py-8">
			<Header habdleClick={handleClick}/>
			<Cart isOpen={isOpen} handleClose={handleClose}/>
			<Routes>
				<Route path='/' element={<Layout/>}/>
				<Route path='/prod/:id' element={<OnceProduct id='5'/>}/>
			</Routes>
		</div>
	);
}

export default App;
