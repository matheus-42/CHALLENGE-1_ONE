//--------------------------------------BLOCO DE FUNÇÕES--------------------------------------//
function cripto() {//--CODIFICADOR--//
   var textoCripto = input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    var textoFinal = (document.querySelector("#msgSaida"));
    textoFinal.value = (textoCripto);
    textoFinal.focus();
    console.log(textoCripto);
    return(textoCripto);
}

function deCripto() {//--DECODIFICADOR--//
    var textoDecripto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    var textoFinal = (document.querySelector("#msgSaida"));
    textoFinal.value = (textoDecripto);
    textoFinal.focus();
    console.log(textoDecripto);
    return(textoDecripto);
}

function copia() {//--COPIA O TEXTO--//
    var copia = (doument.querySelector("#msgSaida"));
    navigator.clipboard.writeText(copia.value);
    return (copia);
    alert("TEXTO COPIADO!");
    limpa();
}

function limpa() {//--LIMPA OS CAMPOS E "SELECIONA" O CAMPO ONDE SE INSERE O TEXTO--//
    var limpa = (document.querySelector("#inputTexto"));
    limpa.value = ("");
    limpa.focus();
    var limpa = (document.querySelector("#msgSaida"));
    limpa.value = ("");
}

function startDeCripto() {//--VERIFICA SE O TEXTO INSERIO ESTÁ CODIFICADO E INICIA O DECODIFICADOR--//
    var textoStart = (document.querySelector("#inputTexto"));
    var palavrasChaves = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    var textoValor = (textoStart.value);
    var verifica = palavrasChaves.some(chaves => textoValor.includes(chaves));
    if(verifica){
        deCripto(); 
    }
    else{
        alert("TEXTO NÃO CRIPTOGRAFADO!");
        limpa();
    }
}
//--------------------------------------------------------------------------------------------//
//-------------------------------------BLOCO DE VARIÁVEIS------------------------------------//
var input = (document.querySelector("#inputTexto"));

var botaoCripto = (document.querySelector("#btnCripto"));
botaoCripto.onclick = (cripto);

var botaoDeCripto = (document.querySelector("#btnDecripto"));
botaoDeCripto.onclick = (startDeCripto);

var botaoCopia = (document.querySelector("#btnCopia"));
botaoCopia.onclick = (copia);

var botaoLimpa = (document.querySelector("#btnLimpa"));
botaoLimpa.onclick = (limpa);
//--------------------------------------------------------------------------------------------//
