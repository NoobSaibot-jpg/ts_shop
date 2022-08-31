import {
	Route,
	Routes,
	Link
} from "react-router-dom";

import {OnceProduct} from "../OnceProduct/OnceProduct";


export const Header = () => {
	return <header className='bg-opacity-5 fixed top-0 z-10 bg-black w-full h-10'>
			<div className='container'>
				<ul className='flex flex-row justify-around text-white'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/prod'>About</Link></li>
					<li>Categories</li>
				</ul>
			</div>
	</header>
}