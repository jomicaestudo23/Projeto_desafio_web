//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#Formulario')
const divResultado = document.querySelector('#div-dados')

//capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let lado1 = parseFloat(objFormDados.get('lado1'))
    let lado2 = parseFloat(objFormDados.get('lado2'))
    let lado3 = parseFloat(objFormDados.get('lado3'))

    let resultado = ''

    
    if ( lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        resultado = 'o triângulo é equilátero'    

    } 
    else if( lado1 == lado2 || lado1 == lado3 || lado2 == lado3 ){
        resultado = 'o triângulo é isóceles'

    }
    else {
        resultado = 'o triângulo é escaleno'
     
    }
    divResultado.innerHTML = `${resultado}`

})