import { Paper } from "@mui/material"
import Quantity from "../shop/Quantity"
import PropTypes from "prop-types"
import "./Cart.css"
import { useEffect } from "react"

function Cartselection({ cart, changeQuantity }) {
	let items = 0
	let total = 0

	cart.forEach((element) => {
		items += element.amount
		total += element.total
		console.log(element.item)
	})

	useEffect(() => {
		console.log(cart)
	},[cart])

	return (
		<main className="cartMain">
			<h1 className="cartH1 ">Shopping cart</h1>

			<div className="itemsTopay">
				<div className="flex gap-1">
					<p className="font-bold">Items:</p>
					<span>{items}</span>
				</div>
				<div className="flex gap-1">
					<p className="font-bold">Mount to pay:</p>
					<span>{`$${total}`}</span>
				</div>
			</div>
			<div className="flex flex-wrap justify-center max-w-[950px] my-[5vw]">
				{cart.map((el) => {
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
							<p className="text-base md:text-2xl font-bold">{`$ ${el.total}`}</p>
							<div id={`${el.item.id}`}>
								<Quantity
									addedClass=""
									quantity={el.amount}
									id={`${el.item.id}`}
									changeQuantity={changeQuantity}
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
	cart: PropTypes.array,
	changeQuantity: PropTypes.func,
}

export default Cartselection
