/**
 * EJERCICIO: Condicionales IF
 * 
 * En este juego, necesitas verificar si el jugador puede usar un arma
 * basándote en su nivel y si tiene suficiente mana.
 * 
 * INSTRUCCIONES:
 * 1. Completa la función puedeUsarArma para que retorne true si:
 *    - El nivel del jugador es mayor o igual a 5
 *    - Y el mana del jugador es mayor o igual a 10
 * 2. Completa la función puedeUsarHabilidad para que retorne:
 *    - "Puede usar habilidad especial" si el mana es mayor o igual a 50
 *    - "Puede usar habilidad normal" si el mana es mayor o igual a 20
 *    - "No tiene suficiente mana" en cualquier otro caso
 */

//Declaraciones "puedeUsarArma"
  let nivel: number = 4
  let mana: number = 42

export function puedeUsarArma(nivel: number, mana: number): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Escribe tu código aquí usando if
  // Retorna true si nivel >= 5 Y mana >= 10
  if((nivel >= 5) && (mana >= 10)) {return(true)}
                              else {return(false)}
}
console.log(puedeUsarArma(nivel, mana))//puedo hacerlo sin declarar las variables y poner directamente los numeros.




export function puedeUsarHabilidad(mana: number): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Escribe tu código aquí usando if-else
  // Retorna "Puede usar habilidad especial" si mana >= 50
  // Retorna "Puede usar habilidad normal" si mana >= 20
  // Retorna "No tiene suficiente mana" en otro caso

  if(mana >= 50) {
    return("Puede usar habilidad especial")
  }
    else if(mana >= 20) {
      return("Puede usar habilidad normal")   
    }
    else{return("No tiene suficiente mana")}
}
console.log(puedeUsarHabilidad(19))//use la funcion sin delarar la variable


let daniobase: number

export function calcularDanio(nivel: number, tieneArma: boolean): number{
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el daño basándote en:
  // - Si tiene arma: daño base = nivel * 10
  // - Si no tiene arma: daño base = nivel * 5
  // - Si el nivel es mayor a 10, multiplica el daño por 1.5
/*
  if(nivel>10){daniobase = nivel * 1.5} //Esta es la primera forma que se me ocurrió, me parece la mas simple
   else       {daniobase = nivel}
  if(tieneArma === true) {daniobase = daniobase *10}
   else                  {daniobase = daniobase *5}
 return daniobase
 */
 /*
  if(tieneArma === true) {daniobase = 10} //Esta forma surgio de intentar invertir los if, al principio pensaba que el orden era indiferente pero me di cuenta
   else                  {daniobase = 5}  //que en este segundo caso daniobase tenia que tener un valor asignado para que el otro if funcione pero creo que
 if(nivel>10){daniobase = daniobase * nivel * 1.5} //hay una mejor forma de resolverlo.
   else       {daniobase = daniobase * nivel}  
 return daniobase
 */
let daniobase: number= 1
 if(tieneArma == true) {daniobase = daniobase * 10} //Aca logre poder conmutar los if sin que afecte el resultado final, podria haberlo hecho sin declarar daniobase
 else                 {daniobase = daniobase * 5}  //de esta manera: if(......) {daniobase = 1 * (...)} de esta forma tambien me aseguro que los if
 if(nivel>10){daniobase = daniobase * nivel * 1.5} // funcionen idependientemente del orden.
 return daniobase
}

console.log(calcularDanio(11,true))

