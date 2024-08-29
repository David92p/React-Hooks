import { useEffect } from 'react'
import './App.css'
import { CounterOne, CounterTwo, CounterThree, CounterFour, UserForm }  from "./components"

function App() {
  useEffect(() => {
    console.log(document.title)
  })
  return (
    <div style={container}>
      <div>
        {/* I DUE COMPONENTI AGGIORNANO UNO STATO TRAMITE USESTATE 
        NOTIAMO COME I DUE COMPONENTI ANCHE SE DIVISI UTILIZZANO LA STESSA LOGICA AL SUO INTERNO */}
        {/* <CounterOne />
        <CounterTwo /> */}
        <UserForm />
      </div>
      <div>
        {/*I DUE COMPONENTI VISUALIZZANO LO STESSO RISULTATO, CONDIVIDONO LA STESSA LOGICA ATTRAVERSO UN CUSTOM HOOK PASSANDO LA PROPRIETA' RICHIESTA */}
        {/* <CounterThree />
        <CounterFour /> */}
      </div>
    </div>
  )
}

export default App

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,137,137,1) 100%)",
}
