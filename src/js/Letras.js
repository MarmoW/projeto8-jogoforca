import React from "react";
import {palavrajogo} from "./Jogo.js";
const Alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let erros = 0;

export {GerarLetras, erros} 

function GerarLetras(props) {
    const [markletra, setMarkletra] = React.useState("letras");  
    const desmarcada = "letras";
    const marcada = "letras marcadas";    

    function MarcarLetras(letraescolhida) {        
        if (markletra === desmarcada){
        console.log("marcou");        
        setMarkletra(marcada);
        console.log(palavrajogo);
        console.log(letraescolhida);
        if(palavrajogo.includes(letraescolhida)){
            console.log("tem a letra");
            

        }
        else {
            erros ++;
            console.log(erros);
            if(erros > 5){
                console.log("Derrota!")
                errouFeio();
            }
        }
        }
        else {
            
        }
    }

    return (
        <div className={markletra} onClick={() => MarcarLetras(props.l1.toLowerCase())}>{props.l1}</div>
    );
}


//conjunto de botões com as letras