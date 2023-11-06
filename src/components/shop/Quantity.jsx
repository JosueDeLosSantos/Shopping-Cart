import { Button } from "@mui/material"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import PropTypes from "prop-types"
import "./All.css"
import { useState } from "react"

export default function Quantity(props) {
	let { id, changeQuantity, addedClass, quantity, icon, price, amount, updateNewCart } = props
	const [total, useTotal] = useState(amount)
	const [alert, setAlert] = useState("")

	if (updateNewCart === undefined) {
		updateNewCart = () => {
			return null
		}
	}

	function alertTriger(e) {
		const regex = /^\d+$/
		if (!regex.test(e.target.value)) {
			setAlert("Only positive numbers without decimal points are accepted!")
		} else {
			setAlert("")
		}
	}

	function changeTotal(e) {
		useTotal(e.target.value)
	}

	return (
		<div
			className={`flex flex-col gap-1 items-center justify-center w-full mt-2 ${addedClass}`}
		>
			{icon === false && (
				<p className="text-base md:text-2xl font-bold">{`$ ${parseFloat(
					total * price
				).toFixed(2)}`}</p>
			)}
			<div className="flex flex-col gap-1 items-center justify-center w-full mt-2">
				<label className="mr-1 text-sm" htmlFor="quantity">
					Quantity:
				</label>
				<input
					placeholder={quantity}
					id={id}
					onChange={(e) => {
						changeQuantity(e)
						alertTriger(e)
						changeTotal(e)
						updateNewCart(e)
					}}
					className="w-[70%] pl-1 text-sm focus:outline-none border placeholder:text-black placeholder:focus:text-transparent"
					name="quantity"
					type="number"
					min="1"
				/>
				<span className="text-red-700 text-[0.6rem] sm:text-xs">{alert}</span>
			</div>
			{(icon === true && (
				<Button
					className="w-[70%]"
					variant="contained"
					color="error"
					sx={{ fontSize: "0.7rem" }}
					aria-label="remove order"
					startIcon={<RemoveShoppingCartIcon />}
					onClick={changeQuantity}
				>
					Cancel
				</Button>
			)) ||
				(icon === false && (
					<Button
						className="w-[70%]"
						variant="contained"
						color="error"
						sx={{ fontSize: "0.7rem" }}
						aria-label="remove order"
						onClick={(e) => {
							changeQuantity(e)
							updateNewCart(e)
						}}
					>
						Cancel
					</Button>
				))}
		</div>
	)
}

Quantity.propTypes = {
	id: PropTypes.string,
	changeQuantity: PropTypes.func,
	updateNewCart: PropTypes.func,
	quantity: PropTypes.string,
	addedClass: PropTypes.string,
	icon: PropTypes.bool,
	price: PropTypes.number,
	amount: PropTypes.number,
}
