
import { Button } from "@mui/material"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import PropTypes from "prop-types"
import "./All.css"
import { useState } from "react"

export default function Quantity(props) {
	const { id, changeQuantity, addedClass, quantity } = props
	const [alert, setAlert] = useState("")

	function alertTriger(e) {
		const regex = /^\d+$/
		if (!regex.test(e.target.value)) {
			setAlert("Only positive numbers without decimal points are accepted!")
		} else {
			setAlert("")
		}
	}

	return (
		<div
			className={`flex flex-col gap-1 items-center justify-center w-full mt-2 ${addedClass}`}
		>
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
					}}
					className="w-[70%] pl-1 text-sm focus:outline-none border placeholder:text-black placeholder:focus:text-transparent"
					name="quantity"
					type="number"
					min="1"
				/>
				<span className="text-red-700 text-[0.6rem] sm:text-xs">{alert}</span>
			</div>
			<Button
				className="w-[70%]"
				variant="contained"
				color="error"
				sx={{ fontSize: "0.7rem" }}
				aria-label="remove order"
				startIcon={<RemoveShoppingCartIcon /* onClick={(e) => {e.stopPropagation()}} */ />}
				onClick={changeQuantity}
			>
				Cancel
			</Button>
		</div>
	)
}

Quantity.propTypes = {
	id: PropTypes.string,
	changeQuantity: PropTypes.func,
	quantity: PropTypes.object,
	addedClass: PropTypes.string,
}
