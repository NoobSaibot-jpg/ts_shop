import React from 'react';
import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import {OnceProduct} from "./components/OnceProduct/OnceProduct";
import {Route, Routes} from "react-router-dom";

function App() {
	return (
		<div className="App dark:bg-slate-800 h-full py-8">
			<Header/>
			<Routes>
				<Route path='/' element={<Layout/>}/>
				<Route path='/prod/:id' element={<OnceProduct id='5'/>}/>
			</Routes>
		</div>
	);
}

export default App;
