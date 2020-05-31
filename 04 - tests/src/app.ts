console.log('started');


/** 
 * Functions
 */

const add = (a: number, b: number = 1) => a + b;
const printOutput : (a:number | string) => void = output => console.log(output);

printOutput(add(3));


const button = document.querySelector('button');

if(button) {
  button.addEventListener('click', event => console.log(event) );
}



/*
 * SPREAD OPERATORS
*/ 
const hobbies = ['sports', 'games'];

const activeHobbies = ['learning'];

activeHobbies.push(...hobbies); //spread operator



const person = {
  name: 'Mau',
  age: 30
}

const person2 = {...person };

const add2 = ( ...numbers: number[] ) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
  
}

const addedNumbers = add2(3,2, 12, 4, 1);
console.log(addedNumbers);


/**
 * destructuring
 */

//array
 const [hobby1, hobby2, ...remaningHobbies] = hobbies;
 console.log('HOBBIES..: ',hobby1, hobby2, remaningHobbies);


//object
const {name, age} = person;
console.log(name, age);

