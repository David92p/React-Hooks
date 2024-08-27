import React, { useState, useEffect } from 'react'

const DocTitleTwo = () => {
	
	// AGGIORNIAMO UNO STATO TRAMITE USESTATE
	const [count, setCount] = useState(0)

	// AGGIORNIAMO IL TITOLO DEL DOCUMENTO TRAMITE USEEFFECT
	useEffect(() => {
		document.title = `Count: ${count}`
	}, [count])

  return (
    <div style={{ margin: "10px" }}>	
      <button onClick={() => setCount(count + 1)}>Count: { count }</button>
    </div>
  )
}

export default DocTitleTwo
