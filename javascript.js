let inputMensaje=document.getElementById("inputMessage");
let outputMensaje=document.getElementById("outputMessage");
let btnEncriptar=document.getElementById("btnEncrypt");
let btnDesencriptar=document.getElementById("btnDecrypt");

btnEncriptar.onclick=encriptarTexto;
btnDesencriptar.onclick=desencriptarTexto;

function encriptarTexto()
{
    var texto = inputMensaje.value;
    texto=texto.replace(/e/g,'enter');
    texto=texto.replace(/i/g,'imes');
    texto=texto.replace(/a/g,'ai');
    texto=texto.replace(/o/g,'ober');
    texto=texto.replace(/u/g,'ufat');

    outputMensaje.innerText=texto;
}

function desencriptarTexto()
{
    var texto = inputMensaje.value;
    texto=texto.replace(/ai/g,'a');
    texto=texto.replace(/enter/g,'e');
    texto=texto.replace(/imes/g,'i');
    texto=texto.replace(/ober/g,'o');
    texto=texto.replace(/ufat/g,'u');


    outputMensaje.innerText=texto;
}