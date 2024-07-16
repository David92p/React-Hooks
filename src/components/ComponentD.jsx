// import useContext Hook
import { useContext } from "react"
// importiamo il context necessario nell'utilizzo di questo componente
import { USERCONTEXT, CHANNELCONTEXT } from "../App"

const ComponentD = () => {
	// richiamiamo hook useContext passando il context creato nel componente principale - restituisce il value del Context
	const USER = useContext(USERCONTEXT)
	const CHANNEL = useContext(CHANNELCONTEXT)
    
  return (
		// utiliziamo le proprietà in questo componente senza passare da tutti i componenti nella gerarchia utilizzando questo hook
    <div>
      USER CONTEXT: { USER } -  CHANNEL CONTEXT: { `Github: ${CHANNEL.github}` } 
    </div>
  )
}

export default ComponentD
