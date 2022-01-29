function cripto() {
    textoCripto = input.value
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

function desCripto() {
    textoDescripto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    var textoFinal = (document.querySelector("#msgSaida"));
    textoFinal.value = (textoDescripto);
    textoFinal.focus();
    console.log(textoDescripto);
    return(textoDescripto);
}

function copiar() {
    var copiar = (doument.querySelector("#msgSaida"));
    navigator.clipboard.writeText(copiar.value);
    return (copiar);
}

function limpa() {
    var limpa = (document.querySelector("#inputTexto"));
    limpa.value = ("");
    limpa.focus();
    var limpa = (document.querySelector("#msgSaida"));
    limpa.value = ("");
}