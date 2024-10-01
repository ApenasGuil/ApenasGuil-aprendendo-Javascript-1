const addUserText = document.getElementById('add-user');
// Seleciona o elemento pelo ID do  HTML
// Retorna uma referência ao elemento selecionado

addUserText.innerText = 'Adicionar usuário';
// Altera texto interno do elemento

// console.log(addUserText);

const addUserText2 = document.querySelector('#add-user');
// Igual ao getElementById porém deve-se utilizar com #
// Retorna o elemento completo

addUserText2.textContent = 'Adicionar usuário';
// Altera texto interno do elemento

// Query adicionado posteriormente, então mais atualizado

const myForm = document.querySelector(".container #my-form");
// class=container + id=my-form

const myForm2 = document.querySelector(".item");
// retorna apenas o primeiro elemento


// SELECIONAR MÚLTIPLOS ELEMENTOS
const allItems = document.querySelectorAll('.items .item');
console.log(allItems);

const allItemsClass = document.getElementsByClassName("item");
console.log(allItemsClass);
// Não viável (HTMLCOllection)

const allItemsTag = document.getElementsByTagName("li");
console.log(allItemsTag);
// Não viável (HTMLCOllection)