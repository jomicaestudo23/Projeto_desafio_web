//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#Formulario')
const divResultado = document.querySelector('#div-dados')

//capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let nome = objFormDados.get('nome') 
    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3'))

    let media = (nota1 + nota2 + nota3 )/ 3
    let resultado; 
    
    if (media >= 6 ) {
        resultado = `${nome}, você foi aprovado e sua media é igual a ${media}`    

    }
    else {
        resultado = `${nome}, você foi reprovado e sua media é igual a ${media}`
     
    }
    divResultado.innerHTML = `${resultado}`

})