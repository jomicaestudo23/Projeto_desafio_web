const formDados = document.querySelector('#Formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    const numero = parseFloat(objFormDados.get('Numero'))


    let resultado = ''

    if (numero % 3 === 0 && numero % 7 === 0) {
        resultado = 'o número é divisível por 3 e 7';
    } else {
        resultado = 'o número não é divisível por 3 e 7';
    }

    divResultado.innerHTML = `<p>${resultado}</p>`;

    formDados.reset();
})