const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const errorMessage = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    // console.log('Clicked!');

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // if(nameValue === '' || emailValue === '') {
    //     return alert('Campos vazios!');
    // }
    
    // myForm.style.background = "red";

    items.children[0].textContent = nameInput.value;
    items.children[1].textContent = emailInput.value;
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = 'Por favor, preencha os campos.';
        errorMessage.classList = 'error'; // adiciona a classe especificada

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        // Após 3 segundos (3.000 milissegundos), executa o código dentro

        return;
    }
    
    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br /> Email: ${emailValue}`;
    // criação do 'li' através de Javascript

    items.appendChild(li);
    // Adiciona o 'li' criado acima à lista de items

    nameInput.value = "";
    emailInput.value = "";
    // Limpa os campos ao final
})