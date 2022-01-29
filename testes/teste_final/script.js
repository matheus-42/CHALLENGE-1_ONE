    function cripto() {
        textoCripto = input.value
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        var textoFinal = document.querySelector("#msg");
        textoFinal.value = textoCripto;
        textoFinal.focus();
        console.log(textoCripto);
        return(textoCripto); 
    }
    function decripto() {
        textoDecripto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        var textoFinal = document.querySelector("#msg");
        textoFinal.value = textoDecripto;
        textoFinal.focus();
        console.log(textoDecripto);
        return(textoDecripto); 
    }
    function copiar(){
        var copiar = document.querySelector("#msg");
        navigator.clipboard.writeText(copiar.value);
        return(copiar);
    }
    function limpa(){
        var limpa = document.querySelector("#input-texto");
        var limpa = document.querySelector("#msg");
        limpa.value = "";
        limpa.focus();
        //limpa.value = "";//
    }

    var input = document.querySelector("#input-texto");
    //var input2 = document.querySelector("#input-texto");

    var button1 = document.querySelector("#btn-cripto");
    button1.onclick = cripto;
    var button2 = document.querySelector("#btn-descripto");
    button2.onclick = decripto;
    var button3 = document.querySelector("#btn-copy");
    button3.onclick = copiar;
    var button4 = document.querySelector("#limpa");
    button4.onclick = limpa;







    /* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

