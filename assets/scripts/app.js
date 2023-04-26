class Calculator {
    constructor() {
        this.display = document.querySelector('.calc__input');

        document.addEventListener('click', (event) => {
            const element = event.target;
            const lastCharacter = this.display.value.slice(-1);

            if (element.classList.contains('calc__operations')) {
                if (/[\+\-\*/]/.test(lastCharacter)) {
                    return;
                }
                return (this.display.value += element.value);
            }
            if (element.classList.contains('calc__clear')) {
                this.clearDisplay();
            }
            if (element.classList.contains('calc__numbers')) {
                if(element.value === '.') {
                    if(this.display.value.includes('.') && !/[+\-*/]/.test(lastCharacter)) {
                        return;
                    }
                }
                return (this.display.value += element.value);
            }
            if (element.classList.contains('calc__del')) {
                return this.digitDelete();
            }
            if (element.classList.contains('calc__eq')) {
                return this.calculate();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (/Backspace|Delete/.test(e.code)) {
                this.digitDelete();
            } else if (/Numpad[0-9]|Digit[0-9]/.test(e.code)) {
                this.display.value += e.key;
            } else if (/(NumpadAdd|NumpadSubtract)/.test(e.code)) {
                this.display.value += e.key;
            } else if (/NumpadMultiply|NumpadDivide/.test(e.code)) {
                this.display.value += e.key;
            } else if (/NumpadComma|Period/.test(e.code)) {
                if (!this.display.value.includes('.') && !this.display.value.includes(',')) {
                    this.display.value += '.';
                }
            }
        });
    }

    clearDisplay() {
        return (this.display.value = '');
    }

    digitDelete() {
        const lastCharacter = this.display.value.slice(-1);
        if (/[+\-*/]/.test(lastCharacter)) {
            return (this.display.value = this.display.value.slice(0, -2));
        } else {
            return (this.display.value = this.display.value.slice(0, -1));
        }
    }

    calculate() {
        let result = this.display.value;

        try {
            this.display.value = eval(result);
        } catch (error) {
            this.clearDisplay();
            alert('Conta inválida');
            throw new Error('Conta inválida');
        }
    }
}

const calculator = new Calculator();
calculator;
