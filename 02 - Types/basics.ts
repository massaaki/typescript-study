console.log('Typescript - Types');

function add(n1: number, n2: number, showResult: boolean, resultText: string) {
  if(typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error('Incorrect input');
  }
  const result = n1 + n2;
  if(showResult) {
    console.log(resultText + result);
  } else {
    return result;
  }
}

const number1 = 10;
const number2 = 2.9;
const printResult = true;
const resultText = 'The result is: ';

add(number1, number2, printResult, resultText);
