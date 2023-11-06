import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react"
import Nav from "./Nav"
import Home from "./components/home/Home"
import Shop from "./components/shop/Shop"
import Cart from "./components/cart/Cart"
import About from "./components/about/About"

const Router = () => {
	const [masterObj, setMasterObj] = useState({})
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [quantity, setQuantity] = useState({})
	const [cart, setCart] = useState([])

	const saveItem = (e) => {
		// Controls mouse click coordinates, this make sure MUI icons respond to mouse clicks correctly
		if (e.target.nodeName === "BUTTON") {
			const { id } = e.target.parentNode
			const newCart = cart
			newCart.push(id)
			setCart(newCart)
			setQuantity({ ...quantity, [id]: { id: `${id}`, quantity: "1" } })
		}
		if (e.target.nodeName === "svg") {
			const { id } = e.target.parentNode.parentNode.parentNode
			const newCart = cart
			newCart.push(id)
			setCart(newCart)
			setQuantity({ ...quantity, [id]: { id: `${id}`, quantity: "1" } })
		}
		if (e.target.nodeName === "path") {
			const { id } = e.target.parentNode.parentNode.parentNode.parentNode
			const newCart = cart
			newCart.push(id)
			setCart(newCart)
			setQuantity({ ...quantity, [id]: { id: `${id}`, quantity: "1" } })
		}
	}

	function updater(id) {
		// update cart
		const newCart = cart.filter((el) => el !== id)
		setCart(newCart)
		//update quantity
		const newQuantity = quantity
		newQuantity[id].quantity = ""
		setQuantity(newQuantity)
	}

	function cartUpdater() {
		const newCart = cart
		cart.forEach((element, i) => {
			if (quantity[element].quantity === "") {
				newCart.splice(i, 1)
			}
		})
		setCart(newCart)
	}

	useEffect(() => {
		console.log([quantity, cart, masterObj])
	})

	const changeQuantity = (e) => {
		if (e.type === "change") {
			let { id, value } = e.target
			const newObject = quantity
			newObject[id].quantity = value
			setQuantity(newObject)
		} else if (e.type === "click") {
			// Controls mouse click coordinates, this make sure MUI icons respond to mouse clicks correctly
			if (e.target.nodeName === "BUTTON") {
				const { id } = e.target.parentNode.parentNode
				updater(id)
				const addToCartBtn = e.target.parentNode.parentNode.childNodes[0]
				const addToCartBtnNewClassName = Array.from(addToCartBtn.classList)
					.filter((el) => el !== "hide")
					.join(" ")
				const editQuantitySection = e.target.parentNode
				editQuantitySection.className += " hide "
				addToCartBtn.className = addToCartBtnNewClassName
			}
			if (e.target.nodeName === "svg") {
				const { id } = e.target.parentNode.parentNode.parentNode.parentNode
				updater(id)
				const addToCartBtn =
					e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0]
				const addToCartBtnNewClassName = Array.from(addToCartBtn.classList)
					.filter((el) => el !== "hide")
					.join(" ")
				const editQuantitySection = e.target.parentNode.parentNode.parentNode
				editQuantitySection.className += " hide "
				addToCartBtn.className = addToCartBtnNewClassName
			}
			if (e.target.nodeName === "path") {
				const { id } = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
				updater(id)
				const addToCartBtn =
					e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0]
				const addToCartBtnNewClassName = Array.from(addToCartBtn.classList)
					.filter((el) => el !== "hide")
					.join(" ")
				const editQuantitySection = e.target.parentNode.parentNode.parentNode.parentNode
				editQuantitySection.className += " hide "
				addToCartBtn.className = addToCartBtnNewClassName
			}
		}
	}

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const mens = await fetch(
					"https://fakestoreapi.com/products/category/men's clothing"
				)
				const men = await mens.json()

				const womens = await fetch(
					"https://fakestoreapi.com/products/category/women's clothing"
				)
				const women = await womens.json()

				const jeweleries = await fetch(
					"https://fakestoreapi.com/products/category/jewelery"
				)
				const jewelery = await jeweleries.json()

				const electronicss = await fetch(
					"https://fakestoreapi.com/products/category/electronics"
				)
				const electronics = await electronicss.json()

				setMasterObj({
					"Men's clothing": men,
					"Women's clothing": women,
					Jewelery: jewelery,
					Electronics: electronics,
				})
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchItems()
		let newObject = {}
		for (let i = 1; i < 21; i++) {
			newObject[i] = { id: `${i}`, quantity: "" }
		}
		setQuantity(newObject)
	}, [])

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Nav cartUpdater={cartUpdater} cart={cart} />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "Home",
					element: <Home />,
				},
				{
					path: "Shop",
					element: (
						<Shop
							quantity={quantity}
							changeQuantity={changeQuantity}
							cart={cart}
							saveItem={saveItem}
							all={masterObj}
							loading={loading}
							error={error}
						/>
					),
				},
				{
					path: "Cart",
					element: (
						<Cart all={masterObj} quantity={quantity} changeQuantity={changeQuantity} />
					),
				},
				{
					path: "About",
					element: <About />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
