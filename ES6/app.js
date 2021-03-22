//expression function

const trovaDispari = numero => numero % 2 !== 0
/*questa funzione, con la arrow diventa:
const trovaDispari = numero = numero %2 !== 0*/


const numeri = [4, 5, 6, 8, 8, 8, 9, 3, 2, 3]
//console.log("ciao", numeri);

const dispari = numeri.filter(numero => numero % 2 !== 0) //se volessi utilizzare variabile dispari, riciclo scrivendola " let dispari"
/*all stesso modo, con la arrow la funzione alla riga 13 puo essere scritta:
dispari = numeri.filter(numero => numero % 2 !==0)*/
//console.log(dispari);

const parole = ["latte", "casa", "mario", "mela"];
//non posso prendere parole, fare filter, e poi 

const findWord = word => item => item === world

//ESEMPI FUNZIONI DI ORDINE SUPERIORE, in Jvascript NON si usa USE
//abbiamo funzione findWord:
function findWord(word) {
    //qui sto cercando un modo per far si che riesca a confrontare una parola introdotta con l'array di parole
    return function (item) {
        return item === word
    }/*restituisce un'altra funzione  --> return function(item) {
         -la funzione che fa da filtro restituisce false o true-
         return item === word*/
}

//SCRITTURA FUNZIONE ORDINE SUPERIORE IN JS : const findWord = word => item => item === world



const result = parole.filter(findWord("mela"))
console.log(result)
//per fare una funzione flessibile e non fissa,

//funzione di ordine superiore funzione a cui voglio passare molti più argomenti del classico un argomento, che accetta come argomento una funzione oppure restituisce come argomento una funzione. La funzione accettata come argomento si chiama callback

/*numeri.filter(/*vuole come argomento una callbacktrovaDispari)*/

/**
 * numeri.filter(function(numero) {
 * return numero % 2 !== 0
 * })
 */