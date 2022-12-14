import React from "react";
import {palavrajogo, palavrajogo2} from "./Jogo.js"

const Alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function GerarLetras(props) {
    const desmarcada = "letras";
    const marcada = "letras marcadas";    
    let arr = [];
     
    function MarcarLetras(letraescolhida) {        
    
        props.setprevletras1([...props.prevletras1 , props.l1]);

        if (props.markletra1 === desmarcada){
            
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
                props.setstartdisabled1(true);
                
                
            
            }
        
        }
        CheckWin();
    }
    
    }
    function CheckWin() {
        if(String(arr) === String(palavrajogo)){
            props.setmarkletra1(marcada);
            props.setwordcolor1("palavraescolhida verde");
            props.setstartdisabled1(true);
            
        }
    }
    
    
    return (
        <button className={props.prevletras1.includes(props.l1) ? marcada : props.markletra1} disabled={props.prevletras1.includes(props.l1) ? true : props.startdisabled1} onClick={() => MarcarLetras(props.l1.toLowerCase())} data-test="letter">{props.l1}</button>
    );

}

