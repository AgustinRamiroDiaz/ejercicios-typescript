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

  retirar(cantidad: number) {
    this.saldo -= cantidad;
  }

  transferir(cantidad: number, otraCuenta: CuentaBancaria) {
    this.retirar(cantidad);
    otraCuenta.depositar(cantidad);
  }
}

let cuentaMario = new CuentaBancaria(100);
let cuentaLuigi = new CuentaBancaria(50);

console.log(cuentaMario.getSaldo());
console.log(cuentaLuigi.getSaldo());

cuentaMario.depositar(50);
console.log(cuentaMario.getSaldo());
console.log(cuentaLuigi.getSaldo());

cuentaMario.transferir(30, cuentaLuigi);
console.log(cuentaMario.getSaldo());
console.log(cuentaLuigi.getSaldo());

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:

export {};
