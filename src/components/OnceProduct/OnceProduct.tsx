import axios from "axios";
import {FC, useState, useEffect} from "react";
import {IProduct} from "../../types/types";

interface PropsType{
	id:string
}

export const OnceProduct: FC<PropsType> = ({id}) => {

	const[product, setProduct] = useState<IProduct>()

	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${id}`)
		.then(res=>setProduct(res.data))
	}, []);


	return <div className="bg-white dark:bg-slate-800 dark:text-white">
		<div className="pt-6">
			<div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 h-1/2">
				<div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
					<img src={product?.image}
						 alt={product?.title}
						 className="w-full h-1/2 object-center object-cover"/>
				</div>
			</div>
			<div
				className="max-w-2xl mx-auto pt-5 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
				<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
					<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">{product?.title}</h1>
				</div>
				<div className="mt-4 lg:mt-0 lg:row-span-3">
					<h2 className="sr-only dark:text-white">Product information</h2>
					<p className="tracking-tight text-3xl text-gray-900 dark:text-white">${product?.price}</p>

					<div className="mt-6">
						<h3 className="sr-only">Reviews</h3>
						<div className="flex items-center">
							<div className="flex items-center">
								<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										  clip-rule="evenodd"/>
								</svg>
								<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										  clip-rule="evenodd"/>
								</svg>

								<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										  clip-rule="evenodd"/>
								</svg>
								<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										  clip-rule="evenodd"/>
								</svg>
								<svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										  clip-rule="evenodd"/>
								</svg>
							</div>
							<p className="sr-only">4 out of 5 stars</p>
							<a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{product?.rating?.count}
								reviews</a>
						</div>
					</div>

					<form className="mt-10">

						<button type="submit"
								className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add
							to bag
						</button>
					</form>
				</div>

				<div
					className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

					<div>
						<h3 className="sr-only">Description</h3>

						<div className="space-y-6">
							<p className="text-base dark:text-white text-gray-900">{product?.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}