import { useContext, useState } from "react";
import { createContext } from "react";
import { IProductContext } from "../Models/productModels";
import { IProductProviderProps, IProduct, IProductRequest } from "../Models/productModels";

//! - - - - - context - - - - - - 
//custom state
export const useProductContext = () => {
	return useContext(ProductContext);
};

const ProductContext = createContext<IProductContext | null>(null);

//! - - - - - - - - - - PROVIDER - - - - - - - - - - 

export const ProductProvider = ({ children }: IProductProviderProps) => {
	const url:string = "https://win22-webapi.azurewebsites.net/api/products";

	// for product details
	const empty_product: IProduct = {articleNumber:0, name:'', category: '', price: 0, rating:0, imageName:''}
	const [product, setProduct] = useState(empty_product);
	//all products list
	const [products, setProducts] = useState([]);
	//featured products list
	const [featuredProducts, setFeaturedProducts] = useState([]);
	//flashsale product list
	const [flashProducts, setFlashProducts] = useState([]);
	//bottom products
	const [specialProducts, setSpecialProducts] = useState([]);

	//fetches products from API
	const getProducts = async () => {
		const result = await fetch(url);
		setProducts(await result.json());
	};
	//fetches selected number of products from API from take-url
	const getFeaturedProducts = async (take = 0) => {
		const result = await fetch(url + `?take=${take}`);
		setFeaturedProducts(await result.json());
	};

	const getSpecialProducts = async (take = 0) => {
		const result = await fetch(url + `?take=${take}`);
		setSpecialProducts(await result.json());
	};

	const getFlashProducts = async (take = 0) => {
		const result = await fetch(url + `?take=${take}`);
		setFlashProducts(await result.json());
	};

	//fetches product from articleNumber to product details
	const getProduct = async (articleNumber?: string) => {
		const result = await fetch(url + `/${articleNumber}`);
		setProduct(await result.json());
	};

	

	//provides all context to rest of app
	return (
		<ProductContext.Provider
			value={{
				products,
				featuredProducts,
				product,
				getProducts,
				getFeaturedProducts,
				getProduct,
				getSpecialProducts,
				specialProducts,
				flashProducts,
				getFlashProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
