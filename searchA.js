/*
  Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
 */

const checkChar = (string, char) => {
  const lowerCaseString = string.trim().toLowerCase().split("");
  const lowerCaseChar = char.trim().toLowerCase();

  if (lowerCaseChar.length > 1) return -1;

  let count = 0;
  if (lowerCaseString.includes(lowerCaseChar)) {
    lowerCaseString.map((stringChar) =>
      stringChar === lowerCaseChar ? count++ : (count += 0)
    );
  }

  return count;
};

const letter = "a";
const checkString = "Target SistemAs";
const letterQuantity = checkChar(checkString, letter);

if (letterQuantity === -1) {
  console.log("Erro. Informe apenas um caractere para ser verificado");
} else {
  console.log(
    `Quantidade de letras "${letter}" na string "${checkString}": ${
      letterQuantity !== 0 ? letterQuantity : `Não possui letra "${letter}"`
    }`
  );
}
