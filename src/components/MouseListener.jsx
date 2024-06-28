import { useState, useEffect } from 'react'

const MouseListener = () => {

  const [mouseCoordinates, setMouseCoordinates] = useState({x: 0, y: 0})

	const logMousePosition = (e) => {
		console.log("mouse event")
		setMouseCoordinates({x: e.clientX, y: e.clientY})
	}

	// useEffect ha la possibilita di ritornare una funzione, chiamata funzione cleanup, che ha il compito di resettare lo stato del componente
	useEffect(() => {
		window.addEventListener("mousemove", logMousePosition)

		// cleanup function
		return () => {
			console.log("Componente smontato")
			window.removeEventListener("mousemove", logMousePosition)
		}
	}, [])

  
	return (
		<div style={container}>
			<span>X: {mouseCoordinates.x}</span>
			<span>Y: {mouseCoordinates.y}</span>
		</div>
  )
}

export default MouseListener

// Style
const container = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: 8,
	fontSize: "80px",
	width: "300px",
	height: "300px",
	backgrounColor: "red",
}

