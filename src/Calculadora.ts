export class Calculadora {
  private firstOperand: number;
  private secondOperand: number;

  constructor(operando1: number, operando2: number) {
    this.firstOperand = operando1;
    this.secondOperand = operando2;
  }

  sumar(): number {
    return this.firstOperand + this.secondOperand;
  }

  restar(): number {
    return this.firstOperand - this.secondOperand;
  }

  multiplicar(): number {
    return this.firstOperand * this.secondOperand;
  }

  dividir(): number {
    if (this.secondOperand === 0) {
      throw new Error("División por cero no permitida.");
    }
    return this.firstOperand / this.secondOperand;
  }

  setOperands(operando1: number, operando2: number): void {
    this.firstOperand = operando1;
    this.secondOperand = operando2;
  }
}
