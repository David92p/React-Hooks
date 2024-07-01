import {useState} from 'react'
import MouseListener from './MouseListener'

const HookUseEffect2 = () => {

	const [display, setDisplay] = useState(true)

  return (
    <div style={container}>
			<button onClick={() => setDisplay(!display)} style={button}>Click</button>
			{
				// Settando il display su false il componente di seguito non viene più visualizzato
				// Anche se il componente non viene visualizzato il dom del browser continua ad ascoltare gli eventi
				// Utiliziamo una funzione cleanup nel componente
				display && <MouseListener />
			}
    </div>
  )
}

export default HookUseEffect2


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

const button = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid orange",
	fontSize: "20px",
	backgrounColor: "#f4ef89"
}
