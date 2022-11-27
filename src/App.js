import React from "react";
import {Jogo} from "./js/Jogo.js";
import {GerarLetras} from "./js/Letras.js";
import BotaoChute from "./js/Chute.js";

const Alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//return ({Alfabeto.map((letras) => <div className="letras">{letras}</div>});
export {App}

function App() {
    
    return(
    <>
     <Jogo />
     <div className="caixadasletras">
        {Alfabeto.map((letra) => <GerarLetras l1={letra.toUpperCase()}/>)}
     </div>
     <BotaoChute />
    </>
      )

}

//chamará os demais componentes