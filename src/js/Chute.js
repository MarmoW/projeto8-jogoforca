import React from "react";
import {palavrajogo, palavrajogo2} from "./Jogo.js";


export default function BotaoChute(props) {
    let chute = "";
    function guardarText(event) {
      
        chute = event.target.value;

        }
    function Conferir() {
        
        
        if(chute === palavrajogo2.toString()){
           
            props.setmarkletra1("letras marcadas");
            props.setchosenword1(palavrajogo);
            props.setwordcolor1("palavraescolhida verde");
            props.setstartdisabled1(true);

        }
        else{
            
            props.setmarkletra1("letras marcadas");
            props.setchosenword1(palavrajogo);
            props.seterros1(6);
            props.setwordcolor1("palavraescolhida vermelho");
            props.setstartdisabled1(true);

        }
    }
     return (
    <div className="advinharpalavra">
        <p className="textochute">Já sei a palavra!</p>
        <input type="text"  disabled={props.startdisabled1} className="inputchute" placeholder="Tens o que é necessário pra chutar?" onChange={guardarText} data-test="guess-input"/>
        <button className="botaochute" disabled={props.startdisabled1} onClick={Conferir} data-test="guess-button">Chutar!</button>
    </div>
    )
}

