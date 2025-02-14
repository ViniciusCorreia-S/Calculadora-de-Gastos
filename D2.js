function Verificar (text) {
    let text2 = parseFloat(text);
    (text2)
    if (isNaN(text2)|| text2 <= 0) {
    return false;
    }
    else{
        return text2;
    }
    
}

function quebraLinha () {
    document.write("<br>");
}
function Html (text3) {
    document.write(text3);
    quebraLinha();
    
}



function prosseguir1() {
    
    let distancia = Verificar(parseFloat (document.getElementById("imput1").value));
   let  consumoMedio = Verificar(parseFloat (document.getElementById("imput2").value));
    console.log(distancia)
    console.log(consumoMedio)
    

    

    let postos = Verificar(parseInt(document.getElementById("input3").value));
    

    if (distancia && consumoMedio && postos){
        document.getElementById("imput1").value = '';
        document.getElementById("imput2").value = '';
        document.getElementById("input3").value = '';
    } else {
        alert("Escreva um número valido!");
        document.getElementById("Pag_1").style ="display:block";
    }

    let consumoNecessario = parseFloat(distancia / consumoMedio);
    let media = parseFloat(valorT / menorvalorP);
    let gastoDiario = 2*(consumoNecessario * menorvalorP);

    console.log(consumoNecessario)
    console.log(menorvalorP)
    console.log(media)
    console.log(gastoDiario)
    document.getElementById("resut1").innerHTML += `<p>${consumoNecessario.toFixed(2)} L !</p>`;
    document.getElementById("resut2").innerHTML += `<p>${menorvalorP.toFixed(2)} !</p>`;
    document.getElementById("resut3").innerHTML += `<p> R$ ${media.toFixed(2)} !</p>`;
    document.getElementById("resut4").innerHTML += `<p> R$ ${gastoDiario.toFixed(2)} !</p>`;
    
    document.getElementById("Pag_1").style ="display:none";
    document.getElementById("Pag_2").style ="display:block";
}

    let contagem_Posto = 2; 

function proximoP () {

    let menorvalorP = Infinity
    
       let ValorPosto = Verificar (parseFloat (document.getElementById("inputPosto").value));
        if (menorvalorP < ValorPosto){
            menorvalorP = ValorPosto;
        }
    
    let valorT = valorT + ValorPosto
    
    // console.log(document.getElementById("inputPosto").value)
    let Ipostos = Verificar(parseFloat(document.getElementById("inputPosto").value));
    

    document.getElementById("ContagemP").innerHTML = contagem_Posto; 

    if (contagem_Posto && Ipostos) {
    document.getElementById("inputPosto").value ='';
    }
    contagem_Posto++

    // if (contagem_Posto == Ipostos){
    //  document.getElementById("Botao_Posto").style ="display:none";
    //  document.getElementById("B_enviar").style ="display:block";
    // }
}



function enviar () {
    document.getElementById("Pag_2").style ="display:none";
    document.getElementById("Pag_3").style ="display:block";

}
