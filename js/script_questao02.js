//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#Formulario')
const divResultado = document.querySelector('#div-dados')

//capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let largura = parseFloat(objFormDados.get('largura'))
    let altura = parseFloat(objFormDados.get('altura'))

    let area = (largura * altura)
    
    

    divResultado.innerHTML = `A área a ser pintada é de m² ${area.toFixed(2).replace('.',',')}, Total de litros para pintar essa área é de ${parseFloat(area / 2).toFixed(2).replace('.',',')}`

    formDados.reset()
})