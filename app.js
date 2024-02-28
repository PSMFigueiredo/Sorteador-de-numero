function sortear(){
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById('ate').value);


   //Podemos verificar se a quantidade de números escolhidos no campo “Quantidade de números”
   // é igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”. Isso irá prevenir que esse erro aconteça.

// somar quantos numeros existem do de ate, a partir disso criar um if com um alert dizendo a quantidade de numeros é menor que o numero
// de retorno para o sorteio.


// if( soma < quantidade){
//     return alert ('A quantidade de números para sorteio é menor que o intervalo, verifique os campos e tente novamente.')
//  }


let sorteados = [];
let numero

for (let i = 0; i < quantidade; i++){
    numero = gerarNumeroAleatorio(de, ate);
    while(sorteados.includes(numero)){
        numero = gerarNumeroAleatorio(de, ate);       
        sorteados.push(numero);      
        
    }

    sorteados.push(numero)
if (quantidade > ate){
    return alert ('Você digitou um número maior que o esperado em quantidade, verifique os dados e tente novamente!')
    }
let soma = (de + ate);
    if(soma < quantidade){
    return alert ('A quantidade de números para sorteio é menor que o intervalo, verifique os campos e tente novamente.')
}
}

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<label class="texto__paragrafo"> Números sorteados: ${sorteados} </label> `;
alterarStatusBotao();

}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar")
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';  
    alterarStatusBotao   
}

