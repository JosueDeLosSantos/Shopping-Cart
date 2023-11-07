import { Button, Paper, Rating } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PropTypes from "prop-types"
import "./All.css"
import Quantity from "./Quantity"
import hideButton from "./hideButton"

export default function All(props) {
	const { all, loading, error, saveItem, cart, changeQuantity, quantity } = props
	const categories = Object.keys(all)

	if (error) {
		return <h1>No data found</h1>
	}
	if (loading) {
		return <h1>Loading...</h1>
	} else {
		return (
			<div>
				{categories.map((category) => {
					return (
						<div className="px-4 py-4" key={category}>
							<h2 className="text-center text-xl md:text-3xl font-bold">
								{category}
							</h2>
							<div className="flex flex-wrap justify-center max-w-[950px] my-[5vw]">
								{all[category].map((el) => {
									return (
										<Paper
											elevation={1}
											className="flex flex-col items-center justify-center itemCard p-4 m-4 text-center w-min"
											key={`${el.id}`}
										>
											<img
												className="mb-[3vw] object-contain min-w-[80px] h-1/2 mx-auto"
												src={`${el.image}`}
											/>
											<p className="mb-[1vw] text-xs md:text-sm font-semibold">
												{el.title}
											</p>
											<p className="text-xs text-slate-400">Price per unit</p>
											<p className="text-base md:text-2xl font-bold">{`$ ${el.price}`}</p>
											<div className="flex content-center">
												<Rating
													defaultValue={el.rating.rate}
													precision={el.rating.rate}
													size="small"
													readOnly
												/>
												<span className="text-xs ml-1 text-slate-400">{`(${el.rating.count})`}</span>
											</div>
											<div id={`${el.id}`}>
												{cart.find((v) => v == el.id) ? (
													<>
														<Button
															onClick={(e) => {
																saveItem(e)
																hideButton(e)
															}}
															className="addToCartBtn hide"
															color="success"
															variant="contained"
															startIcon={
																<ShoppingCartIcon
																	onClick={(e) => {
																		saveItem(e)
																		hideButton(e)
																		//e.stopPropagation()
																	}}
																	className="addToCartIcon"
																/>
															}
														>
															ADD TO CART
														</Button>
														<Quantity
															icon={true}
															addedClass=""
															quantity={quantity[el.id].quantity}
															id={`${el.id}`}
															changeQuantity={changeQuantity}
														/>
													</>
												) : (
													<>
														<Button
															onClick={(e) => {
																saveItem(e)
																hideButton(e)
															}}
															className="addToCartBtn"
															color="success"
															variant="contained"
															startIcon={
																<ShoppingCartIcon
																	onClick={(e) => {
																		saveItem(e)
																		hideButton(e)
																		e.stopPropagation()
																	}}
																	className="addToCartIcon"
																/>
															}
														>
															ADD TO CART
														</Button>
														<Quantity
															icon={true}
															addedClass="hide"
															quantity={quantity[el.id].quantity}
															id={`${el.id}`}
															changeQuantity={changeQuantity}
														/>
													</>
												)}
											</div>
										</Paper>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

All.propTypes = {
	all: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	saveItem: PropTypes.func,
	cart: PropTypes.array,
	changeQuantity: PropTypes.func,
	quantity: PropTypes.object,
}
