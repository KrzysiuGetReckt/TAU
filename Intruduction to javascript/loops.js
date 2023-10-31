const bigTable = ['Sarah', 'Cate', 'August', 'Jenifer', 'Jacob', 'Merlin'];

for (let i = 0; i < bigTable.length; i++) {
  console.log(bigTable[i]);
}

let secretMessage = "That's good";
let userGuess = '';

// while (userGuess != secretMessage) {
//   userGuess = prompt('Plese enter the secret message');
//   if (userGuess === secretMessage) {
//     alert('Login succesfull');
//   }
// }

let fact = 1;
let number = 10;

do {
  fact = fact * number;
  number--;
} while (number > 0);

console.log(fact);
