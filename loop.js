// FOR

for (let index = 0; index < 10; index ++) {
    console.log(index);
}

const cars = ["Audi", "Delorean", "Harley Davidson"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    console.log(`Esse é o ${i} lugar do Array e o carro é ${cars[i]}`);
}

for (let car of cars) {
    console.log(car);
}

// FOREACH
cars.forEach((car) => console.log(car));

// WHILE

let index = 0;

while (index < 10) {
    console.log('Index é menor do que 10!');
    index++; 
}

// FOR IN

const person = {
    name: 'Alice',
    age: 18,
}

for (property in person) {
    console.log(person[property]);
}
// Loop pelas propriedadas do Objeto