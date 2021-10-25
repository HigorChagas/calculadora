function criaCalculadora() {
    
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            console.log(eval(conta));

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida');
                return
            }   
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
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
            });
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();