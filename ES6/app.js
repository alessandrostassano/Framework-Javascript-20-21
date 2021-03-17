//expression function

const trovaDispari = function (numero) {
    return numero % 2 !== 0
} 
/*questa funzione, con la arrow diventa:
const trovaDispari = numero = numero %2 !== 0*/


const numeri = [4, 5, 6, 8, 8, 8, 9, 3, 2, 3]
console.log("ciao", numeri);

const dispari = numeri.filter(trovaDispari) //se volessi utilizzare variabile dispari, riciclo scrivendola " let dispari"
/*all stesso modo, con la arrow la funzione alla riga 13 puo essere scritta:
dispari = numeri.filter(numero => numero % 2 !==0)*/
console.log(dispari);


/*numeri.filter(/*vuole come argomento una callbacktrovaDispari)*/

/**
 * numeri.filter(function(numero) {
 * return numero % 2 !== 0
 * })
 */