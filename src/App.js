import React from "react";
import {useState} from 'react';
import {Jogo} from "./js/Jogo.js";
import GerarLetras from "./js/Letras.js";
import BotaoChute from "./js/Chute.js";

const Alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//return ({Alfabeto.map((letras) => <div className="letras">{letras}</div>});
export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [chosenword, setChosenword] = React.useState("");
    const [markletra, setMarkletra] = React.useState("letras marcadas");  
    const [erros, setErros] = React.useState(0);
    const [wordcolor, setWordcolor] = React.useState("palavraescolhida");
    const [startdisabled, setStartdisabled] = React.useState(true);
    const [prevletras, setPrevletras] = React.useState(['']);
 
    
    return(
    <>
     <Jogo setprevletras1={setPrevletras} startdisabled1={startdisabled} setstartdisabled1={setStartdisabled} chosenword1={chosenword} setchosenword1={setChosenword} markletra1={markletra} setmarkletra1={setMarkletra} erros1={erros} seterros1={setErros} wordcolor1={wordcolor} setwordcolor1={setWordcolor}/>
     <div className="caixadasletras">
        {Alfabeto.map((letra) => <GerarLetras key={letra} prevletras1={prevletras} setprevletras1={setPrevletras} startdisabled1={startdisabled} setstartdisabled1={setStartdisabled} l1={letra.toUpperCase()} chosenword1={chosenword} setchosenword1={setChosenword} markletra1={markletra} setmarkletra1={setMarkletra} erros1={erros} seterros1={setErros} wordcolor1={wordcolor} setwordcolor1={setWordcolor}/>)}
     </div>
     <BotaoChute startdisabled1={startdisabled} setstartdisabled1={setStartdisabled} chosenword1={chosenword} setchosenword1={setChosenword} markletra1={markletra} setmarkletra1={setMarkletra} erros1={erros} seterros1={setErros} wordcolor1={wordcolor} setwordcolor1={setWordcolor}/>
    </>
      )

}

//chamará os demais componentes
// props.setmarkletra1("")