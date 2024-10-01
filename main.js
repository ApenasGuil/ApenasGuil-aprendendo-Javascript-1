const names = ["Guilherme", "Kervia", "Alice", 10, false];
// Listas começam no index 0

const nome = names[1];
// console.log(nome);

names.push("Gustavo");
// Adiciona ao final da Lista

names.shift();
// Remove o index[0] da Lista

names.unshift("Felipe");
// Adiciona X como index[0], empurrando o resto para trás

names.pop();
// Remove o último index da Lista

names[3] = "Pedro";
// Reassinala o index especificado

// names = ['a', 'b', 'c'];
// Impossível reassinalar diretamente todos os indexes da Lista

// console.log(names.indexOf('Alice'));
// Exibe o index do termo especificado

console.log(names);

const sortedNames = names.sort();
console.log(sortedNames);

const namesIsArray = Array.isArray(names);
// Checa se a variável especificada é um array ou não
console.log(namesIsArray);