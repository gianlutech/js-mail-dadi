/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
*/

const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, cpuNumber);