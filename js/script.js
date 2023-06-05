/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Consigli:
    -Facciamo un primo giro col for, in modo da sentirci confident sul risultato della stampa, poi trasformiamo il for in un while
    - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
    - Ricordiamoci di incrementare il contatore all'interno ciclo while per evitare di cascare in un loop infinito.
*/

/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');


//*** DATA ***//
const productsList = ['pane', 'latte', 'uova', 'zucchero', 'arance'];


//*** DOM ELEMENTS ***//
const shoppingListElem = document.getElementById('shopping-list');


// ! Log Data
console.log('### Elenco dei prodotti:');
console.table(productsList);
console.log('');
console.log('### Elmenti DOM:');
console.log('Shopping List:', shoppingListElem);



/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');


//*** SHOW SHOPPING LIST ***//
let productItems = '';

// For cicle
for (let i = 0; i < productsList.length; i++) {

    // Get current product
    const productItem = productsList[i];

    // Create list item
    productItems += `<li class="list-group-item">${productItem}</li>`;
}

// Insert HTML inside the page
shoppingListElem.innerHTML = productItems;


console.log('----------- DONE -----------');