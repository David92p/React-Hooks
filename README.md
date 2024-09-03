# React-Hooks

<ul>
    <li><h3> 1. Perchè leggere questa guida? </h3></li>
    <ul>
        <li>
            Questa guida è stata creata per esprimere i concetti base degli hooks di react, se hai studiato React con i class components o comunque hai avuto un primo approccio sulle basi di questa libreria sei nel posto giusto
        </li>
     </ul>
    <li><h3> 2. Prerequisiti </h3></li>
    <ul>
        <li>
          Non è richiesto che tu sia un esperto in React, ma che almeno tu abbia assorbito i concetti di funcional e class components oltre a props, state ecc
        </li>
     </ul>
    <li><h3> 3. Che cosa sono gli hooks? </h3></li>
    <ul>
        <li>
          Gli hooks sono una funzionalità aggiuntiva di React, precisamente introdotti nella versione 16 e superiore. Questi ti permettono di utilizzare le funzionalità di React senza l'utilizzo di una classe, per esempio lo stato di           un componente 
        </li>
     </ul>
    <li><h3> 4. Dove utilizzare gli hooks? </h3></li>
    <ul>
        <li>
          Come detto gli hooks ci permettono di utilizzare le funzionalità di React senza dover necessariamente scrivere una classe javascript, questi però devono essere utilizzati all'interno di un componente funzionale.
          Non è possibile infatti utilizzare un hook all'interno di un class component, ma nessuno ti vieta di scrivere ancora i tuoi componenti attraverso una classe 
        </li>
     </ul>
</ul>

## Perchè sono stati creati gli hooks?
<ul>
    <li><h3> 1. Semplificare i concetti </h3></li>
    <ul>
        <li>
            Questo è più legato a javascript che a React stesso, infatti per lavorare con le classi bisogna avere bene in mente il concetto della key "this" in javascript, che è molto differente da chi proviene da altri linguaggi.
        </li>
     </ul>
    <li><h3> 2. Ridurre il codice </h3></li>
    <ul>
        <li>
            In ogni componente di classe è necessario ricordare i gestori di eventi e riscriverli al suo interno. Di conseguenza possiamo osservare come questi non minimizzano il codice rendendolo lungo e complesso.  
        </li>
     </ul>
    <li><h3> 3. Agevolare la stesura della sintassi </h3></li>
    <ul>
        <li>
            Quando viene creato un componente di classe con scenari più complessi come fare il fetch di dati o registrare degli eventi, il codice risulta poco organizzato gestendo il ciclo di vita da diversi punti. <br>
            Esempio: per il recupero di dati solitamente viene eseguito del codice sia per quando il componente viene montato sia per quando questo viene aggiornato. Questo crea diverse righe di codice aumentandone la complessità.
            Gli hooks ti permettono di semplificare questi concetti richiamando le funzionalità necessarie.
        </li>
     </ul>
</ul>

## Ricorda 
<ul>
    <li> Gli hooks possono essere utilizzati in un progetto react con versione 16 o superiore </li>
    <li> Utilizzare gli hooks in un progetto è sempre un opzione, puoi continuare a scrivere i tuoi componenti come hai sempre fatto </li>
    <li> Il concetto di classe non è stato eliminato dal team di React, puoi quindi continuare a scrivere i tuoi class components introducendo gradualmente gli hooks all'interno dei componenti funzionali</li>
    <li> Puoi utilizzare entrambi gli approcci nel tuo progetto e non sostituisco la tua conoscenza nei concetti principali di React</li>
    <li> Gli hooks forniscono un utilizzo più diretto per quando riguarda i concetti che già conosci, come il contesto dello stato delle props e il ciclo di vita del componente </li>
 </ul>

### Precisazioni
#### Nellla libreria React esistono anche altri hooks built-in che non sono stati elencati in questa documentazion.
#### Sono stati scelti gli hooks più usati per aiutarti ad affrontare le sfide più comuni.
#### Utilizza la documentazione ufficiale che ti ho elencato in basso per scoprirne altri
#### Per ogni hooks descritto, potrai trovare la documentazione ufficiale in fondo alla pagina

### Consigli per un buon ordine di lettura, ma sentiti libero di leggere gli esempi a tuo piacimento
<ul>
    <li>useState</li>
    <li>useEffect</li>
    <li>useContext</li>
    <li>useReducer</li>
    <li>useContext&useReducer</li>
    <li>useStateVSuseReducer</li>
    <li>useCallback&useMemo</li>
    <li>useRef</li>
    <li>customHook</li>
</ul>


Documentazione ufficiale:
- [React Hooks](https://react.dev/reference/react/hooks)

