import { useState, useEffect } from "react"
import { NavLink, Outlet, Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import {
	Box,
	Drawer,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
	Badge,
} from "@mui/material"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import HomeIcon from "@mui/icons-material/Home"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import InfoIcon from "@mui/icons-material/Info"
import PropTypes from "prop-types"

const Nav = ({ cart, cartUpdater }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [amount, setAmount] = useState(cart.length)
	const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" })
	const isBigScreen = useMediaQuery({ query: "(min-width: 601px)" })

	const toggleDrawer = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return
		}

		setIsOpen(open)
	}

	const params = ["Home", "Shop", "Cart", "About"]

	useEffect(() => {
		setAmount(cart.length)
	}, [cart.length])

	function pageSelection(e) {
		if (e.target.parentNode.dataset.cart) {
			setAmount(0)
		} else {
			setAmount(cart.length)
		}
	}

	const list = () => (
		<Box
			sx={{ width: 200 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{params.map((text) => (
					<ListItem key={text} disablePadding>
						{text === "Cart" ? (
							<NavLink
								data-cart
								onClick={(e) => {
									pageSelection(e)
									cartUpdater()
								}}
								to={`${text}`}
							>
								<ListItemButton data-cart>
									<ListItemIcon data-cart>
										<Badge data-cart badgeContent={amount} color="primary">
											<ShoppingCartIcon data-cart />
										</Badge>
									</ListItemIcon>
									<ListItemText data-cart primary={text} />
								</ListItemButton>
							</NavLink>
						) : (
							<NavLink
								onClick={(e) => {
									pageSelection(e)
									cartUpdater()
								}}
								to={`${text}`}
							>
								<ListItemButton>
									<ListItemIcon>
										{text === "Home" ? (
											<HomeIcon />
										) : text === "Shop" ? (
											<ShoppingBagIcon />
										) : (
											<InfoIcon />
										)}
									</ListItemIcon>

									<ListItemText primary={text} />
								</ListItemButton>
							</NavLink>
						)}
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<main>
			<header className="mainHeader sticky top-0">
				<nav className="mainNav">
					<Link to="/Home">
						<div className="logoFont text-xl">All Shop</div>
					</Link>

					{isBigScreen && (
						<ul>
							{params.map((param) => {
								return (
									<li key={param}>
										{param === "Cart" ? (
											<NavLink
												data-cart
												onClick={(e) => {
													pageSelection(e)
													cartUpdater()
												}}
												to={`${param}`}
											>
												<Button
													data-cart
													sx={{ color: "white", mr: 1 }}
													startIcon={
														<Badge
															data-cart
															badgeContent={amount}
															color="primary"
														>
															<ShoppingCartIcon
																data-cart
																sx={{ mb: 0.5 }}
															/>
														</Badge>
													}
												>
													{param}
												</Button>
											</NavLink>
										) : (
											<NavLink
												onClick={(e) => {
													pageSelection(e)
													cartUpdater()
												}}
												to={`${param}`}
											>
												<Button
													sx={{ color: "white", mr: 1 }}
													startIcon={
														param === "Home" ? (
															<HomeIcon sx={{ mb: 0.5 }} />
														) : param === "Shop" ? (
															<ShoppingBagIcon sx={{ mb: 0.5 }} />
														) : (
															<InfoIcon sx={{ mb: 0.5 }} />
														)
													}
												>
													{param}
												</Button>
											</NavLink>
										)}
									</li>
								)
							})}
						</ul>
					)}
					{isSmallScreen && (
						<>
							<IconButton onClick={toggleDrawer(true)} aria-label="menu">
								<Badge data-cart badgeContent={amount} color="primary">
									<MenuOpenIcon sx={{ color: "white" }} />
								</Badge>
							</IconButton>
							<Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
								{list()}
							</Drawer>
						</>
					)}
				</nav>
			</header>
			<Outlet />
		</main>
	)
}

export default Nav

Nav.propTypes = {
	cart: PropTypes.array,
	cartUpdater: PropTypes.func,
}
