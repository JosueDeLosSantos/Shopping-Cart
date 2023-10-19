import { useState, useEffect } from "react"

/* 
[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
            ]
 */

const Cart = () => {
	const [men, setMen] = useState([])
    const [women, setWomen] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [electronics, setElectronics] = useState([])
    
	useEffect(() => {
		const fetchItems = async () => {
			fetch("https://fakestoreapi.com/products/category/men's clothing")
				.then((res) => res.json())
				.then((res) => setMen(res))

			fetch("https://fakestoreapi.com/products/category/women's clothing")
				.then((res) => res.json())
                .then((res) => setWomen(res))
			fetch("https://fakestoreapi.com/products/category/jewelery")
				.then((res) => res.json())
                .then((res) => setJewelery(res))
			fetch("https://fakestoreapi.com/products/category/electronics")
				.then((res) => res.json())
                .then((res) => setElectronics(res))
		}
		fetchItems()
	}, [])

	console.log([men, women, jewelery, electronics])

	return (
		<main>
			<h1>No items selected!</h1>
		</main>
	)
}

export default Cart
