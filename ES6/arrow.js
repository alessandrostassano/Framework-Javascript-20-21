const colori = new Array() //in ecma script 6 non posso dichiarare nè riassegnare due volte LA STESSA variabile
//const vuol dire cheposso modificare quell'array, ma non posso mettere un'altra cosa al posto di quell'array
colori.push("red")
console.log(colori)

colori.push("green")
console.log(colori) //sto dicendo alla console di dirmi cosa c'è dentro colori

let numeri = [1, 2, 3, 4, 5]; //let si può riasssegnare, "prendo sctola che già esiste e la riutilizzo", ma non posso ricreare la scatola numeri
numeri = "uno due tre quattro cinque"
console.log(numeri)

const num = [1, 22, 3, 44, 57, 6, 7, 89, 9]
// ho un array comequesto sopra, e  devo creare un array con tutti i cassetti raddoppiati
//per creare l'array desiderato, uso il metodo map che ha la stessa funzione di array map, applicando all'array num, e utilizzo la funzione di callback numero
const res = num.map(function (numero) { //il map sta prendendo ogni valore del mio array di numeri,e lo sta applicando alla funzione anonima la quale prende ogni cassetto e la modifica/sostiuisce con la variabile numero che in questo caso raddoppia il valore
    //console.log(numero, "indice: ", index); la funzione anonima restituisce il numero 
    return numero * 2
})

//arrow function 
const res = num.map((numero) => {
    return numero * 2
})

// arrow function con un solo argomento nella callback, se ne ho solo uno posso omettere le parentesi tonde
//se la funzione di callback una sola riga di codice posso omettere le parentesi graffe e il return
const res = num.map(numero => numero * 2
)

//
console.log(res)
//function expression 
let sum = (a, b) => a + b; //qui stiamo leggendo la dichiarazione id una funzione con due argomenti che sta svolgendo l'operazione in return a + b

//function expression
let sum = function (a, b) {
    return a + b;
}

function sum(a, b) {
    return a + b;
}

//quadrato di un numero 
function square(n) { //questa alla riga 46 è la tecnica ES5
    const res = n * n; //questo const, essendo dentro la funzione, è locale, nasce, viva e muore dentor la fuznione, se ho dichiarato dentor di essa una variabile
    return res;
}

const res = square(5) //--> mi restituirebbe console.log(25)

// function expression 

const square = function (n) {
    return n * n
}

const res = square(5) //console.log(25)

//function expression con arrow function 
const square = (n) => { return n * n }

const square = n => n * n

const numeri = [5, 3, 2]
//ora prendiamo i numeri e facciamo i quadrati 
const quadrati = numeri.map/*map restituisce sempre un array, ma cambiato*/(n =>/*vuol dire che diventa*/ n * n).filter(n => n % 2 === 2) //facendo cosi, con .filter, mi restituisce solo quegli elementi dell'array che una volta fatti al quadrato sono pari

