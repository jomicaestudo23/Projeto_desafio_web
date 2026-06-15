//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#Formulario')
const divResultado = document.querySelector('#div-dados')

//capturando o evento submit do formulário
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData (formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preço = parseFloat(objFormDados.get('preço'))

    let quantComb = (distancia / consumo)
    let valor = (preço * quantComb)
    

    divResultado.innerHTML = `A quantidade de combustivel necessária é ${quantComb.toFixed(2).replace('.',',')}L, O valor total necessário para esse deslocamento é ${parseFloat(valor).toFixed(2).replace('.',',')}`

    formDados.reset()
})