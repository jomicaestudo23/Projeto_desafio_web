const formDados = document.querySelector('#Formulario');
const divResultado = document.querySelector('#div-dados');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const objFormDados = new FormData(formDados);

    const senha = objFormDados.get('senha')


    let senhaCorreta = 'rodolfo'
    let resultado = ''

    if ( senhaCorreta === senha ) {
        resultado = 'Acesso permitido';
    } else {
        resultado = 'Acesso negado';
    }

    divResultado.innerHTML = `<p>${resultado}</p>`;

    formDados.reset();
})