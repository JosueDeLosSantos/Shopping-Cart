import { Button } from "@mui/material"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import PropTypes from "prop-types"
import "./All.css"

export default function Quantity(props) {
    const { id, changeQuantity, addedClass, quantity } = props
    
	return (
		<div
			className={`flex flex-col gap-1 items-center justify-center w-full mt-2 ${addedClass}`}
		>
			<div className="flex flex-col gap-1 items-center justify-center w-full mt-2">
				<label className="mr-1 text-sm" htmlFor="quantity">
					Quantity:
				</label>
                <input
                    placeholder={quantity.quantity}
					id={id}
					onChange={changeQuantity}
					className="w-[70%] pl-1 text-sm focus:outline-none border placeholder:text-black placeholder:focus:text-transparent"
					name="quantity"
					type="number"
                    min="1"
				/>
			</div>
			<Button
				className="w-[70%]"
				variant="contained"
				color="error"
				sx={{ fontSize: "0.7rem" }}
				aria-label="remove order"
				startIcon={<RemoveShoppingCartIcon />}
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
