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
					path: "home",
					element: <Home />,
				},
				{
					path: "shop",
					element: <Shop />,
                },
                {
                    path: "cart",
                    element: <Cart />
                },
                {
                    path: "about",
                    element: <About />
                }
			],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
