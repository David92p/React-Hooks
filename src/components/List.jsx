import { useState, useEffect } from "react"

const List = ({ getItems }) => {

	const [items, setItems] = useState([])

	useEffect(() => {
		setItems(getItems(5))
		console.log("LIST COMPONENT RENDERING !!!")
	}, [getItems])

	const listStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		fontSize: "40px",
	}
	return items.map(item => <div key={Math.floor(Math.random() * 10000)}>{item}</div>)
}

export default List
