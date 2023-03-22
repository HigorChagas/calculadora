class Calculadora {
    constructor() {
        this.display = document.querySelector('.calc__input');

        document.addEventListener('click', (event) => {
            const elemento = event.target;

            if (elemento.classList.contains('calc__operations')) {
                const ultimoCaractere = this.display.value.slice(-1);
                if (/[\+\-\*/]/.test(ultimoCaractere)) {
                    return;
                }
                return (this.display.value += elemento.value);
            }
            if (elemento.classList.contains('calc__clear')) {
                this.limparDisplay();
            }
            if (elemento.classList.contains('calc__numbers')) {
                return (this.display.value += elemento.value);
            }
            if (elemento.classList.contains('calc__del')) {
                return this.apagaDigito();
            }
            if (elemento.classList.contains('calc__eq')) {
                return this.calcular();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (/Backspace|Delete/.test(e.code)) {
                this.apagaDigito();
            } else if (/Numpad[0-9]|Digit[0-9]/.test(e.code)) {
                this.display.value += e.key;
            } else if (/(NumpadAdd|NumpadSubtract)/.test(e.code)) {
                this.display.value += e.key;
            } else if (/NumpadMultiply|NumpadDivide/.test(e.code)) {
                this.display.value += e.key;
            } else if (/NumpadComma|Period/.test(e.code)) {
                this.display.value += '.';
            }
        });
    }

    limparDisplay() {
        return (this.display.value = '');
    }

    apagaDigito() {
        const ultimoCaractere = this.display.value.slice(-1);
        if (/[+\-*/]/.test(ultimoCaractere)) {
            return (this.display.value = this.display.value.slice(0, -2));
        } else {
            return (this.display.value = this.display.value.slice(0, -1));
        }
    }

    calcular() {
        let resultado = this.display.value;

        try {
            this.display.value = eval(resultado);
        } catch (error) {
            this.limparDisplay();
            alert('Conta inválida');
            throw new Error('Conta inválida');
        }
    }
}

const calculadora = new Calculadora();
calculadora;
