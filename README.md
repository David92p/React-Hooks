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
            Utilizzando la strategie di rendering sopra descritte possiamo fare in modo di controllare le parti del codice visualizzato, ma questo non gestisce le performance                          dell'applicazione. Ogni volta che il componente effetua un rendering ricarica tutti i dati al suo interno, questo a descapito delle performance. 
            Pensiamo ad un'applicazione con 100 componenti, ad ogni aggiornamento verrà effettuato tutto il codice al suo interno compreso il codice nei componenti figli.
        </li>
     </ul>
    <li><h3>4. Risparmia risorse e fai il necessario</h3></li>
    <ul>
        <li>
           ///
        </li>
     </ul>
</ul>


Documentazione ufficiale:
- [useCallback](https://react.dev/reference/react/useCallback)
- [useMemo](https://react.dev/reference/react/useMemo)
