const formDados = document.querySelector('#Formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    const produto = objFormDados.get('produto');
    const valor = parseFloat(objFormDados.get('valor').replace(',', '.'));

    let resultado = 0;

    if (valor < 10) {
        resultado = valor * 0.70;
    } else if (valor < 30) {
        resultado = valor * 0.50;
    } else if (valor < 50) {
        resultado = valor * 0.40;
    } else {
        resultado = valor * 0.30;
    }

    const precoVenda = valor + resultado;

    divResultado.innerHTML = `
        O produto ${produto} foi comprado por R$ ${valor.toFixed(2)}.
        O lucro foi de R$ ${resultado.toFixed(2)}.
        O valor de venda é R$ ${precoVenda.toFixed(2)}.
    `;

    formDados.reset();
});