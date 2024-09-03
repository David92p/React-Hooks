# Custom Hook

### Tutti gli hooks visti sono forniti dalla libreria di React
### Come abbiamo visto sono delle funzioni che possono essere richiamati all'interno dei nostri componenti

## Cosa rende gli hooks così speciali per noi sviluppatori
<ul>
    <li> Gli Hooks racchiudono una logica all'interno che ci permette di non riscrivere un determinato codice più volte, ma attraverso questo metodo renderlo riutilizzabile </li>
    <li> Come sai, una delle particolarità di React è il concetto di riutilizzo. Creare un componente, una parte di codice, che può essere richiamato in qualsiasi punto del nostro sito </li>
    <li> La possibilità di scrivere una determinata logica e richiamarla all'interno di un componente </li>
    <li> Ogni componente anche se diverso, può richiamare lo stesso concetto espresso in altri punti del codice senza dover riscrivere lo stesso metodo più volte </li>
</ul>

## React ha scritto questi metodi per noi, possiamo farlo anche noi? Assolutamente si! Ma che cos'è un custom hook?
<ul>
    <li> Sulla base del concetto espresso per gli hooks già forniti da React, un custom Hook è una funzione javascript in cui il nome inizia con la key "use" </li>
    <li> Un custom hook può richiamare altri hook per sfruttare la logica già espressa </li>
    <li> Condividere la logica tra due o più componenti </li>
</ul>

Documentazione ufficiale:
- [custom hook](https://react.dev/learn/reusing-logic-with-custom-hooks)


