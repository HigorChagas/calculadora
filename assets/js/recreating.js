function Calculadora(display) {

    display = document.querySelector('.display');

    this.iniciar = () => {
        this.cliqueBotoes();
    }

    this.btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus;
    }

    this.clearDisplay = () => display.value = '';
    this.apagaUm = () => display.value = display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }
            display.value = conta;
        } catch(error) {
            alert('Conta inválida');
            return;
        }
    }
    

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;

            if(elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }

            if(elemento.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    }


}

const calculadora = new Calculadora()
calculadora.iniciar();