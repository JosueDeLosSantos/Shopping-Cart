import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Nav from "./Nav"
import Home from "./components/home/Home"
import Shop from "./components/shop/Shop"
import Cart from "./components/cart/Cart"
import About from "./components/about/About"

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Nav />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "Home",
					element: <Home />,
				},
				{
					path: "Shop",
					element: <Shop />,
                },
                {
                    path: "Cart",
                    element: <Cart />
                },
                {
                    path: "About",
                    element: <About />
                }
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
