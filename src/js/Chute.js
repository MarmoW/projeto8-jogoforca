//input e botão de chute
//import Jogo from "Jogo.js";


import React from "react";
import {palavrajogo, palavrajogo2} from "./Jogo.js";
let arr = [];

export default function BotaoChute(props) {
    let chute = "";
    function guardarText(event) {
        console.log(event.target.value);
        chute = event.target.value;
        }
    function Conferir() {
        console.log("até aqui?");
        console.log(palavrajogo2);
        console.log(chute);
        
        if(chute === palavrajogo2.toString()){
            console.log("ganhou");
            props.setmarkletra1("letras marcadas");
            props.setchosenword1(palavrajogo);
            props.setwordcolor1("palavraescolhida verde");
        }
        else{
            console.log("derrota");
            props.setmarkletra1("letras marcadas");
            props.setchosenword1(palavrajogo);
            props.seterros1(6);
            props.setwordcolor1("palavraescolhida vermelho");
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

//disabled={props.startdisabled1}