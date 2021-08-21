// Desestruturando um Array
let myArray = [1, 2, 3, 4, 5];

let [num1, num2, num3, num4, num5] = myArray;

console.log(num1, num2, num3, num4, num5);

const myArra2 = [6, 7, 8, 9]; // Ignorando elementos na desistruturação
let [n6, , n8, n9] = myArra2;

console.log(n6, n8, n9);

// Desestruturando objetos
const pessoa = {
  nome: "Murilo",
  sobrenome: "Prado",
  idade: 26,
  profissao: "Programador",
};

let {
  nome: meuNome,
  sobrenome: meuSobrenome,
  idade: minhaIdade,
  profissao: minhaProfissao,
} = pessoa;

console.log(
  `Nome: ${meuNome}\nSobrenome: ${meuSobrenome}\nIdade: ${minhaIdade}\nProfissão: ${minhaProfissao}`
);

let { nome: apenasNome } = pessoa;
console.log(apenasNome);

// Desestruturando funções
function myFunctionDestructuring() {
  return ["Teste", 66, true, 50.55];
}

let [guarda1, guarda2, guarda3, guarda4] = myFunctionDestructuring();

console.log(`${guarda1}\n${guarda2}\n${guarda3}\n${guarda4}`);

const myArrowFunctionDestructuring = () => {
  return {
    cor1: "Azul",
    cor2: "Preta",
    cor3: "Amarela",
    cor4: "Vermelha",
  };
};

let {
  cor1: myCor1,
  cor2: myCor2,
  cor3: myCor3,
  cor4: myCor4,
} = myArrowFunctionDestructuring();
console.log(`${myCor1}\n${myCor2}\n${myCor3}\n${myCor4}\n`);

// Desestruturando strings
const myString = "Murilo";

let [letra1, letra2, letra3, latra4, letra5, letra6] = myString;

console.log(
  `${letra1}\n${letra2}\n${letra3}\n${latra4}\n${letra5}\n${letra6}\n`
);

// Rest operator
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [numberOne] = myNumbers;
console.log(numberOne);

// Cuidados
let obj = {
  x: 1,
  y: 2,
};

let px, py;

({ x: px, y: py } = obj);
console.log(px, py);
