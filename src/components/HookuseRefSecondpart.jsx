import { useEffect, useRef, useState } from 'react'

const HookuseRefSecondpart = () => {

  // IMPOSTATIAMO UNO STATO CON USESTATE
	let [number, setNumber] = useState(0)

  // CREAIAMO 3 REFERENZE PER CONTROLLARE GLI INPUT 
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  // CONTROLLIAMO IL RENDER DEL COMPONENTE GRAZIE ALL'AIUTO DI USEEFFECT 
  useEffect(() => {
		console.log("COMPONENT RENDERED")
	})

  // LA FUNZIONE INTERVIENE SU UNO STATO DEL COMPONENTE CREATO DA USESTATE
  const renderPage = () => {
    setNumber(number => number + 1)
  }

  // CREIAMO DELLE FUNZIONI PER CONTROLLARE GLI INPUT DEL DOM
  // AGGIORNANDO LE REF NON GENERIAMO UN RENDER DELL'INTERO COMPONENTE 
  const handleClick1 = () => {
    inputRef1.current.focus()
    inputRef1.current.style.background = "yellow"
    inputRef2.current.style.background = ""
    inputRef3.current.style.background = ""
  }

  const handleClick2 = () => {
    inputRef2.current.focus()
    inputRef1.current.style.background = ""
    inputRef2.current.style.background = "yellow"
    inputRef3.current.style.background = ""
  }

  const handleClick3 = () => {
    inputRef3.current.focus()
    inputRef1.current.style.background = ""
    inputRef2.current.style.background = ""
    inputRef3.current.style.background = "yellow"
  }
	
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <button style={{margin: "30px"}} onClick={handleClick1}>
          Click update ref!
      </button>
      <input ref={inputRef1}/>

      <button style={{margin: "30px"}} onClick={handleClick2}>
          Click update ref!
      </button>
      <input ref={inputRef2}/>

      <button style={{margin: "30px"}} onClick={handleClick3}>
          Click update ref!
      </button>
      <input ref={inputRef3}/>

      {/* DI SEGUITO UN BOTTONE CHE AGGIORNA UNO STATO TRAMITE USESTATE, QUESTO GENERA IL RENDER DELL'INTERO COMPONENTE */}
      <button onClick={renderPage} style={{backgroundColor: "#F0FFF0", margin: "10px", padding:"3px"}}>
          Click Render della pagina!
      </button>
      <span>Numero di Render: { number }</span>
    </div>
  )
}

export default HookuseRefSecondpart
