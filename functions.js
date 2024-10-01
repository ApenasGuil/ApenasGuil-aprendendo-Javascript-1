function sum (a, b) {
    return a + b;
}

console.log(sum(5, 5));

function sum (a, b = 10) {
    return a + b;
}
// Define um valor padrão, para algum parâmetro caso não seja definido

console.log(sum(5));

// ARROW FUNCTION
const sumArrow = (a = 0, b = 0) => a + b;

console.log(sumArrow(2, ));