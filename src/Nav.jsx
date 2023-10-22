import { Link, Outlet } from "react-router-dom"

const Nav = () => {
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

	const params = ["Home", "Shop", "Cart", "About"]

	return (
		<>
			<header className="mainHeader">
				<nav className="mainNav">
					<div className="logo">All Shop</div>
					<ul>
						{params.map((param) => {
							return (
								<li onClick={onClick} key={param}>
									<Link to={`${param}`}>
										{param}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default Nav
