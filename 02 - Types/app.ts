function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}


function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {
  const result = n1 + n2;
  cb(result);
}


addAndHandle(2,7, (result) => {
  console.log(result);
})


function generateError(message: string, code: number): never {
  throw {
    message: message, errorCode: code
  };
}

generateError('An error ocurred!', 500);




// printResult(add(2, 3));


// let combineValues: (a: number, b: number) => number;

// combineValues = add;

// console.log(combineValues(8,8));


