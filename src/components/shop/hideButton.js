export default function hideButton(e) {
	if (e.target.nodeName === "BUTTON") {
		e.target.className += " hide "
		const newArr = Array.from(e.target.parentNode.lastChild.classList).filter(
			(el) => el !== "hide"
		)

		e.target.parentNode.lastChild.className = newArr.join(" ")
	}
	if (e.target.nodeName === "svg") {
		e.target.parentNode.parentNode.className += " hide "
		const newArr = Array.from(
			e.target.parentNode.parentNode.parentNode.lastChild.classList
		).filter((el) => el !== "hide")

		e.target.parentNode.parentNode.parentNode.lastChild.className = newArr.join(" ")
	}
	if (e.target.nodeName === "path") {
		e.target.parentNode.parentNode.parentNode.className += " hide "
		const newArr = Array.from(
			e.target.parentNode.parentNode.parentNode.parentNode.lastChild.classList
		).filter((el) => el !== "hide")

		e.target.parentNode.parentNode.parentNode.parentNode.lastChild.className = newArr.join(" ")
	}
}
