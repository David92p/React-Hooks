import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

const DocTitleThree = () => {
	
	// AGGIORNIAMO UNO STATO TRAMITE USESTATE
	const [count, setCount] = useState(0)

	// RICHIAMIAMO QUI' IL NOSTRO HOOK CREATO IN PRECEDENZA PER SFRUTTARE LA SUA LOGICA SENZA RICREARLA
	useDocumentTitle(count)
  return (
    <div style={{ margin: "10px" }}>	
      <button onClick={() => setCount(count + 1)}>Count: { count }</button>
    </div>
  )
}

export default DocTitleThree
