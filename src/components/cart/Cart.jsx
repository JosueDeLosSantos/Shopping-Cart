import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Cart = (props) => {
	const { all, quantity, changeQuantity } = props
	const [cart, setCart] = useState([])

	

	useEffect(() => {
		function itemFinder(id) {
            const keys = Object.keys(all)
            let answer = null
            keys.forEach((key) => {
                all[key].forEach((el) => {
                    if (`${el.id}` === id) {
                        console.log(el)
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
				const newCart = cart
				newCart.push({
					item: item,
					amount: Number(amount),
					price: item.price,
					total: item.price * Number(amount),
				})
				setCart(newCart)
			}
		}
		console.log(cart)
	}, [quantity, all, cart])

	return (
		<main>
			<h1>No items selected!</h1>
		</main>
	)
}

export default Cart

Cart.propTypes = {
	all: PropTypes.object,
	changeQuantity: PropTypes.func,
	quantity: PropTypes.object,
}
