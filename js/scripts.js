const numeroUno = parseInt(prompt('Inserisci 5 numeri che vuoi sommare e farò anche una media finale essi'));
const numeroDue = parseInt(prompt('Inserisci il prossimo (2/5)'));
const numeroTre = parseInt(prompt('Inserisci il prossimo (3/5)'));
const numeroQuattro = parseInt(prompt('Inserisci il prossimo (4/5)'));
const numeroCinque = parseInt(prompt('Inserisci il prossimo (5/5)'));

const totale = numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque;

const media = totale / 5;

console.log('La somma dei numeri inseriti è = ' + totale);

console.log('La media dei numeri inseriti è = ' + media);