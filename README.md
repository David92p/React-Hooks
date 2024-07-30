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
            Come hai già studiato possiamo controllare il rendering di un componente attraverso delle condizioni if, condizioni ternarie e operatori logici come && e ||, [quì](https://kinsta.com/it/blog/rendering-condizionale-react/) un breve riepilogo.
        </li>
     </ul>
</ul>


Documentazione ufficiale:
- [useCallback](https://react.dev/reference/react/useCallback)
- [useMemo](https://react.dev/reference/react/useMemo)
