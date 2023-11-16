// chiedere a user nome, cognome, colore per generare una password con risultato nome+cognome+colore+23

// chiedo il nome
const userName = prompt("qual'è il tuo nome?");
console.log(userName);

// chiedo il cognome
const userSurname = prompt("qual'è il tuo cognome?");
console.log(userSurname);

// chiedo il colore preferito
const userColor = prompt("qual'è il tuo colore preferito?");
console.log(userColor);

// ricevo la pssword finita
let userPassword = userName + userSurname + userColor + "23"

// output del risultato
console.log(password);

// risultato
document.getElementById("risultato").innerHTML = "Ecco la tua nuova password: " + userPassword;