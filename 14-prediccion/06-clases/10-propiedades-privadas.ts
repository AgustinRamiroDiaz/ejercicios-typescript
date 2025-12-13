/*
 * EJERCICIO: Propiedades privadas
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(cantidad: number) {
    this.saldo += cantidad;
  }
}

let cuenta = new CuentaBancaria(100);
console.log(cuenta.getSaldo());
cuenta.depositar(50);
console.log(cuenta.getSaldo());

// Predicción 1:
// Predicción 2:

export {};
