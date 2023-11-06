import { Button } from "@mui/material"
import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
	return (
		<main className="mainBackground">
			<div className="pt-20 mx-auto w-[50%] text-center">
				<h1 className="text-4xl font-bold pb-4 logoFont">All Shop</h1>
				<p className="pb-20 sm:text-xl">
					We are committed to providing you with the best shopping experience possible.
					Our goal is to make sure you find everything you need and more.
				</p>
				<Link to="/Shop">
					<Button
						sx={{ fontWeight: 600, py: 1, px: 3, borderRadius: 30 }}
						variant="contained"
					>
						SHOP NOW
					</Button>
				</Link>
			</div>
		</main>
	)
}

export default Home
