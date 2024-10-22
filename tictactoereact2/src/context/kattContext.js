// itt hozom létre a contextet és a providert
// egy helyen kezelem az adatokat, és megszüntetjük a buborékoltatási láncot

import { createContext, useState } from "react";
import { LISTA } from '../tictactoe2/adat.js';

export const KattContext = createContext("") // létrehozok egy contextet

export const KattProvider = ({children})=>{ // létrehozok egy providert, itt fogom a változókat definiálni és műveleteket létrehozni. KÖTELEZŐEN van returnje
    
    //itt használjuk a STATEket és a FÜGGVÉNYEKET
    const [lista, setLista]=useState(LISTA)
    const [lepes, setLepes] = useState(0)
  
  function katt(adat){

    const segedlista=[...lista] 
    if (lepes%2==0){
      segedlista[adat] = "X"
    }else{
      segedlista[adat]= "O"
    }
    setLista([...segedlista])


    let sv = lepes
    sv++
    setLepes(sv)
    console.log(lista)
  }

    return <KattContext.Provider value={{LISTA, katt}}>
        {children} 
    </KattContext.Provider>// children: ide kerülnek azok a komponensek amiket körbeölelünk
}
