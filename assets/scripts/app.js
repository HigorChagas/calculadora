function calculadora() {
    const input = document.querySelector('.calc__input');
    const del = document.querySelector('#del');

    document.addEventListener('click', (e) => {
        input.value += e.target.value;

    });

    del.addEventListener('click', () => {
        input.value = '';
    });
}

calculadora()