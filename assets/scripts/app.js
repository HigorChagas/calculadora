function calculadora() {
    const display = document.querySelector('.calc__input');

    document.addEventListener('click', (e) => {
        const elemento = e.target;
        if(elemento.classList.contains('calc__clear')) {
            limparDisplay();
        }
    });

    function limparDisplay() {
        display.value = '';
    }
}

calculadora()