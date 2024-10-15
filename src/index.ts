import promptSync from "prompt-sync";
import { Calculadora } from "./Calculadora";
const prompt = promptSync();

const calculadora = new Calculadora(0, 0);
let firstOperand: number,
  secondOperand: number,
  result: number | undefined,
  option: number;

do {
  console.log(`---------------------------------
1) Sumar\n
2) Restar\n
3) Multiplicar\n
4) Dividir\n
5) Salir\n`);
  option = Number(prompt("¿Ingrese un número? "));

  if (option >= 1 && option < 5) {
    firstOperand = Number(prompt("Ingrese el primer operando: "));
    secondOperand = Number(prompt("Ingrese el segundo operando: "));

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
      console.error("Por favor, ingresa valores numéricos.");
      continue;
    }

    calculadora.setOperands(firstOperand, secondOperand);

    result = undefined;

    switch (option) {
      case 1:
        result = calculadora.sumar();
        break;
      case 2:
        result = calculadora.restar();
        break;
      case 3:
        result = calculadora.multiplicar();
        break;
      case 4:
        try {
          result = calculadora.dividir();
        } catch (e: unknown) {
          if (e instanceof Error) {
            console.error(e.message);
          } else {
            console.error("Ocurrió un error inesperado.");
          }
          continue;
        }
        break;
    }

    if (result !== undefined) {
      console.log(`El resultado es: ${result}`);
    }
  } else if (option === 5) {
    console.log("Saliendo, saludos 👋...");
  } else {
    console.error("Opción inválida. Por favor, ingresa un número entre 1 y 5.");
  }
} while (option !== 5);
