import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
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
} from "@mui/material"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import HomeIcon from "@mui/icons-material/Home"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import InfoIcon from "@mui/icons-material/Info"

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" })
	const isBigScreen = useMediaQuery({ query: "(min-width: 601px)" })

	function onClick(e) {
		const children = e.target.parentNode.parentNode.children
		if (children.length >= 4) {
			for (let i = 0; i <= 3; i++) {
				if (children[i] === e.target.parentNode) {
					children[i].classList.value = "underline"
				} else {
					children[i].classList.value = ""
				}
			}
		}
	}

	const toggleDrawer = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return
		}

		setIsOpen(open)
	}

	const params = ["Home", "Shop", "Cart", "About"]

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
						<Link to={`${text}`}>
							<ListItemButton>
								<ListItemIcon>
									{text === "Home" ? (
										<HomeIcon />
									) : text === "Shop" ? (
										<ShoppingBagIcon />
									) : text === "Cart" ? (
										<ShoppingCartIcon />
									) : (
										<InfoIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<>
			<header className="mainHeader sticky top-0">
				<nav className="mainNav">
					<div className="logo">All Shop</div>
					{isBigScreen && (
						<ul>
							{params.map((param) => {
								return (
									<li onClick={onClick} key={param}>
										<Button sx={{ color: "white", mr: 1}}
											startIcon={
												param === "Home" ? (
													<HomeIcon sx={{ mb: 0.5 }} />
												) : param === "Shop" ? (
													<ShoppingBagIcon sx={{ mb: 0.5 }} />
												) : param === "Cart" ? (
													<ShoppingCartIcon sx={{ mb: 0.5 }} />
												) : (
													<InfoIcon sx={{ mb: 0.5 }} />
												)
											}
										>
											<Link to={`${param}`}>{param}</Link>
										</Button>
									</li>
								)
							})}
						</ul>
					)}
					{isSmallScreen && (
						<>
							<IconButton onClick={toggleDrawer(true)} aria-label="menu">
								<MenuOpenIcon sx={{ color: "white" }} />
							</IconButton>
							<Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
								{list()}
							</Drawer>
						</>
					)}
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default Nav
