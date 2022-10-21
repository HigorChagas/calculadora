function calculadora() {
    const display = document.querySelector('.calc__input');

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            calcular()
        }
    });

    document.addEventListener('keydown', (e) => {
        switch(e.code) {
            case 'Numpad0':
                display.value += 0;
                break;
            case 'Numpad1':
                display.value += 1;
                break;
            case 'Numpad2':
                display.value += 2;
                break;
            case 'Numpad3':
                display.value += 3;
                break;
            case 'Numpad4':
                display.value += 4;
                break;
            case 'Numpad5':
                display.value += 5;
                break;
            case 'Numpad6':
                display.value += 6;
                break;
            case 'Numpad7':
                display.value += 7;
                break;
            case 'Numpad8':
                display.value += 8;
                break;
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