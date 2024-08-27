import './App.css'
import { DocTitleOne, DocTitleTwo } from './components'

function App() {
  return (
    <div style={container}>
      <div>
        {/* I DUE COMPONENTI AGGIORNANO UNO STATO TRAMITE USESTATE E IL TITLE DEL DOCUMENT AD OGNI RENDER CAUSATO DA USESTATE
        NOTIAMO COME I DUE COMPONENTI ANCHE SE DIVISI UTILIZZANO LA STESSA LOGICA AL SUO INTERNO */}
        <DocTitleOne />
        <DocTitleTwo />
      </div>
      <div>
        {/*I DUE COMPONENTI HANNO UN PROPRIO STATO INTERNO AGGIORNATO DA UN BUTTON, CONDIVIDONO LA STESSA LOGICA ANDANDO A SETTARE IL TITLE DEL DOCUMENT 
        QUESTO VIENE FATTO ATTRAVERSO UN CUSTOM HOOK PASSANDO LA PROPRIETA' RICHIESTA */}
        <DocTitleOne />
        <DocTitleTwo />
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
