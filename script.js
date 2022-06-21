function calculadora(){
    const operacao = Number(prompt("Escolha uma operaçao:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação"))

    if (!operacao || operacao >= 7){
        alert("Erro - Opção invalida");
        calculadora();
    } else { 

    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    if (!n1 || !n2) {
        alert("Parâmetros inválidos");
        calculadora();
    } else {

    function soma() {
        resultado = n1 + n2;
        alert("O resultado de " + n1 + " + " + n2 + " é: " + resultado); 
        novaOperacao()
    }

    function subtracao() {
        resultado = n1 - n2;
        alert("O resultado de " + n1 + " - " + n2 + " é: " + resultado); 
        novaOperacao()
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert("O resultado de " + n1 + " x " + n2 + " é: " + resultado); 
        novaOperacao()
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert("O resultado de " + n1 + " / " + n2 + " é: " + resultado); 
        novaOperacao()
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert("O resto da divisão é: " + resultado); 
        novaOperacao()
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert("O resultado da potenciação entre: " + n1 + " e " + n2 + " é : " + resultado); 
        novaOperacao()
    }

    function novaOperacao() {
        let opcao = prompt("Pretende fazer outra operaçao?\n 1- Sim\n 2- Nao");

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2) {
            alert("Até mais")
        } else {
            alert("Escolha uma opção válida")
            novaOperacao();
        }
    }
}

    switch (operacao){
        case 1: 
        soma();
        break;
        case 2:
        subtracao();
        break;
        case 3:
        multiplicacao();
        break;
        case 4: 
        divisaoReal();
        break;
        case 5: 
        divisaoInteira();
        break;
        case 6: 
        potenciacao();
        break;
    }
    } 
}

calculadora();