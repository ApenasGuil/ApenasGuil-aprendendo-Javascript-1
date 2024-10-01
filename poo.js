class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static speak() {
        console.log(`Hello World!`);
    }
}

const person = new Person('Guilherme', 'Souza', 26);

console.log(person);

person.getFullName();

Person.speak();
// static functions não necessiram de instanciamento de classe para serem utilizadas

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Mia");
const dog = new Dog("Otto")

animal.speak();
dog.speak();