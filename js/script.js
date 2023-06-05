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
console.log('');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');


//*** SHOW SHOPPING LIST ***//
let productItems = '';

// For cicle
/*for (let i = 0; i < productsList.length; i++) {

    // Get current product
    const productItem = productsList[i];

    // Create list item
    productItems += `<li class="list-group-item">${productItem}</li>`;
}
*/

// While cicle
let i = 0;

while (i < productsList.length) {

    // Get current product
    const productItem = productsList[i];

    // Create list item
    productItems += `<li class="list-group-item d-flex align-items-center">
        <input class="form-check-input me-2" type="checkbox" value="" id="list-item-${i+1}">
        <label class="form-check-label flex-grow-1" for="list-item-${i+1}">${productItem}</label>
    </li>`;

    // Increment Index
    i++
}

// Insert HTML inside the page
shoppingListElem.innerHTML = productItems;


// ! Log List Element
console.log('### Elementi inseriti:');
console.log(productItems);
console.log('');


//*** DELETE ITEMS ON CLICK ***//
// Get dynamic shopping items
const shoppingItemsElem = shoppingListElem.querySelectorAll('li');

// Cicle items list
for(let i = 0; i < shoppingItemsElem.length; i++) {

    // Get current item
    const shoppingItemElem = shoppingItemsElem[i];

    // Listen on click event
    shoppingItemElem.addEventListener('click', function () {

        // Get checkbox status
        const isChecked = shoppingItemElem.querySelector('input').checked;
        
        // Remove style class
        shoppingItemElem.classList.remove('is-done');

        // Add class based on checkbox status
        if(isChecked) shoppingItemElem.classList.add('is-done');
    });
}


console.log('----------- DONE -----------');