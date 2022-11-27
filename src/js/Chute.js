//input e botão de chute
//import Jogo from "Jogo.js";


import React from "react";
import {palavrajogo, palavrajogo2} from "./Jogo.js";
let arr = [];

export default function BotaoChute() {
    //const [textchute, setTextchute] = React.useState("");
    let chute = "";
    function guardarText(event) {
        console.log(event.target.value);
        chute = event.target.value;
        //setTextchute(event.target.value);     
        }
    function Conferir() {
        console.log("até aqui?");
        console.log(palavrajogo2);
        console.log(chute);
        if(chute === palavrajogo2.toString()){
            console.log("ganhou");
            
        }

    }
     return (
    <div className="advinharpalavra">
        <p className="textochute">Já sei a palavra!</p>
        <input type="text" className="inputchute" placeholder="Tens o que é necessário pra chutar?" onChange={guardarText} />
        <div className="botaochute" onClick={Conferir}>Chutar!</div>
    </div>
    )
}

