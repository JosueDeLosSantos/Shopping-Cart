import { Button, Paper, Rating } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PropTypes from "prop-types"
import "./All.css"

export default function Category({ category, loading, error, categoryName }) {
	if (error) {
		return <h1>No data found</h1>
	}
	if (loading) {
		return <h1>Loading...</h1>
	} else {
		return (
			<div className="px-4 py-4">
				<h2 className="text-center text-xl md:text-3xl font-bold">{categoryName}</h2>
				<div className="flex flex-wrap justify-center max-w-[950px] my-[5vw]">
					{category.map((el) => {
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
								<Button
									className="addToCartBtn"
									color="success"
									variant="contained"
									startIcon={<ShoppingCartIcon className="addToCartIcon" />}
								>
									ADD TO CART
								</Button>
							</Paper>
						)
					})}
				</div>
			</div>
		)
	}
}

Category.propTypes = {
    category: PropTypes.object,
    categoryName: PropTypes.string,
	loading: PropTypes.bool,
	error: PropTypes.bool,
}
