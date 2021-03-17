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