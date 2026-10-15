/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
   return l1 * l2
}

console.log(area(3, 4))

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function sommaPazza(a, b) {
   if (a === b) {
      return (a + b) * 3;
   }
   return a + b;
}

console.log(sommaPazza(2, 3));
console.log(sommaPazza(4, 4));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function distanzaDa19(n) {
   if (n > 19) {
      return n * 3;
   }
   return Math.abs(n - 19);
}

console.log(distanzaDa19(5));
console.log(distanzaDa19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function dentroIntervallo(n) {
   if (20 <= n && n <= 100 || n === 400) {
      return true
   }
   return false
}

console.log(dentroIntervallo(15))
console.log(dentroIntervallo(80))
console.log(dentroIntervallo(120))
console.log(dentroIntervallo(400))

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(testo) {
   if (testo.startsWith("EPICODE")) {
      return testo

   }
   return "EPICODE" + " " + testo
}

console.log(epify("ciao"))
console.log(epify("EPICODE bella"))

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function divisibilePer3o7(n) {
   if (n % 3 === 0 && n % 7 === 0) {
      return true;
   }
   return false;
}

console.log(divisibilePer3o7(30))
console.log(divisibilePer3o7(21))

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function invertiStringa(testo) {
   let x = testo.split("");
   let y = [];
   for (let i = testo.length - 1; i >= 0; i--) {
      y.push(x[i])
   }
   return y.join("");
}

console.log(invertiStringa("papera"))


/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function inizialiMaiuscole(frase) {
   let x = frase.split(" ");
   let y = [];
   for (let i = 0; i < x.length; i++) {
      y.push(x[i].slice(0, 1).toUpperCase() + x[i].slice(1)) /* il primo prende l'iniziale e la rende maiuscola e il secondo prende il resto della parola*/
   }
   return y.join(" ");
}

console.log(inizialiMaiuscole("la casa blu"))

/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function togliPrimoEUltimo(testo) {
   return testo.slice(1, -1)
}

console.log(togliPrimoEUltimo("EPICODE"))

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function dammiCasuali(n) {
   let x = [];
   for (let i = 0; i < n; i++) {
      x.push(Math.floor(Math.random() * 11))
   }
   return x;
}

console.log(dammiCasuali(5))

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function etaInGiorni(annoNascita, meseNascita, giornoNascita) {
   let oggi = new Date();
   let nascita = new Date(annoNascita, meseNascita - 1, giornoNascita);
   let millisecondi = oggi - nascita;
   let giorni = Math.floor(millisecondi / (1000 * 60 * 60 * 24));
   return giorni
}

console.log(etaInGiorni(1995, 2, 28))
