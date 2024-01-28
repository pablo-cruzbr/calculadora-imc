
const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Comparar o valor que tem dentro do elemento - usar o .value
    // .value: comprar o valor que está dentro do elemento, e não o elemento. 
    // Usado em formulaário e etc.
    //if --> Todos os campos diferente de vazio para alertar valor preenchido.

    //else --> Mensagem de erro dentro da div. box abaixo.

    //1  - VALIDAÇÃO SIMPLES de preenchimento de campos

    if (nome !== '' && altura !== '' && peso !== '') {
       

    //2 - Calculo
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns'
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1.'
        }else if(valorIMC < 40){
            classificacao = 'obesidade grau 2.'
        }else {
            classificacao = 'obesidade grau 3. CUIDADO !!!'
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);


 