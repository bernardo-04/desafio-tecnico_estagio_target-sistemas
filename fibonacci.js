/*
  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

const calcFibonacci = (num) => {
  const sequence = [];

  // Valores iniciais
  let num1 = 0;
  let num2 = 1;
  sequence.push(num1, num2);

  while (sequence[sequence.length - 1] < num) {
    sequence.push(num1 + num2);
    num1 = sequence[sequence.length - 2];
    num2 = sequence[sequence.length - 1];
  }

  return sequence;
};

const number = 987; // Número a ser informado
const fibonacciSequence = calcFibonacci(number);

console.log(`Sequência de Fibonacci:\n${fibonacciSequence}\n`);
console.log(
  `O número ${number} ${
    fibonacciSequence.includes(number) ? "pertence" : "não pertence"
  } à Sequência de Fibonacci`
);
