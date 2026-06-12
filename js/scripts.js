console.log("teste");

console.log("Comando de saída")

//Comentário de linha simples

/*
    Comentário de múltiplas linhas,
    ou seja, posso descrever algo nesse tipo
    de comentário...
*/

//Criando variáveis
let num = 50   
var num2 = 100
const num3 = 450

console.log (num)
console.log (num2)
console.log (num3)

if (true){
    
    let num4 = 420
    var num5 = 180

    console.log (num4)

    console.log (num5)
}
num = 5

console.log(num)

num2 = 6

console.log (num2)

//num3 = 12

//concatenação
console.log ("Valor de num" * num)
console.log ("Valor de num3", num3)
console.log (`Valor de num2 ${num2}`)
console.log (`a soma dos números:` + (15 + 8))
console.log (`A soma dos números:`, 15 + 8)
console.log ()

/*módulo (resto da divisão)
*/

console.log (`SOMA DAS VARIÁVEIS`, num + num2)
console.log (`SUBTRAÇÃO DAS VARIÁVEIS`, num3 - num)
console.log (`MULTIPLICAÇÃO`, num2 * 2 )
console.log (`DIVISÃO DE VALORES`, num2 / 5)
console.log (`RESTO DA DIVISÃO`, num2 % 2)
console.log (`RESTO DA DIVISÃO`, num3 % 3)


//OPERADOSRES RELACIONAIS
/*

    ==IGUAL
    >MAIOR
    <MENOR
    >=MAIOR IGUAL
    <=MENOR IGUAL
    !=DIFERENTE

//OPERADORES LÓGICOS

&&  C
|| OU


*/
console.log (`Teste de relacionais`, 10 == 5)
console.log (`Teste relacionais`, 10 != 5)
console.log (`TESTE DE RELACIONAIS`, 10 > 5)
console.log (`TESTE RELACIONAIS`, 10 >= 5)
console.log (`TESTE DE RELACIONAIS`, 10 <= 5)

console.log ('TESTE LÓGICO', (10 > 5) && (15 < 8))
console.log ('TESTE LÓGICO', (10 > 5) || (15< 8))

//teste lógico
 /* 
 Renovação cnh
 menor de 18 - não permitido
 18 até 49 - 10 anos
 50 até 69 - 5 anos
 70 acima - 3 anos
 */

 if (idade < 18) {
    console.log (`com a idade de ${idade}, não é permitido CNH`)
 }else if (idade < 50){
console.log (`com a idade de ${idade}, 10 anos para renovar a CNH`)

 }else if (idade < 70) {
 console.log (`com a idade ${idade}, 5 anos para renovar`)
 } else {
    console.log (`com a idade de ${idade}, 3 anos para renovar`)
 }
