import { Link, Outlet } from "react-router-dom"

const Nav = () => {
	function onClick(e) {
		const children = e.target.parentNode.parentNode.children
		// console.log(children)
		console.log(children)
		if (children.length >= 4) {
			for (let i = 0; i <= 3; i++) {
				if (children[i] === e.target.parentNode) {
					children[i].classList.value = "underline"
				} else {
					children[i].classList.value = ""
				}
			}
		}

		/* 
		if (children[i].classList.contains("underline")) {
				console.log(children[i])
			}
			 */
	}
	return (
		<>
			<header className="text-white bg-black">
				<nav className="flex justify-between px-4 py-2">
					<div className="px-3 py-2">All Shop</div>
					<ul className="flex justify-between w-2/5">
						<li onClick={onClick} className="px-3 py-2">
							<Link to="home">Home</Link>
						</li>
						<li onClick={onClick} className="px-3 py-2">
							<Link to="shop">Shop</Link>
						</li>
						<li onClick={onClick} className="px-3 py-2">
							<Link to="cart">Cart</Link>
						</li>
						<li onClick={onClick} className="px-3 py-2">
							<Link to="about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default Nav
