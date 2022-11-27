//imagem da forca, botão de iniciar, palavra do jogo
import React from "react";
import palavras from "./palavras";
import {erros} from "./Letras";

export {Jogo, palavrajogo, palavrajogo2 };
let palavrajogo = "";
let palavrajogo2 = "";

function Jogo() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const imgsforca = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"];
    const [chosenword, setChosenword] = React.useState("");
    
    
    
    

    function iniciarJogo() {
        if(chosenword === ""){
        let value = Math.random() * 188;
        palavrajogo = palavras[Math.round(value)];
        palavrajogo2 = palavrajogo;
        palavrajogo = palavrajogo.split('');
        console.log(palavrajogo);
        setChosenword(palavrajogo.map(()  => "_"));
        console.log("inciarjogo");
        
        }
    }
    

    return (
    <div className="areaforca">
        <div><img src={imgsforca[erros]} className="forca"/></div>
        <div className="botaoepalavra">
            <div className="escolherpalavra" onClick={iniciarJogo}>Escolher Palavra</div>
            <div className="palavraescolhida">{chosenword}</div>
        </div>
    </div>
    )

}


