// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

var kmDaPercorrere = prompt('quanti KM vuoi percorrere?');
var eta = prompt('Quanti anni hai?');

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBiglietto = kmDaPercorrere * 0.21;

// va applicato uno sconto del 20% per i minorenni (<18 anni)
// va applicato uno sconto del 40% per gli over 65 (>=65 anni)
if (eta > 0 && eta < 100) {
    if (eta < 18) {
        var scontoGiovani = prezzoBiglietto * 0.2;
        document.getElementById('biglietto').innerHTML = prezzoBiglietto;
        document.getElementById('sconto').innerHTML = scontoGiovani;
        document.getElementById('totale').innerHTML = prezzoBiglietto - scontoGiovani;
        console.log(`il prezzo del biglietto e' di ${prezzoBiglietto}€, scontato del 20% (${scontoGiovani}€), quindi dovrai pagare: ` + (prezzoBiglietto - scontoGiovani) + '€');
    } else if (eta >= 65) {
        var scontoAnziani = prezzoBiglietto * 0.4;
        document.getElementById('biglietto').innerHTML = prezzoBiglietto;
        document.getElementById('sconto').innerHTML = scontoAnziani;
        document.getElementById('totale').innerHTML = prezzoBiglietto - scontoAnziani;
        console.log(`il prezzo del biglietto e' di ${prezzoBiglietto}€, scontato del 40% (${scontoAnziani}€), quindi dovrai pagare: ` + (prezzoBiglietto - scontoAnziani) + '€');
    } else {
        document.getElementById('biglietto').innerHTML = prezzoBiglietto;
        document.getElementById('sconto').innerHTML = '0';
        document.getElementById('totale').innerHTML = prezzoBiglietto;
        console.log(`prezzo biglietto: ${prezzoBiglietto}€, nessuno sconto applicato`);
    }
} else {
    alert("OPS! Qualcosa e' andato storto");
}



