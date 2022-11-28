import React from "react";
import {palavrajogo, palavrajogo2} from "./Jogo.js"

const Alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//chosenword1={chosenword} setchosenword1={setChosenword} markletra1={markletra} setmarkletra1={setMarkletra}

export default function GerarLetras(props) {
    const desmarcada = "letras";
    const marcada = "letras marcadas";    
    let arr = [];
    
    

    function MarcarLetras(letraescolhida) {        
        
        if (props.markletra1 === desmarcada){
        props.setletante1(letraescolhida);
        

        if(palavrajogo.includes(letraescolhida)){
            
            for(let i = 0; i < palavrajogo.length; i++){
                if(palavrajogo[i] === letraescolhida){
                    arr = [...arr, letraescolhida];
                                 
        
                }
                else {
                    arr= [...arr, props.chosenword1[i]];
                    
                   }
                   
                }        
                props.setchosenword1(arr);
                               
        }
        
        else {
            props.seterros1(props.erros1 + 1);
            if(props.erros1 > 4){
                props.setmarkletra1(marcada);
                props.setchosenword1(palavrajogo);
                props.setwordcolor1("palavraescolhida vermelho");
                
                
            
            }
        
        }
        CheckWin();
    }
    
    }
    function CheckWin() {
        if(String(arr) === String(palavrajogo)){
            props.setmarkletra1(marcada);
            props.setwordcolor1("palavraescolhida verde");
            
        }
    }
    
    
    return (
        <button className={rops.markletra1} onClick={() => MarcarLetras(props.l1.toLowerCase())} data-test="letter">{props.l1}</button>
    );

}
//conjunto de botões com as letras
//disabled={arrclicadas.includes(letrack) ? true : false}