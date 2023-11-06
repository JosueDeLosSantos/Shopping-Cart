// import { useState, useEffect } from "react"
import { Button, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Cartselection from "./Cartselection"

const Cart = (props) => {
	const { all, quantity, changeQuantity } = props
	const cart = {}

	function itemFinder(id) {
		const keys = Object.keys(all)
		let answer = null
		keys.forEach((key) => {
			all[key].forEach((el) => {
				if (`${el.id}` === id) {
					// console.log(el)
					answer = el
				}
			})
		})
		return answer
	}

	const regex = /^\d+$/
	for (let key in quantity) {
		if (regex.test(quantity[key].quantity)) {
			//console.log(quantity[key].id)
			const item = itemFinder(quantity[key].id)
			const amount = quantity[key].quantity

			cart[item.id] = {
				item: item,
				amount: Number(amount),
				price: item.price,
				total: item.price * Number(amount),
			}
		}
	}

	//console.log(cart)

	const tempCart = Object.keys(cart)

	return (
		(tempCart.length < 1 && (
			<main>
				<Paper
					sx={{ width: "80%", p: 5, ml: "auto", mr: "auto", mt: 10, textAlign: "center" }}
				>
					<h1 className="text-lg md:text-2xl">
						Your cart is empty! Click below to start shopping.
					</h1>
					<Link to="/Shop">
						<Button
							sx={{ mt: 5, fontWeight: 600, fontSize: "0.8rem" }}
							variant="contained"
						>
							SHOP NOW
						</Button>
					</Link>
				</Paper>
			</main>
		)) ||
		(tempCart.length > 0 && <Cartselection changeQuantity={changeQuantity} cart={cart} />)
	)
}

export default Cart

Cart.propTypes = {
	all: PropTypes.object,
	changeQuantity: PropTypes.func,
	quantity: PropTypes.object,
}
