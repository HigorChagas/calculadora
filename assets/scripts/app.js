class Calculator {
  constructor() {
    this.display = document.querySelector(".calc__input");

    document.addEventListener("click", (event) => this.handleClick(event));
    document.addEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleClick(event) {
    const element = event.target;
    const lastCharacter = this.display.value.slice(-1);

    if (element.classList.contains("calc__operations")) {
      if (/[\+\-\*/]/.test(lastCharacter)) {
        return;
      }
      return (this.display.value += element.value);
    }
    if (element.classList.contains("calc__clear")) {
      this.clearDisplay();
    }
    if (element.classList.contains("calc__numbers")) {
      if (element.value === ".") {
        const numbers = this.display.value.split(/[\+\-\*/]/);
        if (numbers[numbers.length - 1].includes(".")) return;
      }
      return (this.display.value += element.value);
    }
    if (element.classList.contains("calc__del")) {
      return this.digitDelete();
    }
    if (element.classList.contains("calc__eq")) {
      return this.calculate();
    }
  }

  handleKeydown(event) {
    const lastCharacter = this.display.value.slice(-1);

    if (/Backspace|Delete/.test(event.code)) {
      return this.digitDelete();
    }
    if (/Numpad[0-9]|Digit[0-9]/.test(event.code)) {
      return (this.display.value += event.key);
    }
    if (
      /NumpadAdd|NumpadSubtract|NumpadMultiply|NumpadDivide/.test(event.code)
    ) {
      if (/[\+\-\*/]/.test(lastCharacter)) return;
      return (this.display.value += event.key);
    }
    if (/NumpadComma|Period/.test(event.code)) {
      const numbers = this.display.value.split(/[\+\-\*/]/);
      if (numbers[numbers.length - 1].includes(".")) return;
      return (this.display.value += ".");
    }
    if (/Enter|NumpadEnter/.test(event.code)) {
      return this.calculate();
    }
  }

  clearDisplay() {
    return (this.display.value = "");
  }

  digitDelete() {
    this.display.value = this.display.value.slice(0, -1);
  }

  calculate() {
    try {
      this.display.value = new Function("return " + this.display.value)();
    } catch (error) {
      this.display.value = "Erro";
      setTimeout(() => this.clearDisplay(), 1500);
    }
  }
}

const calculator = new Calculator();
