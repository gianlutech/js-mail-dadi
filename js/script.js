console.log('js ok')
/* Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.
*/
// Creo elenco utenti autorizzati
const mailElement = ["io@mail.it", "tu@mail.it", "egli@mail.it", "noi@mail.it", "voi@mail.it", "essi@mail.it",];

console.table(mailElement);

//Ciedo email all' utente
const UserEmail = prompt('Inserisci la tua mail', 'io@mail.it').trim();
console.log('username', UserEmail);

//Controllo se la mail è tra gli utenti autorizzati
// ! PER OGNI ELEMENTO DELLA LISTA

let isAllowed = false;

for (let i = 0; i < mailElement.length; i++) {
    if (UserEmail === mailElement[i]) {
        console.log("L'ho trovata!");
        isAllowed = true;
    }
}


