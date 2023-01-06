function calculadora() {
    const display = document.querySelector('.calc__input');

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            calcular()
        }
    });

    document.addEventListener('keydown', (e) => {
        switch(e.code) {
            case 'Backspace':
            case 'Delete':
                apagarNumero();
                break;
            case 'Numpad0':
            case 'Digit0':
                display.ariaValueNow += 0;
                break;
            case 'Numpad1':
            case 'Digit1':
                display.value += 1;
                break;
            case 'Numpad2':
            case 'Digit2':
                display.value += 2;
                break;
            case 'Numpad3':
            case 'Digit3':
                display.value += 3;
                break;
            case 'Numpad4':
            case 'Digit4':
                display.value += 4;
                break;
            case 'Numpad5':
            case 'Digit5':
                display.value += 5;
                break;
            case 'Numpad6':
            case 'Digit6':
                display.value += 6;
                break;
            case 'Numpad7':
            case 'Digit7':
                display.value += 7;
                break;
            case 'Numpad8':
            case 'Digit8':
                display.value += 8;
                break;
            case 'Numpad9':
            case 'Digit9':
                display.value += 9;
                break;
            case 'NumpadAdd':
                display.value += '+';
                validarSinais(display);
                break;
            case 'NumpadMultiply':
                display.value += '*';
                break
            case 'NumpadSubtract': 
                display.value += '-';
                validarSinais(display);
                break;
            case 'NumpadDivide':
                display.value += '/';
                break;
            case 'NumpadComma':
            case 'Period':
                display.value += '.'
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
            validarSinais(display)
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

    const validarSinais = (sinal) => {
        const operations = ['+', '-', '*', '/'];
        const operatorsArr = sinal.value.split('');
        
    }
}

calculadora();