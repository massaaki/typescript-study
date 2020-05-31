const person: {
  name: string; //typescript representation of object types
  age: number;
} = {
  name: 'Massaaki',
  age: 30
};

const person2 = {
  name: 'Massaaki2',
  age: 10,
  hobbies: [
    'videogames', 'soccer'
  ],
  role: [
    2, 'editor'
  ]
};

const person3 : {
  name: string;
  age: number;
  hobbies: string[];
  role: [number,string];
} = {
  name: 'Massaaki2',
  age: 10,
  hobbies: [
    'videogames', 'soccer'
  ],
  role: [
    2, 'editor'
  ]
};
person3.role = [0, 'asd'];


// let favoriteActivities: string[];
// favoriteActivities = ['football'];


for(const hobby of person2.hobbies) {
  console.log('> ', hobby.toUpperCase());
}

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}

const person5 = {
  name: 'Massaaki2',
  age: 10,
  hobbies: [
    'videogames', 'soccer'
  ],
  role: Role.ADMIN
};

// console.log(person5);



// Union
function combine(input1: number | string, input2: number | string) {

  let result;

  if(typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  }  else {
    result = input1.toString() + input2.toString();
  }
    return result;
}

// const combineAges = combine(30,21);
// console.log(combineAges);

// const combineNames = combine('max', 'ana');
// console.log(combineNames);





//Literal Types
function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {

  let result;

  if(typeof input1 == 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  }  else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

// const comnbineAge2 = combine2(20,10, 'as-number');
// console.log(comnbineAge2);
// const combineStringAges2 = combine2('20','10', 'as-number');
// console.log(combineStringAges2);
// const combineStringNames2 = combine2('str1','str2', 'as-text');
// console.log(combineStringNames2);


type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine3(input1: Combinable , input2: Combinable, resultConversion: ConversionDescriptor) {

  let result;

  if(typeof input1 == 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  }  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

