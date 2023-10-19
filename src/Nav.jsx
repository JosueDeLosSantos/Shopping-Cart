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

	const params = ["Home", "Cart", "Shop", "About"]

	return (
		<>
			<header className="text-white bg-black">
				<nav className="flex justify-between px-4 py-2">
					<div className="px-3 py-2">All Shop</div>
					<ul className="flex justify-between w-2/5">
						{params.map((param) => {
							return (
								<li key={param} className="px-3 py-2 hover:underline">
									<Link to={`${param}`}>{param}</Link>
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
