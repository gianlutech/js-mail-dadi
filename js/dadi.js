/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
*/
// Genero due numeri casuali
const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, cpuNumber);

// Verificare il vincitore
if (userNumber > cpuNumber) {
    console.log("L' utente ha vinto")
} else if (userNumber < cpuNumber) {
    console.log("Il PC ha vinto")
} else {
    console.log('Pareggio!!')
}