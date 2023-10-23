import { useState } from "react"
import PropTypes from "prop-types"
import All from "./All"
import Category from "./Category"
import { Tab, Tabs, Box } from "@mui/material"

const Shop = (props) => {
	const { all, loading, error } = props
	console.log(all["Men's clothing"])

	function CustomTabPanel(props) {
		const { children, value, index, ...other } = props

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		)
	}

	CustomTabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	}

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		}
	}

	const [value, setValue] = useState(0)

	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	return (
		<main className="bg-slate-100">
			<Box sx={{ width: "100%", position: "relative" }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: "divider",
						position: "sticky",
						top: 70,
                        backgroundColor: "rgb(241 245 249)",
                        zIndex: 1,
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="auto"
						allowScrollButtonsMobile
						aria-label="basic tabs example"
					>
						<Tab label="All" {...a11yProps(0)} />
						<Tab label="Men's clothing" {...a11yProps(1)} />
						<Tab label="Women's clothing" {...a11yProps(2)} />
						<Tab label="Jewelery" {...a11yProps(3)} />
						<Tab label="Electronics" {...a11yProps(4)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<All all={all} loading={loading} error={error} />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<Category
						category={all["Men's clothing"]}
						loading={loading}
						error={error}
						categoryName="Men's clothing"
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<Category
						category={all["Women's clothing"]}
						loading={loading}
						error={error}
						categoryName="Women's clothing"
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					<Category
						category={all.Jewelery}
						loading={loading}
						error={error}
						categoryName="Jewelery"
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={4}>
					<Category
						category={all.Electronics}
						loading={loading}
						error={error}
						categoryName="Electronics"
					/>
				</CustomTabPanel>
			</Box>
		</main>
	)
}

Shop.propTypes = {
	all: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.bool,
}

export default Shop
