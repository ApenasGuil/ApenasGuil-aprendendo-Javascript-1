const person = {
    firstName: 'Guilherme',
    lastName: 'Souza',
    age: '26',
    hobbies: ['Ver filmes', 'F1', 'Jogar cod'],
    cat: {
        name: 'Mia',
        age: 3,
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

const {
    firstName: primeiroNome,
    lastName: ultimoNome,
    age: idade,
    hobbies,
    cat: { name: dogName },
} = person;
// Destructuring

const hobbieCod = person.hobbies[2];

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(hobbieCod);

// person.cat = "Mia";

console.log(dogName);

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

console.log(toDos[2].description);