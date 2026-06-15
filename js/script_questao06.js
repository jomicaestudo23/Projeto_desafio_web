const formDados = document.querySelector('#Formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    const peso = Number(objFormDados.get('peso').replace(',','.'));
    const altura = Number(objFormDados.get('altura').replace(',','.'));

    const imc = peso / (altura * altura);

    let resultado = '';

    if (imc < 20) {
        resultado = 'Seu IMC está abaixo do peso';
    } else if (imc <= 25) {
        resultado = 'Seu IMC está normal';
    } else if (imc <= 30) {
        resultado = 'Você está acima do peso';
    } else if (imc <= 35) {
        resultado = 'Você está obeso';
    } else {
        resultado = 'Você tem obesidade mórbida';
    }

    divResultado.innerHTML = `
        <p>IMC: <strong>${imc.toFixed(2)}</strong></p>
        <p>${resultado}</p>
    `;

    formDados.reset();
});