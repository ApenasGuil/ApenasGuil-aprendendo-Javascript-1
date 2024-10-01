const toDos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'F1',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    }
];

const todosJSON = JSON.stringify(toDos);
// Convertendo Array para JSON

console.log(todosJSON);
// [{"id":1,"description":"Estudar programação","isCompleted":false},{"id":2,"description":"F1","isCompleted":true},{"id":3,"description":"Treinar","isCompleted":true}]

/*
Objeto: Estrutura de dados com pares chave-valor. Exemplo: { nome: "Ana", idade: 30 }.
Array (List): Coleção de elementos ordenados, indexados por números. Exemplo: ["maçã", "banana", "laranja"].
JSON: Formato texto para representar dados de objetos ou arrays. Exemplo: '{"nome": "Ana", "idade": 30}'.
*/

const todosList = JSON.parse(todosJSON);
// Convertendo JSON para Array 

console.log(todosList);