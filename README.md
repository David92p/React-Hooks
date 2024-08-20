## useCallback Hook & useMemo Hook


### useCallback per memorizzare una funzione e controllare il caricamento
### useMemo per memorizzare un dato di una funzione e controllare il caricamento

<ul
    <li><h3>1. Sai che cos'è il rendering?</h3></li>
    <ul>
        <li>
            React adotta il concetto di rendering dei componenti, quando un componente subisce un rendering effettua delle azioni che ricaricano le parti che lo compongono,
            compresi tutti i componenti figli al suo interno.
        </li>
     </ul>
    <li><h3>2. Controllare il rendering</h3></li>
    <ul>
        <li>
            Come hai già studiato possiamo controllare il rendering di un componente attraverso delle condizioni if, condizioni ternarie e operatori logici come && e ||.
            <a href="https://kinsta.com/it/blog/rendering-condizionale-react/">Quì</a> un breve riepilogo.
        </li>
     </ul>
    <li><h3>3. Gestione del rendering</h3></li>
    <ul>
        <li>
            Utilizzando la strategie di rendering sopra descritte possiamo fare in modo di controllare le parti del codice visualizzato, ma questo non gestisce le performance dell'applicazione. Ogni volta che il componente effettua un             rendering ricarica tutti i dati al suo interno, questo a descapito delle performance. 
            Pensiamo ad un'applicazione con 100 componenti, ad ogni aggiornamento verrà effettuato tutto il codice al suo interno compreso il codice nei componenti figli.
        </li>
     </ul>
    <li><h3>4. Risparmia risorse e fai il necessario</h3></li>
    <ul>
        <li>
           Hai mai sentito parlare di memoria cache? Anche senza approfondire l'argomento pensa a questa come una memoria della memoria del tuo pc, una specie di contenitore dove inserire le cose da ricordare e sfruttarla appena                 necessario. Questo è quello che fa React per ottimizzare i rendering che spesso non necessitano di essere ricaricati, semplicemente perchè sono già li, non hanno subito alcuna modifica, allora nel momento in cui ricarico 
           il componente perchè ricaricare quello che già conosco? 
        </li>
     </ul>
     <li><h3>5. Ricorda un dato o una funzione?</h3></li>
    <ul>
        <li>
            E' necessario capire cosa ci spinge e non dover ricaricare un componente, una funzione non necessaria al corretto rendering o un dato che già abbiamo caricato con il primo rendering. 
            Questo è ciò che fanno useCallback e useMemo, hanno una sintassi simile se non uguale ma quando usare uno o l'altro per immagazzinare dati? semplice, useCallback restituisce sempre una funzione mentre useMemo restituisce              un dato. 
        </li>
     </ul>
    <li><h3>6. Casi di uso comune</h3></li>
    <ul>
        <li>
            Utilizza useCallback o useMemo nel caso la funzione o il dato da creare risulti davvero lento e pesante in modo da ricrearlo solo quando necessario, anche se saranno poche le occasioni che questo succeda.
            E' molto più comune l'utilizzo di useCallback e useMemo quando hai delle referenze e stai utilizzando useEffect o simili che hanno quel valore all'interno delle loro dipendenze che causerebbero il re-rendering
        </li>
     </ul>
</ul>


Documentazione ufficiale:
- [useCallback](https://react.dev/reference/react/useCallback)
- [useMemo](https://react.dev/reference/react/useMemo)
