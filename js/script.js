 
//  Palidroma:
//  Chiedere all’utente di inserire una parola Creare una funzione per capire 
// se la parola inserita è palindroma

function getPali(palindroma){
  var inversa = palindroma.split('').reverse().join('');  
  return inversa;
}

var parolaUtente = prompt("Inserisci una parola palindroma");
var parolaInversa = getPali(parolaUtente);

if(parolaUtente === parolaInversa){
    document.getElementById("palindromo").innerHTML = parolaUtente + ": la parola è palindroma";
} else {
    document.getElementById("palindromo").innerHTML = parolaUtente + ": la parola non è palindroma";
}

// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Infine, dichiariamo chi ha vinto.

var pariDispari = prompt("Scegli pari o dispari");
var numeriUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

function numeroCasuale() {
    var random = Math.floor(Math.random() * 5) + 1;
    return random;
}

var somma = numeroCasuale() + numeriUtente;
console.log(somma);
var x = "pari";

function pariDis (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var risultato = pariDis(somma);

if (risultato === true && pariDispari === x) {
    document.getElementById("numeri").innerHTML = "Il numero è pari";
} else if (risultato === false && pariDispari !== x) {
    document.getElementById("numeri").innerHTML = "Il numero è dispari";
} else {
    document.getElementById("numeri").innerHTML = "La somma e la parola inserita sono opposti";
}











