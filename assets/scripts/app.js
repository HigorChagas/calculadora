function calculadora() {
    const display = document.querySelector('.calc__input');

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            calcular()
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Backspace') {
            apagarNumero();
        }
    });

    document.addEventListener('click', (e) => {
        const elemento = e.target;
        if(elemento.classList.contains('calc__clear')) {
            limparDisplay();
        }
        if(elemento.classList.contains('calc__numbers')) {
            display.value += elemento.value;
        }
        if(elemento.classList.contains('calc__del')) {
            apagarNumero();
        }
        if(elemento.classList.contains('calc__eq')) {
            calcular();
        }
    });

    const limparDisplay = () => {
        display.value = '';
    }

    const apagarNumero = () => {
        display.value = display.value.slice(0, -1);
    } 

    const calcular = () => {
        let conta = display.value;
        
        if(!conta) {
            alert('Conta inválida!');
            display.value = '';
        } else {
            display.value = eval(conta);
        }
    } 
}

calculadora();