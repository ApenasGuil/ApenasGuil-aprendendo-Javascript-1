const numbers = [1, 2, 3, 4, 5];

const numbersTimesTwo = numbers.map(function(num) {
    return num * 2;
});
// Map faz o loop da Lista (foreach)

// console.log(numbersTimesTwo);

const ages = [8, 13, 27, 30, 22, 40];
console.log(ages);

const evenAges = ages.filter((age) => age % 2 === 0);
console.log(evenAges);

/* 
.filter() retorna um array com menos ou o mesmo número de elementos do original, dependendo do teste.
.map() retorna um array com o mesmo número de elementos, mas modificados pela função aplicada.
(ChatGPT)

Line 13: ES6 simplifica-se o return, omitindo-o
*/

const sumOfAges = ages.reduce((accumulator, age) => accumulator + age, 0);
// accumulator: começa com o valor inicial 0 (definido no segundo argumento do .reduce()).
// age: percorre cada valor no array ages.

console.log(sumOfAges);