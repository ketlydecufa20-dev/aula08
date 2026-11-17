// 1- Crie uma função que receba o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado. A mensagem deverá ser personalizada com o nome do aluno.

function fnMedia (nota1, nota2, nota3,nome){
let media =(nota1 + nota2 + nota3) / 3 
if (media >= 7){
    console.log("Aluno Aprovado: " + nome  );
    
} else {
    console.log(nome + "Aluno Reprovado: " + nome);
    
} }
// (),  parametros dps do nome da função, sem aspas 


//2- Crie uma função que receba dois números e exiba a diferença entre eles

function fnSubtracao(num1, num2) {
    let subtracao = num1 - num2
        console.log("Resultado =" + subtracao);
    }
    

//3- Crie uma função que receba um número e exiba sua tabuada de multiplicação, utilizando um laço de repetição, do 1 ao 10.

function mult (numero) {

    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}

//4-Crie uma função que receba a idade de uma pessoa e classifique sua faixa etária de acordo com as seguintes regras: menor que 12 anos: criança; de 12 até 17 anos: adolescente: de 18 até 59 anos: adulto: 60 anos ou mais: idoso. Ao final, exiba a classificação correspondente

function classificacao (idade) {

    if (idade < 12){
        console.log("Criança")
    } else if (idade <= 17) {
        console.log("Adolescente")
    } else if (idade <= 59) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }

}

//5- Crie uma função que receba a largura e a altura de um retângulo, calcule sua área e exiba o resultado. (Para calcular a área de um retângulo, utilize a fórmula área=base*altura), Oresultado deve ser expresso em unidades de área, como centímetros quadrados (cm)


function area (base, altura) {

    let calcArea = base * altura

    console.log(`A área do Retangulo é ${calcArea}`)

}   
//6-Crie uma função que receba um número e realize uma contagem regressiva até chegar a zero, como centimetros quadrados (cm)

function contRegressiva (numero) {

    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }

}



//7-Crie uma função que receba o salário de um funcionário e aplique um aumento de acordo com as seguintes regras: salário menores que $ 1mil recebem 20% de aumento, entre $1mil e $2mil recebem 15% e acima de $2mil recebem 10%. Ao final, exiba o novo salário

function salario (salario) {

    if (salario < 1000) {
        console.log(`Aumento de 20% R$${(salario * 0.20) + salario}`)
    } else if (salario < 2000) {
        console.log(`Aumento de 15% R$${(salario * 0.15) + salario}`)
    } else {
        console.log(`Aumento de 10% R$${(salario * 0.10) + salario}`)

    }

}


//8- Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao final, exiba uma mensagem informando o resultado.

function parOuImpar (numero) {

    if (numero % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }

}   


//9- Crie uma função que receba uma temperatura em Celsius e converta para Fahrenheit. A função também deverá receber uma informação opcional para definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. caso essa informação não seja fornecida, deverá realizar a conversão padrão de Celsius para Fahrenheit 

function fntemperatura(celsius, Fahrenheit) {
    let 
    
}

//10-Crie uma função que receba três números representando os lados de um triângulo e verifique se ele é equilátero, isósceles ou escaleno.

//11-Crie uma função que receba um número inteiro positivo e calcule a soma de todos os números de 1 até o número informado, utilizando um laço de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 + 3 + 4 + 5 e exibir 15.

//12- Crie uma função que receba o valor de um produto e o percentual de desconto. O percentual de desconto deverá ser opcional, considerando 10% caso não seja informado. Ao final, exiva o valor do desconto e o preço final do produto

//13- Crie uma função que receba a altura, a idade e a informação se a pessoa possui algum problema cardíaco. Para entrar no brinquedo, a pessoa precisa ter altura maior ou igual a 1,50m e idade maior ou igual a 12 anos. Caso possua algum problema cardíaco, não poderá utilizar o brinquedo, independentemente das demais condições. 
//14-
//15-
//16-
function fnDividirSaldoMesa(totalConta, quantidadePessoas = 2){
    let totalDivisao = 0
    totalDivisao = totalConta / quantidadePessoas
console.log(`O valor total de R${totalConta} dividido em ${quantidadePessoas}pessoas é R$ ${totalDivisao}`);
    
}

//17-
//18-