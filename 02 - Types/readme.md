# Typescript - Types

## enum
```
enum Role {
  ADMIN, READ_ONLY, AUTHOR
}

const person4 = {
  name: 'Massaaki2',
  age: 10,
  hobbies: [
    'videogames', 'soccer'
  ],
  role: Role.ADMIN
};

```


## define object types 
```
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
```


## Union
in typescript you can declare multiple var types, and inside then you can work with declared object types with autocomplete.
``` 
function combine(input1: number | string, input2: number | string) {

  let result;

  if(typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  }  else {
    result = input1.toString() + input2.toString();
  }
    return result;
}
```

## Literal types
```
function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {

  let result;

  if(typeof input1 == 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  }  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```

## Callback
```
function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {
  const result = n1 + n2;
  cb(result);
}


addAndHandle(2,7, (result) => {
  console.log(result);
})
```