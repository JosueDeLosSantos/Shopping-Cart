import { Button, Paper } from "@mui/material"
import Quantity from "../shop/Quantity"
import PropTypes from "prop-types"
import "./Cart.css"
import { useState } from "react"

function Cartselection({ cart, changeQuantity, clearAll }) {
	const [newCart, setNewCart] = useState(cart)
	const tempCart = Object.values(newCart)
	let items = 0
	let total = 0

	tempCart.forEach((element) => {
		items += element.amount
		total += element.total
	})

	function updateNewCart(e) {
		if (e.type === "change") {
			const { id, value } = e.target
			const tempItem = newCart[id]
			tempItem.amount = Number(value)
			tempItem.total = parseFloat(Number(value) * tempItem.price)
			setNewCart({ ...newCart, [id]: tempItem })
		} else if (e.type === "click") {
			const { id } = e.target.parentNode.parentNode
			let tempObj = newCart
			delete tempObj[id]
			setNewCart(tempObj)
		}
	}

	return (
		<main className="cartMain">
			<h1 className="cartH1 px-4">Shopping cart</h1>

			<Paper className="itemsTopay flex flex-col">
				<Button onClick={clearAll} sx={{ fontWeight: 600, mb: "1rem" }} color="success" variant="contained">
					Checkout
				</Button>
				<div>
					<div className="flex gap-1 ">
						<p className="font-bold checkoutBillText">Items:</p>
						<span className="checkoutBillText">{items}</span>
					</div>
					<div className="flex gap-1 ">
						<p className="font-bold checkoutBillText">Amount to pay:</p>
						<span className="checkoutBillText">{`$${parseFloat(total.toFixed(2))}`}</span>
					</div>
				</div>
			</Paper>
			<div className="flex flex-wrap justify-center max-w-[950px] my-[5vw]">
				{tempCart.map((el) => {
					return (
						<Paper
							elevation={1}
							className="flex flex-col items-center justify-center itemCard p-4 m-4 text-center w-min"
							key={`${el.item.id}`}
						>
							<img
								className="mb-[3vw] object-contain min-w-[80px] h-1/2 mx-auto"
								src={`${el.item.image}`}
							/>
							<p className="mb-[1vw] text-xs md:text-sm font-semibold">
								{el.item.title}
							</p>
							<p className="text-xs text-slate-400">Total price</p>

							<div id={`${el.item.id}`}>
								<Quantity
									amount={el.amount}
									price={el.price}
									icon={false}
									addedClass=""
									quantity={`${el.amount}`}
									id={`${el.item.id}`}
									changeQuantity={changeQuantity}
									updateNewCart={updateNewCart}
								/>
							</div>
						</Paper>
					)
				})}
			</div>
		</main>
	)
}

Cartselection.propTypes = {
	cart: PropTypes.object,
	changeQuantity: PropTypes.func,
	clearAll: PropTypes.func,
}

export default Cartselection
