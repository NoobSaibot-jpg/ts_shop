import {useEffect, useState} from "react";
import axios from "axios";
import {IProduct} from "../../types/types";
import ProductCard from "../ProductCard";

export const Layout = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
			.then(res => setProducts(res.data))
	}, []);


	return <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-10">
		{products.map(i=>{
			return <ProductCard key={i.id} title={i.title} price={i.price} image={i.image} category={i.category}/>
		})}
	</div>
}