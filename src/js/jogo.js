//imagem da forca, botão de iniciar, palavra do jogo
import React from "react";
import {useState} from "react";
import palavras from "./Palavras";
import {erros} from "./Letras";

export {Jogo, palavrajogo, palavrajogo2};
let palavrajogo = "";
let palavrajogo2 = "";
let classpalavra = "palavraescolhida";
 


function Jogo(props) {
    const imgsforca = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"];
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       
    
    // setClassp("palavraescolhida verde");
    // setClassp("palavraescolhida vermelho");
   
  

    function iniciarJogo() {
        const desmarcada = "letras";
        if(props.chosenword1 === ""){
        let value = Math.random() * 188;
        palavrajogo = palavras[Math.round(value)];
        palavrajogo2 = palavrajogo;
        palavrajogo = palavrajogo.split('');
        console.log(palavrajogo);
        props.setchosenword1(palavrajogo.map(()  => "_"));
        console.log("inciarjogo");
        props.setmarkletra1("letras");
        console.log(props.markletra1);
        
        }
    }
        

    return (
    <div className="areaforca">
        <div><img src={imgsforca[props.erros1]} className="forca" data-test="game-image"/></div>
        <div className="botaoepalavra">
            <div className="escolherpalavra" onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</div>
            <div className={props.wordcolor1} data-test="word" data-answer={palavrajogo}>{props.chosenword1}</div>
        </div>
    </div>
    )

}



