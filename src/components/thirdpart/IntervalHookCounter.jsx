import { useEffect, useState } from 'react'

const IntervalHookCounter = () => {

  const [count, setCount] = useState(0)

	// funzione che aggiorna lo stato 
	const tick = () => {
		//setCount(count + 1) 
		setCount((prevCount) => prevCount + 1)
	}

	useEffect(() => {
		setInterval(tick, 1000)

		// funzione di cleanup 
		return () => {
			setCount(0)
		}
	}, []) // In questo caso non passiamo dipendenze in quanto abbiamo l'esacuzione di tick() ogni secondo e di conseguenza un aggiornamento di stato - questo comporta un nuovo rendering 
  
	return (
    <div style={container}>
      <span>Counter: {count}</span>
    </div>
  )
}

export default IntervalHookCounter

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
