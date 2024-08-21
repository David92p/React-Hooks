import React, { useMemo, useState } from 'react'

const HookuseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0) 

	// const isEven = () => {
	// 	let i = 0
	// 	while (i < 1000000000) i++
	// 	return counterOne % 2 === 0
	// }

	// RACCHIUDIAMO LA NOSTRA FUNZIONE CON USEMEMO
	// USEMEMO COME PER USECALLBACK ACCETTA UNA FUNZIONE DA ESEGUIRE E UNA LISTA DI DIPENDENZE
	// USEMEMO RESTITUISCE SEMPRE UN DATO 
	const isEven = useMemo(() => {
		let i = 0
		while (i < 1000000000) i++
		return counterOne % 2 === 0
	}, [counterOne])

	// ABBIAMO MODIFICATO IL NOSTRO ESEMPIO PRECEDENTE PRENDENTO DUE SEMPLICI COUNTER CHE SI AGGIORNANO TRAMITE USESTATE
  return (
    <div style={{ fontSize: "30px" }}>
      <div>CounterOne - { counterOne }
				{/* QUESTA FUNZIONE RISULTA MOLTO LENTA AL CARICAMENTO DEL COMPONENTE, AVENDO INSERITO ALL'INTERNO UN LOOP PER SIMULARE UNA CHIAMATA API CHE RICHIEDE DEL TEMPO PER ESSERE ESEGUITA */}
				{/* LA FUNZIONE VIENE RESTITUISCE UN DATO DA VISUALIZZARE, E' STATA COSì RACCHIUSA DENTRO USEMEMO E PASSANDO COME DIPENDENZA IL VALORE DA TENERE SOTTO TRACCIA */}
				{/* AD OGNI CARICAMENTO DEL COMPONENTE SE IL VALORE PASSATO  COME DIPENDENZA AD USEMEMO NON CAMBIA, IL BROWSER SFRUTTERA' IL VALORE PRECEDENTEMENTE SALVATO NELLA MEMORIA  */}
				<button  style={{ margin: "0 10px", fontSize: "30px" }} onClick={() => setCounterOne(counterOne + 1)}>Increment</button>
				<span>{isEven ? "Even" : "Odd"}</span>
			</div>
			<div>CounterTwo - { counterTwo }
				{/* AD OGNI CARICAMENTO DEL COMPONENTE QUESTO VALORE VERRA' VISUALIZZATO SUBITO IN QUANDO IL BROWSER NON DOVRA' RICARICA IL VALORE DI COUNTERONE */}
				<button  style={{ margin: "0 10px", fontSize: "30px" }} onClick={() => setCounterTwo(counterTwo + 1)}>Increment</button>
			</div>
    </div>
  )
}

export default HookuseMemo
